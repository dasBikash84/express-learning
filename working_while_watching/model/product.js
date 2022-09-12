const fs = require('fs');
const path = require('path');


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
        console.log('curProducts',curProducts);
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

    constructor(t){
        this.title = t;
    }

    save(callBack){
        doWithProducts((prods)=>{
            prods.push(this);
            console.log('during save',prods);
            saveProducts(prods,callBack);
        });
        // products.push(this);
    }

    static fetchAll(callBack){
        return doWithProducts(callBack);
    }

}

exports.Product = Product;