const mongoose = require('mongoose');

const url = 'mongodb+srv://new-user:h0r3UvMipV2Cs5HQ@mycluster.azlqk.mongodb.net/demo?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//creo il modello dei dati - ODM 
const Customer = mongoose.model('Customer', {
    nome: String,
    cognome: String
});

const customer1 = new Customer({
    nome: 'carlo',
    cognome: 'pinco'
});

customer1.save().then((doc) => {
    console.log('Aggiunto un nuovo utente: ', doc.nome, doc.cognome);
    listCustomers();
})


function listCustomers() {
    console.log('Customers: ');
    Customer.find().then((doc) => {
        doc.forEach((customer) => {
            console.log(`${customer.nome}, ${customer.cognome}`);
            mongoose.connection.close();
        })
    })
}