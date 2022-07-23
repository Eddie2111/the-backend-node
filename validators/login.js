////////// sign up validator //////////

const validateEmail = (email) => {
    const testedemail = email.trim().substring(0,35).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return String(testedemail[0]);
  };
  const validatePassword = (password) => {
    return String(password)
    .match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
}

function validateLogin(data) {
    const email     = validateEmail(data.email);
    const password  = validatePassword(data.password);
        const validated = {
            email:email,
            password:String(password)
        }
    return validated;
}
//console.log('running test!');
//console.log(validateLogin({email:'tarek42223@gmail.com',password:'123456789'}));


/*
const Joi = require('joi');

const validateLogin = Joi.object({
    email: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$'))
        .email()
        .alphanum()
        .min(3)
        .max(35)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),


    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
.with('email', 'password');

const x = validateLogin.validate({
    email: 'tarek42223@gmail.com',
    password: '123456789',
})

*/
module.exports = validateLogin;