const express = require('express');
const app     = express();
const router  = express.Router();
const session = require('express-session');
const validateSignUp = require('../validators/signup');
//const signupHandle = require('../controllers/signup'); → check file to know more
// const model = require('../middleware/model'); → no use, inefficient, probably not possible
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
       //console.log(req.body);
        const x = validateSignUp(req.body);
        const {User} = require('../model/signup');
        const cryptGenerate = require('../middleware/encrypt');
        const password = cryptGenerate(x.password);
        const user = new User({
            name: x.name,
            email: x.email,
            password: password
        });
        //console.log(user);
        const success= {
            status:200,
            message: "signup ok!",
        }
        const fail = {
            status: 404,
            message: "sign up failed",
        }

        user.save()
        .then(
            (data)=>{
                session.user = req.body.name,
                console.log('ok!'),
                res.send(success);
            }
        )
        .catch((err)=>{
            console.log(fail),
                res.send(fail);
            }
        )
      
    }
    );
module.exports = router;