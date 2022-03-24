
function socketListener(io) {
    io.on('connection', (socket) => {
        console.log(io.engine.clientsCount)
        console.log('socket')
    });
};

module.exports = socketListener;