const { User } = require('../db');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.header('username');
    const password = req.header('password');
    User.findOne = {
        username: username,
        password: password
    } 
    .then(function(value) {
        if(value){
            next();
        } else {
            res.status(401).json({
                message: "User doesn't esist"
            })
        }
    })
}

module.exports = userMiddleware;