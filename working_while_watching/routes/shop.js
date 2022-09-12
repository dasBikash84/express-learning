const router = require('express').Router();

const productsController = require('../controllers/shop');


router.get('/',productsController.getProducts);
router.get('/products',productsController.getAllProducts);
router.get('/cart',productsController.getCart);
router.post('/cart',productsController.postCart);
router.get('/orders',productsController.getOrders);
router.get('/products/:productId',productsController.getProductById);


module.exports = router;