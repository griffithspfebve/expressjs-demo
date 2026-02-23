const express = require('express');
const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
    res.send("This is the login page")
});

module.exports = authRouter;