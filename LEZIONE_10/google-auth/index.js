const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'chiave', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Autenticati con Google</a>')
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));


app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    }));

app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Ciao ${req.user.displayName}, puoi entrare`);
});

app.get('/logout', (req, res) => {
    //req.logout();
    req.session.destroy();
    res.send('Ciao');
});

app.get('/auth/google/failure', (req, res) => {
    res.send('Autenticazione fallita...');
})

app.listen(5000, () => console.log('server in ascolto'));