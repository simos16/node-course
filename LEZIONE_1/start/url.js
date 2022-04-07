const http = require('http');
const url = require('url');

let server = http.createServer(function(req, res) {
    let page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (page == '/') {
        res.write('sei nella home della mia app');
    } else if (page == '/page1') {
        res.write('Sei nella pagina 1');
    } else if (page == '/page2/3/service') {
        res.write('Sei nella pagina di gestione dei servizi');
    } else {
        res.write('Not found...');
    }
    res.end();

});

server.listen(8080);