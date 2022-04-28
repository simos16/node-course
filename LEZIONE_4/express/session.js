const express = require('express');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(session({ secret: 'chiave segreta' }));

//ROUTING
app.get('/', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`hai visitato la pagina: ${req.session.page_views} volte`);
    } else {
        req.session.page_views = 1;
        res.send('Ciao, stai visitando la pagina per la prima volta');
    }
})

app.listen(5000);