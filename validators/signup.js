////////// sign up validator //////////

const validateEmail = (email) => {
    const testedemail = email.trim().substring(0,35).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return String(testedemail[0]);
  };
  const validatePassword = (password) => {
    return String(password);
}

function validateSignUp(data) {
    const email     = validateEmail(data.email);
    const password  = validatePassword(data.password);
    const name      = String(data.name).match(/^[a-z A-Z]+$/);
        const validated = {
            email:email,
            password:String(password),
            name:String(name)
        }
    return validated;
}

module.exports = validateSignUp;