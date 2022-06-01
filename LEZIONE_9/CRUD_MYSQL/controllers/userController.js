const mysql = require('mysql');
//Gestisco la connessione
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//Tutti i dati
exports.view = (req, res) => {
    //connessione al db
    connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {

        if (!err) {
            let removedUser = req.query.removed;
            res.render('home', { rows, removedUser });
        } else {
            console.log(err);
        }
        console.log('Dati della tabella: \n', rows);
    });
}

//IMposto un ricerca per nomeh
exports.find = (req, res) => {
        let searchTerm = req.body.search;

        connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
            if (!err) {
                res.render('home', { rows });
            } else {
                console.log(err);
            }
            console.log('Dati della tabella: \n', rows);
        });
    }
    //prelevo i dati 
exports.form = (req, res) => {
    res.render('add-user');
}

//Aggiungo nuovi record
exports.create = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;


    connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
        if (!err) {
            res.render('add-user', { alert: 'Utente aggiunto correttamente' });
        } else {
            console.log(err);
        }
        console.log('Dati della tabella: \n', rows);
    });
}


//Modifica del record
exports.edit = (req, res) => {

    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-user', { rows });
        } else {
            console.log(err);
        }
        console.log('Dati della tabella: \n', rows);
    });
}


//Aggiorno
exports.update = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;

    connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {

        if (!err) {

            connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {

                if (!err) {
                    res.render('edit-user', { rows, alert: `${first_name} è stato aggiornato` });
                } else {
                    console.log(err);
                }
                console.log('Dati della tabella: \n', rows);
            });
        } else {
            console.log(err);
        }
        console.log('The data from user table: \n', rows);
    });
}

//Cancellare record
exports.delete = (req, res) => {

    connection.query('UPDATE user SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
        if (!err) {
            let removedUser = encodeURIComponent('Utente correttamente rimosso');
            res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        console.log('Dati della tabella: \n', rows);
    });

}


exports.viewall = (req, res) => {


    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-user', { rows });
        } else {
            console.log(err);
        }
        console.log('Dati della tabella: \n', rows);
    });

}