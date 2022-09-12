const fs = require('fs');
const path = require('path');

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

exports.Cart = class Cart{
    
    static addProduct(id,price,cb){
        let cart = {products:[],totalPrice:0};
        fs.readFile(filePath,(err,fileContent)=>{
            if(!err){
                cart = JSON.parse(fileContent);
            }else{
                console.log(err);
            }
            const currentProdIndex = cart.products.findIndex(prod => prod.id === id);
            if(currentProdIndex >=0 ){
                // const currentProduct = cart.products[currentProdIndex];
                cart.products[currentProdIndex].qty += 1;
            }else{
                cart.products.push({id:id,qty:1});
            }
            cart.totalPrice += +price;
            fs.writeFile(filePath,JSON.stringify(cart),err=>{
                if(err){
                    console.log(err);
                }
                cb(cart);
            });
        });  
    }
}