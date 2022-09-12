const router = require('express').Router();

const path = require('path');


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(req.viewsDir,'shop.html'));
});



module.exports = router;