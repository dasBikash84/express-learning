const express = require("express");
const path = require('path');


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin').router;

const notFoundController = require('./controllers/404');

const bodyParser = require('body-parser');

const app = express();

app.set('views','views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    console.log(`${req.method} : ${req.url}`);
    console.log("req body: ",req.body);
    req.rootDir = path.join(__dirname);
    req.viewsDir = path.join(__dirname,'views');
    next();
});

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(notFoundController.get404);

app.listen(3000);