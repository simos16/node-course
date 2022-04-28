const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.send('home');
})

app.get('/servizi', (req, res) => {
    res.send('servizi');
})

app.get('/shop', (req, res) => {
    res.send('pagina shop');
    console.log('dati richiesti il giorno: ' + new Date())
})

//ULTIMA POSIZIONE
app.get('*', (req, res) => {
    res.send('URL NON ESISTENTE');
})

app.listen(5000, () => {
    console.log('server attivo');

})