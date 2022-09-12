const router = require('express').Router();

const adminController = require('../controllers/admin');

const path = require('path');

router.get('/add-product',adminController.getAddProduct);
router.post('/product',adminController.postAddProduct);
router.get('/products',adminController.getAllAdminProducts);

module.exports.router = router;