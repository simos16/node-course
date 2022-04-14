const http = require('http');
const fs = require('fs');
const url = require('url');


//creo il server
http.createServer(function(request, response) {
    //analizzo la richiesta col nome del  file
    let pathname = url.pathToFileURL(request.url).pathname;
    console.log('Richiedo: ' + pathname);


    //leggo
    fs.readFile(pathname.substring(2), function(err, data) {
        if (err) {
            console.log(err);
            //HTTP status: 404: NOT FOUND
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            //HTTP Status: 200 : Success
            response.writeHead(200, { 'Content-Type': 'text/html' });
            //attendiamo response
            response.write(data.toString());
        }
        response.end();

    });
}).listen(8081);

console.log('Server avviato e in ascolto');