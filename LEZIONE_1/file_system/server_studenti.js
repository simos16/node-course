const os = require('os');
const fs = require('fs');
//importazione del modulo e accesso ai suoi dati
const infoStudente = require('./studenti');
//console.log(module);

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

//dati che voglio leggere all'interno di un file
let messaggio = `L'utente ${utente.username} ha avviato l'app il giorno ${data} usando la piattaforma: ${piattaforma}`;

fs.appendFile('testo.txt', messaggio, function(errore) {
    if (errore) {
        console.log('si è verificato un errore');
    }
});



console.log(piattaforma);
console.log(data);
console.log(utente.username);

console.log("Il nome dello studente è: " + infoStudente.studente.nome);