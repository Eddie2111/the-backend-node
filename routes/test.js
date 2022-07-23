const express = require('express');
const app     = express();
const router  = express.Router();
const Joi     = require('joi');
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
        res.send("/test");
    })
    .post((req,res)=>{
       console.log("from login route->:");
       console.log(req.body);
       res.send(data);
    }
    );
module.exports = router;