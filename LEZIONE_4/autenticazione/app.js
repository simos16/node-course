const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer();

const app = express();

app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));

let Users = [];

app.get('/signup', function(req, res){
    res.render('signup');
});

app.post('/signup', function(req, res){
    if(!req.body.id || !req.body.password){
        res.status(400);
        res.render('signup', {message: "Please enter both id and password"});
    } else {

        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('/protected_page');
    }
});

function checkSignIn(req, res,next){
    if(req.session.user){
        next();     //If session exists, proceed to page
    } else {
        let err = new Error("la pagina è protetta");
        next(err);  //Error, trying to access unauthorized page!
    }
}
app.get('/protected_page', checkSignIn, function(req, res){
    res.render('protected_page', {id: req.session.user.id})
});



app.get('/logout', function(req, res){
    req.session = null;
    console.log('logged out');
    res.redirect('/signup');
});

app.use('/protected_page', function(err, req, res){
    console.log(err);
    //User should be authenticated! Redirect him to log in.
    res.redirect('/signup');
});

app.listen(3000);