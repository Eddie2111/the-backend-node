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
        const noUser = {
            status: "status is fine"
        }
        
function response(input){
    
    if(input==='notFound'){
        const message={
            ...noUser,
            route:"/login"
        }
        
    }
    if(input==='notMatch'){
        const message={
            ...noUser,
            route:"/login"
        }
    }
    if(input==='success'){
        const message={
            ...noUser,
            route:"/login"
        }
    }
    //return message;
}
console.log(response('notFound'));
function jwto(token){
const jwt = require('jsonwebtoken');
const tokenVerify = jwt.verify(token, process.env.SECRET);
const modDateNow = parseInt(Date.now().toString().slice(0,tokenVerify.exp.toString().length)); //extremely complex
console.log (tokenVerify.exp,modDateNow );

if(tokenVerify.exp > modDateNow){
     console.log("data");
 }
 else{
     console.log("token expired, get a new token");
 }
    
}
jwto("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhcmVrQDF0NGVydGUyMy5jb20iLCJwYXNzd29yZCI6InBhcmtvIiwiaWF0IjoxNjU5NTk0NjY1LCJleHAiOjE2NTk1OTgyNjV9.jln3oUaswViPcmHu2rBuD7SY_Cee0ZYvd2Yr3flzrFE");