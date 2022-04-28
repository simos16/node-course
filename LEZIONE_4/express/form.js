const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTING
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('richiesta ricevuta');

})


app.listen(3000);