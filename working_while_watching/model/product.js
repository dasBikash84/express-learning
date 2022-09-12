
const products = [];

exports.Product = class Product{

    constructor(t){
        this.title = t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }

}