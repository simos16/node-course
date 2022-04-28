const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user === 'Simona') {
        req.user = { name: 'Simona', id: 3 }
        next();
    } else {
        res.status(401).send('utente non autorizzato');
    }
}

module.exports = authorize;