const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8000;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nome: 'Simona',
        titolo: 'Corso di Node.js'

    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        sito: 'Corso di node.js',
        titolo: 'About me'

    })
});


app.listen(port, () => {
    console.log(`Server ascolta sulla porta:  ${port}`)
});