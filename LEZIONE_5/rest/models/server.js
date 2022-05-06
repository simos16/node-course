const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        this.middlewares();
        this.routes();
    }


    //configuro la connessione al database
    //funzione per inizializzare i middlewares
    middlewares() {
        this.app.use(cors());
        //lettura e analisi del body => contenuto
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    //funzione per le rotte impostate
    routes() {
        this.app.use(this.userPath, require('../routes/users'));
    }

    //funzione per il server
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server attivo', this.port);
        });
    }

}

module.exports = Server;