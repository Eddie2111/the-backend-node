/* This file has been deprecated
// reason → unable to map promises
//
//
//
//
//
//
//
*/
const atlas = require('../model/atlas');
const validateSignUp = require('../validators/signup');
const model = require('../middleware/model');
function signupHandle(data){
    const User = require('../model/signup');
    const cryptGenerate = require('../middleware/encrypt');
    const password = cryptGenerate(data.password);
    const user = new User({
        name: data.name,
        email: data.email,
        password: password
    });
    const success= {
        status:200,
        message: "signup ok!",
    }
    const fail = {
        status: 404,
        message: "Invalid data",
    }

    validateSignUp(data);
    console.log("reached signupHandle");
    const back = user.save()
        .then(
            (data)=>{
                console.log(success);
            }
        )
        .catch(
            (err)=>{
                console.log(fail);
            }
        )
    console.log(result);
    return result;
}

module.exports = signupHandle;
