const success = {
    status: 200,
    message: "success"
}
const fail = {
    status: 404,
    message: "not found"
}
const wrongPassword = {
    status: 400,
    message: "wrong password"
}
const noUser = {
    status: 400,
    message: "no user found"
}
const noEmail = {
    status: 400,
    message: "no email found"
}
const passwordMatch = {
    status: 200,
    message: "password match"
}

module.exports = {success, fail, wrongPassword, noUser, noEmail, passwordMatch}
