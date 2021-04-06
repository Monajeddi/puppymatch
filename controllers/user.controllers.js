const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    try {
       
        const {name, email, password, phone}= req.body;
        const findUser = await User.findOne({ email});
        if (findUser) {
            return res.status(400).send({ errors:[{ msg: "user already exist email should be unique" }] })
        }
        // hash the password
        const hashedpassword = bcrypt.hashSync(password, salt);
        const newUser = new User({...req.body});
        newUser.password = hashedpassword;

        // create a key using json webtoken
        const token = jwt.sign(
            {
              id: newUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: 60 * 60 }
          );


        await newUser.save()
        res.status(200).send({msg: "SignUP successfully", user:newUser, token})
    } catch (error) {
        res.status(400).send({errors:[{ msg: "Bad request can't save the user" }] })
    }
};

exports.signIn = async (req, res) => {
    try {
        const {email, password} = req.body;

        const findUser = await User.findOne({ email});

        if (!findUser) {
            res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
            return;
        }
        // check if the passwords are equal 
        const hashedpass = findUser.password;
        const result = await bcrypt.compare(password, hashedpass);
        if (!result) {
        res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
        return;
    }
    // else create a key
    const token = jwt.sign(
        {
          id: findUser._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: 60 * 60 }
      );
    res.status(200).send({ msg: "sing In successfully", user: findUser, token});
    } catch (error) {
        console.log(error);
        res.status(400).send({ errors: [{ msg: "can not get the current User" }] });
    }
};