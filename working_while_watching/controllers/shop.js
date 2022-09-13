const { json } = require("express");
const { Cart } = require("../model/Cart");

const Product = require("../model/product").Product;

exports.getProducts = (req, res, next) => {
  Product.fetchAll((prods) => {
    res.render("shop/product-list", {
      prods: prods,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((prods) => {
    res.render("shop/products", {
      prods: prods,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getCart = (req, res, next) => {

  Cart.doWithCart(cart =>{
    console.log(cart);
    Product.fetchAll(products => {
      console.log(products);
      cart.products.forEach(prod => {
        prod.title = products.find(it => it.id === prod.id)?.title;
      });

      console.log(cart);
      res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart",
        cart: cart
      });

    });
    
  });

};

exports.postCart = (req, res, next) => {
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
  Product.findById(prodId, (prod) => {
    res.render("shop/product-details", {
      pageTitle: prod.title,
      prod: prod,
      path:'asdasd'
    });
  });
};


exports.getDeleteCartItem = (req, res, next) => {
  const productId = req.params.productId;
  console.log(productId);

  Product.findById(productId, (product) => {
    if (product) {
      Cart.deleteProduct(productId,product.price, () => {
        res.redirect("/cart");
      });
    } else {
      res.redirect("/cart");
    }
  });
};
