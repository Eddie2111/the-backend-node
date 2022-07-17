const express = require('express');
const app     = express();
const router  = express.Router();
const session = require('express-session');
const validateLogin = require('../validators/login');
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
        console.log(req.body);
        res.send(req.body);
    })
    .post((req,res)=>{
       console.log("from login route->:");
       console.log(req.body);
        const x = validateLogin(req.body);
        loginHandle(x)
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
        //session.user = req.body.name;
    }
    );
module.exports = router;