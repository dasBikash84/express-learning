const router = require('express').Router();

const adminController = require('../controllers/admin');

const path = require('path');

router.get('/add-product',adminController.getAddProduct);
router.get('/edit-product/:productId',adminController.getEditProduct);
router.get('/delete-product/:productId',adminController.getDeleteProduct);
router.post('/product',adminController.postAddProduct);
router.get('/products',adminController.getAllAdminProducts);

module.exports.router = router;