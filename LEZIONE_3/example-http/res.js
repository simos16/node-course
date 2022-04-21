const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename = lista.text');
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('id, nome\n');
    res.write('1, Mario\n');
    res.write('2, Giovanna\n');
    res.write('3, Carla\n');
    res.write('4, Paolo\n');
    res.end();


}).listen(8080);

console.log('server attivo');