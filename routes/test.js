const express = require('express');
const session = require('express-session');
const app     = express();
const router  = express.Router();
const jwt     = require('jsonwebtoken');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// block the atlas connection before work
// fix the atlas connection after work

const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10"
};
router
    .route('/')
    .get((req,res)=>{
        try{
        const user          = [req.body.email,req.body.password];
        const accessToken   = jwt.sign({ email: user[0], password: user[1] }, process.env.SECRET, {expiresIn: '3600s'});
        const refreshToken  = jwt.sign({ email: user[0], password: user[1] }, process.env.SECRET, {expiresIn: '7200s'});
        const decoded       = jwt.verify(accessToken,  process.env.SECRET);
        const decoded2      = jwt.verify(refreshToken, process.env.SECRET);
            // creating session in node
            req.session.user = {
                email: user[0],
                password: user[1],
                accessToken: accessToken,
                refreshToken: refreshToken,
            };

        //console.log(accessToken,"\n",refreshToken);
        //console.log(decoded, decoded2);
        res.send(req.session.user);
        }
        catch(err){
            res.send("token error");
        }
    })
    .post((req,res)=>{
       console.log("from test route->:");
       //console.log(req.body.token);
       const tokenVerify = jwt.verify(req.body.token, process.env.SECRET);
       const modDateNow = parseInt(Date.now().toString().slice(0,tokenVerify.exp.toString().length)); //extremely complex
       //console.log (tokenVerify.exp,modDateNow );
       try{
       if(tokenVerify.exp > modDateNow){
            res.status(200).json(data).cookie();
        }
        else{
            res.send("token expired, get a new token");
        }
    }
    catch(err){
        res.send("token error");
    }
       
       
    }
    );
module.exports = router;