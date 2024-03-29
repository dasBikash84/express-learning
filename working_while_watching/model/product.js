const fs = require('fs');
const path = require('path');
const { Cart } = require('./Cart');


const products = [];

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

function doWithProducts(callBack){    

    fs.readFile(filePath,(err,fileContent)=>{
        let curProducts = [];
        if(!err){
            try {
                const prods = JSON.parse(fileContent);
                if(Array.isArray(prods) && prods.length > 0){
                    curProducts = prods;
                }
            } catch (error) {
                console.log(error);
            }
            
        }
        callBack(curProducts);
    });
}

function saveProducts(products,callBack){    

    fs.writeFile(filePath,JSON.stringify(products),(err)=>{
        if(err){
            console.log(err);
        }
        callBack();
    });
}

const Product = class {

    constructor(t,url,desc,price,id){
        this.title = t;
        this.imageUrl = url;
        this.description = desc;
        this.price = price;
        this.id = id === undefined ? (Math.random() * 1000).toString() : id;
    }

    save(callBack){
        doWithProducts((prods)=>{
            prods.push(this);
            saveProducts(prods,callBack);
        });
        // products.push(this);
    }

    update(callBack){
        doWithProducts((prods)=>{
            const newProds = prods.filter(prod=> prod.id !== this.id);
            newProds.push(this);
            saveProducts(newProds,callBack);
        });
        // products.push(this);
    }

    static fetchAll(callBack){
        return doWithProducts(callBack);
    }

    static findById(id,callBack){
        return doWithProducts((prods)=>{
            callBack(prods.find(prod => prod.id === id));
        });
    }

    static deleteById(id,callBack){
        return doWithProducts((prods)=>{
            const currentProd = prods.find(prod=> prod.id === id);
            const newProds = prods.filter(prod=> prod.id !== id);
            saveProducts(newProds,()=>{
                Cart.deleteProduct(currentProd.id,currentProd.price,callBack);
            });
        });
    }

}

exports.Product = Product;