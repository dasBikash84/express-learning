const router = require('express').Router();

const path = require('path');

const products = require('./admin').products;


router.get('/',(req,res,next)=>{
    console.log('From shop.js',products);
    res.render('shop',{
        prods : products,
        pageTitle: 'Shop',
        path: '/'
    });
});


module.exports = router;