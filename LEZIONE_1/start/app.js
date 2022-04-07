//implemento il modulo http che è un built-in
const http = require('http');

//implemento un modulo custom
const mymodule = require('./mymodule');

//creo un server di esempio

let server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Avvio del mio server...');
});


//mettiamolo in ascolto
server.listen(8081);

//richiamo le funzioni implementate nel modulo
mymodule.bye();
mymodule.sayHello();