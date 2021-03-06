const router = require("express").Router();
const Users = require("./users-model");
const { validateUserId } = require("./users-middleware");

router.get("/users", async (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error });
        });
});


router.delete("/user/:id", validateUserId, (req, res) => {
    Users.deleteUser(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Users has been deleted" });
        })
        .catch(error => {
            res.status(500).json({ message: error });
        });
});

module.exports = router;
