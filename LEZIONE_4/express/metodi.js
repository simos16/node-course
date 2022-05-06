const express = require('express');
const app = express();

let { people } = require('./data');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//API GET
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

//API POST
app.post('/api/people', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'non trovo utenti' });
    }
    res.status(200).json({ success: true, person: name });
})

//API POST - RICHIAMNDO TUTTI I NOMI E AGGIUNGENDO
app.post('/api/test/people', (req, res) => {
    const { id, name } = req.body;

    if (!name || !id) {
        return res
            .status(400)
            .json({ success: false, msg: 'per favore, inserisci i dati' });
    }

    res.status(200).json({ success: true, data: [...people, id, name] });

});

//API PUT
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `non ci sono utenti con id: ${id}` });
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople })
})

//API DELETE
app.delete('/api/people/:id', (req, res) => {
    //const { id } = req.params;
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `non ci sono utenti con id: ${req.params.id}` });
    }

    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res
        .status(200)
        .json({ success: true, data: newPeople });
})

app.listen(5000, () => {
    console.log('Server attivo');
})