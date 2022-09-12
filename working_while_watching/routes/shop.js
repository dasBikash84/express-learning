const router = require('express').Router();

const productsController = require('../controllers/products');


router.get('/',productsController.getProducts);
router.get('/products',productsController.getAllProducts);
router.get('/cart',productsController.getCart);


module.exports = router;