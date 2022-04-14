const { getUtente } = require('./utente/user');


console.log('Inizio programma');
console.time('avvio');


getUtente(1, (utente) => {
    console.log('Utente 1: ', utente);
});


getUtente(2, (utente) => {
    console.log('Utente 2: ', utente);
    console.timeEnd('avvio');

});


console.log('fine del programma');