const https = require('https');
const axios = require('axios');

//CHIAMATA GET CON HTTPS
/*https.get('https://jsonplaceholder.typicode.com/users', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date;
    console.log('Codice stato: ', res.statusCode);
    console.log('data della richiesta: ', headerDate);

    res.on('data', item => {
        data.push(item);
    });

    res.on('end', () => {
        console.log('Risultato terminato');
        const users = JSON.parse(Buffer.concat(data).toString());

        for (user of users) {
            console.log(`Utente con id: ${user.id}, name: ${user.name}`);
        }
    });
}).on('error', err => {
    console.log(`Errore: `, err.message);
});*/


//CHIAMATA GET CON AXIOS
/*axios.get('https://jsonplaceholder.typicode.com/users', )
    .then(res => {
        const headerDate = res.headers && res.headers.date;
        console.log('Codice stato: ', res.statusCode);
        console.log('data della richiesta: ', headerDate);

        const users = res.data;
        for (user of users) {
            console.log(`Utente con id: ${user.id}, name: ${user.name}`);
        }

    }).catch(err => {
        console.log('Errore: ', err.message);
    });*/



axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
        id: '2'
    }
}).then(res => {
    const headerDate = res.headers && res.headers.date;
    console.log('Codice stato: ', res.statusCode);
    console.log('data della richiesta: ', headerDate);

    const users = res.data;
    for (user of users) {
        console.log(`Utente con id: ${user.id}, nickname: ${user.username}, luogo: ${user.address['city']}`);
    }

}).catch(err => {
    console.log('Errore: ', err.message);
});

//controllo della gestione della libreria 
(async() => {
    console.log(await axios({
        url: 'https://jsonplaceholder.typicode.com/users'
    }))
})()