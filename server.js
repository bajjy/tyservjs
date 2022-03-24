const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const requestListener = require('./server/requestListener');
const socketListener = require('./server/socketListener');

const PORT = 3000;
const HTML = path.join(__dirname, 'dist');

const config = {
    html: HTML,
};

const app = http.createServer((request, response) => requestListener({ request, response, config })).listen(PORT);
socketListener(socketio(app));

process.on('uncaughtException', function(e){
    console.log(e);
});

