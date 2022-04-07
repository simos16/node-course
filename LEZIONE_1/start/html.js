const http = require('http');

let server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(
        '<!DOCTYPE html' +
        '<html>' +
        '<head>' +
        '</head>' +
        '<body>' +

        '<h1>Esempio di html in node</h1>' +
        '</body>' +

        '</html>'


    );

    res.end('Avvio del mio server...');
});

server.listen(8081);