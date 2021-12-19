const router = require("express").Router();
const bcrypt = require("bcryptjs");
const buildToken = require("../config/buildToken");
const Users = require("./users-model.js");

const {
    validReqBody, 
    checkUsernameExists, 
    checkRole, 
    checkUserId, 
    checkUsernameValid, 
    checkPasswordValid
} = require("./users-middleware.js");

router.post("/register", validReqBody, checkUsernameExists, checkRole, ( req, res, next ) => {
    const { username, password, role } = req
    const hash = bcrypt.hashSync(password, 8)
  
    Users.add({ username, password: hash, role })
         .then(newUser => {
             res.json( `${newUser.username} successfully created an account`)

         }).catch(error => {
             next(error);
         })
})

router.post("/login", validReqBody, checkUsernameValid, checkPasswordValid, ( req, res, next ) => {
    const { username, password } = req.body
    if(bcrypt.compareSync(password, req.user.password)) {
        const token = buildToken(req.user)
        res.status(200).json({
            message: `Welcome, ${username}`,
            username,
            token
        })

    } else {
        next({ status: 401, message: "Invalid credentials" })
    }
})


router.get("/:id", checkUserId, ( req, res, next ) => {
    const {id} = req.params
    Users.findById(id)
         .then(user => {
             res.json(user)
         }).catch(error => {
             next(error);
         })
})

router.post("/logout", (req, res) => {
    res.json({ message: "Logout Successful" })
})

module.exports = router;