require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;


connectDB();


app.use(logger);


app.use(credentials);


app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));


app.use(express.json());


app.use(cookieParser());


app.use('/', express.static(path.join(__dirname, '/public')));

// Routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));

//uso condizionato dei percorsi non configurati
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "risorsa non trovata" });
    } else {
        res.type('txt').send('404');
    }
})



mongoose.connection.once('open', () => {
    console.log('Connessione al DB ok');
    app.listen(PORT, () => console.log(`Server in ascolto sulla porta: ${PORT}`));
});