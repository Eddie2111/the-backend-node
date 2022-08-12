const bcrypt = require('bcrypt');
const password = 'abcd1234'
const hash = '$2b$10$.4XKEOoVLz/MJKo/8y.Ht.VvmcIzkFq8HIAa2M5PlJ/G.iQ2MLrxS'
const {userOne} = require('./model/signup');
const emailo = "asm.tareq.mahmood@g.bracu.ac.bd";
/*
userOne.findOne({
    email:emailo
}).then(
    res=>{
        try{
            if (res.password){
                bcrypt.compare(x.password,res.password).then(
                    res=>{
                        if(res===false){
                            console.log()//response('notmatch'))
                        }
                        else{
                            console.log()//response('success'))
                        }
                    }
                )
            }
        }
        catch(err){
            console.log()//response(''));
        }
        }
        )
        */


function jwti(){ //function written to verify tokens //successful!
    const jwt = require('jsonwebtoken');
    try{
        const token = {
            email: "test email",
            password:"test password"
        }
        const tokenGenerate = jwt.sign({exp: 1000,data: token}, process.env.SECRET);
        
        return tokenGenerate
    }
    catch(err){
        console.log("generation failed",err.message);
    }
}
function jwto(token){
    const jwt = require('jsonwebtoken');
    try{
        const tokenVerify = jwt.verify(token, process.env.SECRET);
        const modDateNow = parseInt(Date.now().toString().slice(0,tokenVerify.exp.toString().length)); //extremely complex
        console.log (tokenVerify.exp,modDateNow );
        console.log("data");
    }
    catch(err){
        console.log("verification failed",err.message);
    }

}

jwto(jwti());