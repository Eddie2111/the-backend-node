const atlas = require('../model/atlas');

function LogStack(){
const Logs = require('../model/logs');
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
}
module.exports = LogStack;