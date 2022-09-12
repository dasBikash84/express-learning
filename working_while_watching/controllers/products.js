const Product = require('../model/product').Product;


// const products = Product.fetchAll();

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{
        pageTitle:'Add Product',
        path: 'admin/add-product'
    });
};

exports.postAddProduct = (req,res,next)=>{
    // console.log('From products.js',products);
    // products.push(new Product(req.body.title));
    new Product(req.body.title).save(()=>{
        res.redirect('/');
    });    
};

exports.getProducts = (req,res,next)=>{
    Product.fetchAll((prods)=>{
        console.log('From shop.js',prods);
        res.render('shop',{
            prods : prods,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};