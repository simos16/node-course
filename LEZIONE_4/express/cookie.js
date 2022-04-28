const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cookieParser());

app.get('/', (req, res) => {
    //tempo impostato in ms
    //{maxAge: 360000}
    res.cookie('cookie1', 'express-cookie', { expire: 360000 + new Date() }).send('ho configurato un cookie');
    console.log('Cookies presenti: ', req.cookies);

})

//DELETE
app.get('/cookie-delete', (req, res) => {
    res.clearCookie('cookie1');
    res.send('cookie cancellato');
})


app.listen(3000);