const router = require('express').Router();

const path = require('path');

const products = [];

router.get('/add-product',(req,res,next)=>{
    res.render('add-product',{
        pageTitle:'Add Product',
        path: 'admin/add-product'
    });
});


router.post('/product',(req,res,next)=>{
    products.push({title : req.body.title});
    res.redirect('/');
});

module.exports.router = router;

module.exports.products = products;