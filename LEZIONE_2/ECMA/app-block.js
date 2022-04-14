const { getUtenteSync } = require('./utente/user');


console.log('Inizia il programma');
console.time('Avvio');

const utente1 = getUtenteSync(1);
console.log('Utente 1: ', utente1);


const utente2 = getUtenteSync(2);
console.log('Utente 1: ', utente2);

console.log('Fine del  programma');
console.timeEnd('Avvio');