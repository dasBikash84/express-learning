const Product = require('../model/product').Product;

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',{
        pageTitle:'Add Product',
        path: 'admin/add-product'
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



exports.postAddProduct = (req,res,next)=>{

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    new Product(title,imageUrl,description,price).save(()=>{
        res.redirect('/');
    });    
};