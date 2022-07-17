const redis = require('redis');
const client = redis.createClient({
    socket: {
        host: 'localhost:3200',
        port: 6379
    },
    password: '<password>'
});

client.on('error', err => {
    console.log('Error ' + err);
});
console.log('redis on');
