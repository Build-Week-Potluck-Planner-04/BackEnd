const bcrypt = require("bcryptjs");
const buildToken = require("../config/buildToken");
const Users = require("./users-model.js");


const validReqBody = ( req, res, next ) => {
    const { username, password } = req.body

    if(!username || !username.trim() || !password || !password.trim()) {
        next({ status: 422, message: "Username and password required" })

    } else {
        req.username = username.trim()
        req.password = password.trim()
        next();
    }
}

const checkUsernameExists = async ( req, res, next ) => {
    const alreadyUsername = await Users.findBy({ username: req.username })

        if(alreadyUsername.length){
            next({ status: 422, message: "Username unavailable" })

        } else {
            next();
        }
}

const checkUserId = async ( req, res, next ) => {
    const { id } = req.params

    const user = await Users.findById(id)

    if(!user){
        next({ status: 404, message: "User Id not found" });

    } else {
        next();
    }
}

const checkRole = ( req, res, next ) => {
    const { role } = req.body

    if (!role) {
        next({ status: 422, message: "Role required" })

    } else {
        req.role = role;
        next();
    }
}

const checkUsernameValid = async ( req, res, next ) => {
    const validUser = await Users.findBy({ username: req.username })

        if(!validUser.length){
            next({ status: 422, message: "Invalid credentials" })

        } else {
            req.user = validUser[0]
            next();
        }
}

const checkPasswordValid = ( req, res, next ) => {

    if (bcrypt.compareSync(req.password, req.user.password)){
        const token = buildToken(req.user)

        res.status(200).json({
            message: `Welcome, ${req.user.username}`,
            token,
            user_id: req.user.user_id,
            role: req.user.role
        })
        next();

    } else {
        next({ status: 422, message: "invalid credentials" })
    }
}


module.exports = {
    validReqBody,
    checkUsernameExists,
    checkUserId,
    checkRole,
    checkUsernameValid,
    checkPasswordValid
}