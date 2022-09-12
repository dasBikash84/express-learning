const router = require('express').Router();

const path = require('path');

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(req.viewsDir,'add-product.html'));
});


router.post('/product',(req,res,next)=>{
    console.log(req.url);
    console.log(req.body);
    res.send('produce added');
});

module.exports = router;