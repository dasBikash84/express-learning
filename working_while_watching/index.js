const express = require("express");
const path = require('path');


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    console.log(`Gen middleware for path: ${req.url}`);
    req.rootDir = path.join(__dirname);
    req.viewsDir = path.join(__dirname,'views');
    next();
});

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(req.viewsDir,'404.html'));
});

app.listen(3000);