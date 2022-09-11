const router = require('express').Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
});


router.post('/product',(req,res,next)=>{
    console.log(req.url);
    console.log(req.body);
    res.send('produce added');
});

module.exports = router;