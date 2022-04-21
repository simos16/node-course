const express = require('express');

//creo la variabile di appoggio di express
const app = express();
//porta del server
const port = 8080;

//servire risorse statiche // public servita in static ha priorità sulla route
app.use(express.static('public'));



//instradamento alla home page
app.get('/', (req, res) => {
    res.send('home page');
})

app.get('/demo', (req, res) => {
    res.send('Pagina demo')
})

app.get('*', (req, res) => {
    //res.send('404 | not found');
    res.sendFile(__dirname + '/public/404.html')
})






//creo la connessione al server
app.listen(port, () => {
    console.log(`Server attivo sulla porta: ${port}`);
})