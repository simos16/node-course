const userDB = {
    users: require('../model/users.json'),
    setUser: function(data) {
        this.users = data
    }
}

const bcrypt = require('bcrypt');

const handleLogin = async(req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd)
        return res.status(400).json({ 'message': 'Username e pwd richiesti' });

    const foundUser = userDB.users.find(person => person.username === user);

    if (!foundUser) return res.sendStatus(401);

    //match password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        res.json({ 'success': `l' utente ${user} è loggato` });
    } else {
        res.status(401);
    }

}


module.exports = { handleLogin };