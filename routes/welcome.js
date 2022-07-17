const express = require('express');
const router = express.Router();

const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10"
};
router
    .route('/')
    .get((req,res)=>{
        res.send(data);
    })
    .post((req,res)=>{
        res.send(data);
    });
module.exports = router;