const express = require("express");


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next)=>{
    console.log(`Gen middleware for path: ${req.url}`);
    next();
});

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found!!</h1>');
});

app.listen(3000);