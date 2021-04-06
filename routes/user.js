const express = require('express');
const isAuth = require("../middleware/auth");

const router = express.Router();
const {signUp, signIn} = require("../controllers/user.controllers")

const {registerValidation,signinValidation,validation} = require('../middleware/user')

//SingUp
router.post('/signup',registerValidation(), validation, signUp)

//SinIn
router.get('/signin',signinValidation(), validation, signIn)

router.get('/current', isAuth, (req, res) => {
    res.send(req.user);
  });


module.exports = router ;