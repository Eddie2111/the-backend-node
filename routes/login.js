const express = require('express');
const app     = express();
const router  = express.Router();
const session = require('express-session');
const validateLogin = require('../validators/login');
const bcrypt  = require('bcrypt');

const {
    success, fail, loginwrongPassword, loginpasswordMatch, loginnoUser, netError,
        } = require("../middleware/messages");
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

router
    .route('/')
    .get((req,res)=>{
        res.send("/login");
    })
    .post((req,res)=>{
       //console.log("from login route->:");
       //console.log(req.body);
       const {userOne} = require('../model/signup');
        const x = {
            email: req.body.email,
            password: req.body.password
        };
        //console.log(x.password);
        //console.log('this is x');

      try{
        userOne.findOne({
            email:x.email
        }).then(
            result=>{
                try{
                    if (result.password){
                        bcrypt.compare(x.password,result.password).then(
                            result=>{
                                if(result===false){
                                    const message = {
                                        status:400,
                                        message:"wrong password",
                                        route:"/login"
                                    }
                                    res.send(loginwrongPassword);
                                }
                                else{
                                    const message = {
                                        status:200,
                                        message:"welcome user",
                                        route:"/success"
                                    }
                                    session.user = req.body.name;
                                    res.send(loginpasswordMatch)
                                }
                            }
                        )
                    }
                }
                catch(err){
                    const message = {
                        status:404,
                        message:"user not found",
                        route:"/login"
                    }
                    res.send(loginnoUser);
                }
                }
                )
            }
      catch {

                res.send(netError)
            }
      

            // rough code, not needed anymore, storing it up for other purpose
            function response(input){
            const message = {}
            if(input==='notFound'){
                const message = {
                    ...noUser,
                    route: "/login"
                }
            }
            if(input==='notMatch'){
                const message = {
                    ...wrongPassword,
                    route: "/login"
                }
            }
            if(input==='success'){
                const message = {
                    ...passwordMatch,
                    route: "/success"
                }
            }
            console.log(message);
            return message;
        }
        
        //console.log(a);

        //loginHandle(x)

/*
        .then(
            (data)=>{
                session.user = req.body.name;
                res.send(data);
            }
        )
        .catch(
            (err)=>{
                const error = {
                    status: 404,
                    message: err,
                    summary: "Login failed",
                    version: "10.10.10",
                    problem: "email or password is incorrect"
                }
                res.send(error);
            }
        );
        */
        //session.user = req.body.name;
    }
    );
module.exports = router;