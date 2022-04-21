const express = require('express');
const app = express();

const port = 3000;

//recupero le risorse statiche della mia app
app.use(express.static('public'));

//creiamo gli instradamenti delle nostre pagine statiche
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
})

app.get('/contatti', (req, res) => {
    res.sendFile(__dirname + '/public/contatti.html');
})

app.get('/formazione', (req, res) => {
    res.sendFile(__dirname + '/public/formazione.html');
})

app.get('/web-design', (req, res) => {
    res.sendFile(__dirname + '/public/web-design.html');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})




app.listen(port, () => {
    console.log(`Server ascolta sulla porta:  ${port}`);
})