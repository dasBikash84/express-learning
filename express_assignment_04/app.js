const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const userNames = [];

app.set('views','views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next)=>{
    res.render('add-user');
});

app.post('/add-user',(req,res,next)=>{
    userNames.push(req.body.title);
    res.redirect('/users');
});

app.get('/users',(req,res,next)=>{
    res.render('users',{userNames:userNames});
});


app.use((req,res,next)=>{
    res.status(404).render('404');
});


app.listen(3001);