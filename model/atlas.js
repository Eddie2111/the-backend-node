const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@${process.env.DBCLUSTER}`;
const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB:200'))
    .catch(err => console.error('DB:404', err));
module.exports = connection;

