const { Cart } = require("../model/Cart");

const Product = require("../model/product").Product;

exports.getProducts = (req, res, next) => {
  Product.fetchAll((prods) => {
    console.log("From shop.js", prods);
    res.render("shop/product-list", {
      prods: prods,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((prods) => {
    console.log("From getAllProducts", prods);
    res.render("shop/products", {
      prods: prods,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
};

exports.postCart = (req, res, next) => {
  console.log(req.body.productId);
  Product.findById(req.body.productId,prod=>{
    Cart.addProduct(prod.id,prod.price,cart=>{
      console.log('Current cart\n',cart);
      res.redirect('/cart');
    });
  });  
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
};

exports.getProductById = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  Product.findById(prodId, (prod) => {
    console.log("Found product", prod);
    res.render("shop/product-details", {
      pageTitle: prod.title,
      prod: prod,
      path:'asdasd'
    });
  });
};
