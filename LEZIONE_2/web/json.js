const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const HTML = fs.readFileSync(`${__dirname}/index.html`);
        res.end(HTML);
    } else if (req.url === '/api/utente') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const utente = JSON.stringify({
            nome: 'mario',
            cognome: 'rossi'
        });
        res.end(utente);
    } else {
        res.writeHead(404);
        res.end();
    }
})

server.listen(8181, 'localhost');
console.log('server avviato');