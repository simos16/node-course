const net = require('net');

const HOSTNAME = 'localhost';
const PORT = 3000;

net.createServer((socket) => {
    console.log(`Client connesso alla porta ${PORT}`);

    socket.on('data', (name) => {
        socket.write(`Ciao ${name}!`);
    });

})

.listen(PORT, HOSTNAME);