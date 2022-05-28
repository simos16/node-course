require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./model/user');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());


app.post('/register', async(req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        if (!(email && password && first_name && last_name)) {
            res.status(401).send('Tutti i dati sono richiesti');
        }

        const userUnique = await User.findOne({ email });

        if (userUnique) {
            return res.status(409).send('Questo utente esiste. Vai al login');
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        //Creo utente e salvo nel db
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        const token = jwt.sign({ user_id: user._id, email },
            process.env.TOKEN_KEY, {
                expiresIn: '1h'
            }
        );
        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        console.log(err);

    }
});

app.post('/login', async(req, res) => {

    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(401).send('Tutti i dati sono richiesti');
        }
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ user_id: user._id, email },
                process.env.TOKEN_KEY, {
                    expiresIn: '1h'
                }
            );
            user.token = token;
            res.status(201).json(user);
        }
        res.status(400).send('Credenziali non valide');
    } catch (err) {
        console.log(err);
    }
});

app.get('/home', auth, (req, res) => {
    res.status(200).send('benvenuto nella mia app');
});

app.use('*', (req, res) => {
    res.status(404).json({
        success: 'false',
        message: 'Pagina non trovata',
        error: {
            statusCode: 404,
            message: 'Questo percorso non esiste nell\'applicazione',
        },

    });
});

module.exports = app;