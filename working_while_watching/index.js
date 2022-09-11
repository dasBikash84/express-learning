const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next)=>{
    console.log('Gen middleware one!');
    next();
});


app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.url);
    console.log(req.body);
    res.send('produce added');
});

app.listen(3000);