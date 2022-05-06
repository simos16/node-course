const { request, response } = require('express');

const userGet = (req = request, res = response) => {

    const { q, nome = 'nessun nome', apiKey, page = '1', limit } = req.query;
    res.json({
        msg: "get API",
        q,
        nome,
        apiKey,
        page,
        limit

    });
}

const userPost = (req = request, res = response) => {
    //const {nome, anni} = req.body;
    const body = req.body;
    res.json({
        msg: "post API",
        body

    });

}

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: "put API",
        id
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API',
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API',
    });
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}