require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
//const index = require('./routes/root');


const PORT = process.env.PORT || 3500;



const app = express();
app.use(logger);

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));

//Routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/employees', require('./routes/api/employees'));


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

//app.listen(3500, () => console.log('Server attivo'));
app.listen(PORT, () => console.log(`Il server ascolta sulla porta: ${PORT}`));