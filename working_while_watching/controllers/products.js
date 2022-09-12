const Product = require('../model/product').Product;


// const products = Product.fetchAll();

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',{
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
        res.render('shop/product-list',{
            prods : prods,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getAllProducts = (req,res,next)=>{
    Product.fetchAll((prods)=>{
        console.log('From getAllProducts',prods);
        res.render('shop/products',{
            prods : prods,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};
exports.getAllAdminProducts = (req,res,next)=>{
    Product.fetchAll((prods)=>{
        console.log('From getAllAdminProducts',prods);
        res.render('admin/admin-products',{
            prods : prods,
            pageTitle: 'Admin Products',
            path: 'admin/products'
        });
    });
};
exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{
        pageTitle: 'Cart',
        path: '/cart'
    });
};