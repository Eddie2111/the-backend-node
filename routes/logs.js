const express = require('express');
const router = express.Router();
const atlas = require('../model/atlas');
const Logs = require('../model/logs');
const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10"
};
router
    .route('/')
    .get((req,res)=>{
        res.send('/logs');
    })
    .post((req,res)=>{
        const data = {
            name: req.body.name,
            description: req.body.description,
        }
        Logs.create(data)
            .then(
                (data)=>{
                    res.send(data);
                }
            )
            .catch(
                (err)=>{
                    res.send(err);
                }
            )
    });
module.exports = router;