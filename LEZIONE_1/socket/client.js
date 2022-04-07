const net = require('net');

const HOSTNAME = 'localhost';
const PORT = 3000;

const socket = net.connect(PORT, HOSTNAME);

socket.write('Sim');

socket.on('data', (data) => {
    console.log(data.toString());
});