const atlas = require('../model/atlas');

function signupHandle(data){
    const User = require('../model/signup');
    const cryptGenerate = require('../middleware/encrypt');
    console.log(data);
    const password = cryptGenerate(data.password);
    const user = new User({
        name: data.name,
        email: data.email,
        password: password
    });
    user.save()
        .then(
            (data)=>{
                //console.log(data);
                return data;
            }
        )
        .catch(
            (err)=>{
                //console.log(err);
                return err;
            }
        )
}

module.exports = signupHandle;
