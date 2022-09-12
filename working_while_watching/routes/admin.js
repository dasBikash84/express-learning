const router = require('express').Router();

const productsController = require('../controllers/products');

const path = require('path');

router.get('/add-product',productsController.getAddProduct);
router.post('/product',productsController.postAddProduct);
router.get('/products',productsController.getAllAdminProducts);

module.exports.router = router;