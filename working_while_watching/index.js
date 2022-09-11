const express = require("express");


const shopRoutes = require('./routes/admin');
const adminRoutes = require('./routes/admin');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use(adminRoutes);

app.listen(3000);