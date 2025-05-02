// const mongoose = require("mongoose");

const Login = require("../models/loginModel");

const signin = async (req, res) => {
    const {email, password} = req.body;
    Login.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
}

const signup = async (req, res) => {
    const {email, password} = req.body;
    Login.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            Login.create(req.body)
            .then(login_form => res.json(login_form))
            .catch(err => res.json(err))
        }
    })
}

// export controllers:
module.exports = {
    signin,
    signup
};
