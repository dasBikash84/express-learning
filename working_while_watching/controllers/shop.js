const Product = require('../model/product').Product;

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

exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{
        pageTitle: 'Cart',
        path: '/cart'
    });
};

exports.getOrders = (req,res,next)=>{
    res.render('shop/orders',{
        pageTitle: 'Your Orders',
        path: '/orders'
    });
};