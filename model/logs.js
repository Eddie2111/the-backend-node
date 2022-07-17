const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type:      String,
        required:  true,
        length:    [3, 20]
    },
    description: {
        type:      String,
        required:  true,
        lowercase: true,
        loggedAt: Date.now(),
    }    
});
const Logs = mongoose.model('Logs', userSchema);
module.exports = Logs;
