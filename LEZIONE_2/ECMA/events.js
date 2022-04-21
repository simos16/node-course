//EVENT DRIVEN = programmazione guidata dagli eventi
// Importo il modulo
const events = require('events');

//Creo un oggetto della classe EventEmitter
let eventEmitter = new events.EventEmitter();


//creo un gestore degli eventi
let connectHandler = function connected() {
    console.log('connessione ok');


    //faccio accadere l'evento
    eventEmitter.emit('ricezione_dati');
}

//collego l'evento connessione con il gestore degli eventi
eventEmitter.on('connessione', connectHandler);


//i dati vengono collegati con una funzione
eventEmitter.on('ricezione_dati', function() {
    console.log('dati ricevuti con successo.');
});

// faccio accadere l'evento
eventEmitter.emit('connessione');


console.log("Fine del programma.");