const express = require("express");
const path = require('path');


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin').router;

const bodyParser = require('body-parser');

const app = express();

app.set('views','views');
app.set('view engine','ejs');

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
    res.status(404).render('404',{ pageTitle: 'Page Not Found' ,path : 'asdasd'});
});

app.listen(3000);