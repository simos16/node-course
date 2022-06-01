const express = require('express');
const hbs = require('express-handlebars');
require('dotenv').config();


const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.use(express.static('public'));

// Templating Engine
const handlebars = hbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


const routes = require('./routes/user');
app.use('/', routes);


app.listen(port, () => console.log(`Server in ascolto: ${port}`));