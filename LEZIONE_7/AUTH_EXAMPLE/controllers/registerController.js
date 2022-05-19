const userDB = {
    users: require('../model/users.json'),
    setUsers: function(data) {
        this.users = data
    }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async(req, res) => {
    const { user, pwd } = req.body;

    //controllo dati obbligatori
    if (!user || !pwd)
        return res.status(400).json({ 'message': 'Username e pwd richiesti' });

    //controllo dato univoco
    const duplicate = userDB.users.find(person => person.username === user);
    if (duplicate) return res.status(409);

    try {
        //criptazione della password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //salvataggio del nuovo utente
        const newUser = { "username": user, "password": hashedPwd };
        userDB.setUsers([...userDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(userDB.users)
        );
        console.log(userDB.users);
        res.status(201).json({ 'success': `Nuovo utente ${user} creato` });

    } catch (err) {
        res.status(500).json({ "message": err.message });
    }

}



module.exports = { handleNewUser };