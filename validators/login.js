////////// sign up validator //////////

const validateEmail = (email) => {
    const testedemail = email.trim().substring(0,35).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return String(testedemail[0]);
  };
  const validatePassword = (password) => {
    return String(password)
    .match(/^[a-zA-Z0-9]+$/);
}

function validateLogin(data) {
    const email     = validateEmail(data.email);
    const password  = validatePassword(data.password);
        const validated = {
            email:email,
            password:String(password[0])
        }
    return validated;
}

module.exports = validateLogin;