const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://new-user:h0r3UvMipV2Cs5HQ@mycluster.azlqk.mongodb.net/demo?retryWrites=true&w=majority';

//Connessione al database
MongoClient.connect(url)
    .then((db) => {

        accountsDb = db;
        collection = accountsDb.db('demo');
        console.log('database connesso');
    })
    .catch((err) => {
        console.log(err);
    })

//creazione di una collection di nome utenti nel db demo
/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');
    dbase.createCollection('utenti', function(err, res) {
        if (err) throw err;
        console.log('Collezione creata');
        db.close();
    })
})*/

//Inserimento di un record singolo
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');
    let myObj = { nome: 'pietro', anni: '28', lavoro: 'web-dev' };

    dbase.collection('utenti').insertOne(myObj, function(err, res) {
        console.log('Dato inserito');
        db.close();
    });
});

//Inserimento di più records
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');

    let myObj = [
        { nome: 'mario', anni: '50', lavoro: 'php-dev' },
        { nome: 'carla', anni: '41', lavoro: 'node-dev' },
        { nome: 'maria', anni: '32', lavoro: 'angular-dev' }
    ];
    dbase.collection('utenti').insertMany(myObj, function(err, res) {
        if (err) throw err;
        console.log('Records inseriti: ' + res.insertedCount);
        db.close();
    });
})

//Selezionare un record
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');

    dbase.collection('utenti').findOne({}, function(err, res) {
        console.log(res.nome);
        db.close();
    })
})

//Selezionare tutti i records
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');
    dbase.collection('utenti').find({}).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})

//Ricerca con filtro
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');

    let query = { lavoro: 'node-dev' };
    dbase.collection('utenti').find(query).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})

//Cancellare dati
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');
    let query = { lavoro: 'react' };
    //deleteMany()
    dbase.collection('utenti').deleteOne(query, function(err, res) {
        if (err) throw err;
        console.log(res.result + ' record cancellato');
        db.close();
    })
})

//Modifica-aggiorna un record
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');
    let query = { lavoro: 'web-dev' };
    let newValue = { $set: { nome: 'carlotta' } };
    dbase.collection('utenti').updateOne(query, newValue, function(err, res) {
        if (err) throw err;
        console.log('Dato aggiornato');
        db.close();
    })
})

//Modifica-aggiorna più records
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbase = db.db('demo');
    let query = { lavoro: 'web-dev' };
    let newValue = { $set: { lavoro: 'node-dev' } };
    dbase.collection('utenti').updateMany(query, newValue, function(err, res) {
        if (err) throw err;
        console.log('Dati aggiornati');
        db.close();
    })
})