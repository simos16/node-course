const http = require('http');

//Opzioni di configurazione

let options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'

};

let callback = function(response) {
    let body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        //dati ricevuti
        console.log(body);
    });
}

//Richiesta del client al server
let req = http.request(options, callback);
req.end();