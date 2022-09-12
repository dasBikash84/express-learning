const router = require('express').Router();

const productsController = require('../controllers/products');

const path = require('path');

router.get('/add-product',productsController.getAddProduct);
router.post('/product',productsController.postAddProduct);

module.exports.router = router;