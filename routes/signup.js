const express = require('express');
const app     = express();
const router  = express.Router();
const session = require('express-session');
const { schema } = require('../validators/signup');
const { signupSuccess,signupFail,mailExists, netError } = require('../middleware/messages');
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
        const body = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const x = schema.validate(body);
        //console.log(x);
        const {User} = require('../model/signup');
        const cryptGenerate = require('../middleware/encrypt');
        const password = cryptGenerate(x.value.password);
        const user = new User({
            name: x.value.name,
            email: x.value.email,
            password: password
        });
        //console.log("this is user")
        //console.log(user);
        

        user.save()
        .then(
            (data)=>{
                session.user = req.body.name,
                console.log(success),
                res.send(signupSuccess);
            }
        )
        .catch((err)=>{
            try{
            if (err.keyPattern.email>0){
                res.send(mailExists);
            }
            if (err.keyPattern.password===0){
                res.send(signupFail);
            }
            }
            catch{
                res.send(netError);
            }
            }
        )
      
    }
    );
module.exports = router;