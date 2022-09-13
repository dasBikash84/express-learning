const { Cart } = require("../model/Cart");

const Product = require("../model/product").Product;

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    prod: null,
  });
};

exports.getEditProduct = (req, res, next) => {
  const productId = req.params.productId;
  console.log(productId);
  Product.findById(productId, (product) => {
    if (product) {
      res.render("admin/add-product", {
        pageTitle: "Edit Product",
        path: "admin/edit-product",
        prod: product,
      });
    } else {
      res.redirect("/");
    }
  });
};

exports.getDeleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  console.log(productId);
  Product.deleteById(productId, () => {
    res.redirect("/admin/products");
  });
};

exports.getAllAdminProducts = (req, res, next) => {
  Product.fetchAll((prods) => {
    res.render("admin/admin-products", {
      prods: prods,
      pageTitle: "Admin Products",
      path: "admin/products",
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const currentprodId = req.body.productId;

  if(currentprodId){
    new Product(title, imageUrl, description, price,currentprodId).update(()=>{
        console.log(`Product with id : ${currentprodId} updated`);
        res.redirect(`/products/${currentprodId}`);
    });
  }else{
    new Product(title, imageUrl, description, price).save(() => {
        res.redirect("/");
      });
  }
};