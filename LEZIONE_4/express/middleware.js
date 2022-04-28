const express = require('express');
//IMPORTO IL MODULO CON IL MIDDLEWARE
const logger = require('./logger');
const authorize = require('./auth');
const app = express();

//INVOCO IL MIDDLEWARE
//app.use(logger);

//USO SPECIFICO SU UNA TIPOLOGIA DI ROTTE
//app.use('/api', logger);
//app.use([authorize, logger]);

//CREO UN MIDDLEWARE PER IL LOG DEI PERCORSI
/*const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}*/

app.get('/', (req, res) => {
    res.send('Home page');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/api/product', [authorize, logger], (req, res) => {
    res.send('Pagina prodotti');
})

app.get('/api/articoli', (req, res) => {
    res.send('Pagina articoli');
})





app.listen(3000, () => {
    console.log('Server attivo');
})