const router = require('express').Router();

const productsController = require('../controllers/shop');


router.get('/',productsController.getProducts);
router.get('/products',productsController.getAllProducts);
router.get('/cart',productsController.getCart);
router.get('/orders',productsController.getOrders);


module.exports = router;