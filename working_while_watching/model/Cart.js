const fs = require('fs');
const path = require('path');

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);


exports.Cart = class Cart{


    static doWithCart(cb){
        let cart = {products:[],totalPrice:0};
        fs.readFile(filePath,(err,fileContent)=>{
            if(!err){
                cart = JSON.parse(fileContent);
            }else{
                console.log(err);
            }
            cb(cart);
        });
    }
    
    static addProduct(id,price,cb){
        Cart.doWithCart(cart =>{
            const currentProdIndex = cart.products.findIndex(prod => prod.id === id);
            if(currentProdIndex >=0 ){
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


    static deleteProduct(id,price,cb){
        Cart.doWithCart(cart =>{
            const currentProd = cart.products.find(item => item.id === id);
            if(currentProd){
                cart.products = cart.products.filter(item => item.id !== id);
                cart.totalPrice -= (+price * +currentProd.qty);
                fs.writeFile(filePath,JSON.stringify(cart),err=>{
                    if(err){
                        console.log(err);
                    }
                    cb();
                });
            }else{
                cb();
            }            
        });
    }
}