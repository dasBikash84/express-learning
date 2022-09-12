const Product = require('../model/product').Product;


const products = Product.fetchAll();

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{
        pageTitle:'Add Product',
        path: 'admin/add-product'
    });
};

exports.postAddProduct = (req,res,next)=>{
    console.log('From products.js',products);
    products.push(new Product(req.body.title));
    res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
    console.log('From shop.js',products);
    res.render('shop',{
        prods : products,
        pageTitle: 'Shop',
        path: '/'
    });
};