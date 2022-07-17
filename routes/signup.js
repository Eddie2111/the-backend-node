const express = require('express');
const app     = express();
const router  = express.Router();
const session = require('express-session');
const validateSignUp = require('../validators/signup');
const signupHandle = require('../controllers/signup');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10"
};
router
    .route('/')
    .get((req,res)=>{
        res.send("/signup");
    })
    .post((req,res)=>{
       console.log("from signup route->:");
       console.log(req.body);
        const x = validateSignUp(req.body);
        if (x){
        res.send(signupHandle(x));
        }
        else{
            const error = {
                status: 404,
                message: "Invalid data",
                summary: "Signup failed",
                version: "10.10.10",
                problem: "email or password is incorrect"
            }
            res.send(error);
        }
        session.user = req.body.name;
    }
    );
module.exports = router;