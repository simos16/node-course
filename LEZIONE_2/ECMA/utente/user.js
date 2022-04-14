const getUtenteSync = (id) => {

    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
        //In attesa dei dati
    }

    return {
        id,
        nome: `Utente ${id}`
    };

}

const getUtente = (id, callback) => {

    const utente = {
        id,
        nome: `Utente ${id}`
    };

    setTimeout(() => {

        callback(utente);
    }, 3000);
}

module.exports = {
    getUtenteSync,
    getUtente
}