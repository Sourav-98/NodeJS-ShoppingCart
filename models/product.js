var prod_list = require('../data/products.json');
const path = require('path');
const fs = require('fs');

module.exports = class Product{

    constructor(item){
        this.productName = item.productName;
        this.productImageURL = item.productImageURL;
        this.productPrice = item.productPrice;
        this.productDesc = item.productDesc;
        this.productID = Math.random();
    }

    add(){
        prod_list.push(this);
        fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(prod_list), 'utf8', (err)=>{
            if(err) throw err;
            console.log('Product Added!');
        });
    }

    static fetchAll(){
        return prod_list;
    }

    static fetch(p_id){
        for(var i=0; i<prod_list.length; i++){
            //console.log(prod_list[i], i);
            //console.log(prod_list[i].productID, p_id);
            if(prod_list[i].productID == p_id){
                return prod_list[i];
            }
        }
    }

    static delete(p_id){
        prod_list = prod_list.filter((item)=>{
            return item.productID!=p_id;    // return true for all other products except the one to be deleted
        });
        console.log(prod_list);
        /*  Traditional way to delete elements in array
        let pos = -1;
        for(var i=0; i<prod_list.length; i++){
            //console.log(prod_list[i], i);
            //console.log(prod_list[i].productID, p_id);
            if(prod_list[i].productID == p_id){
                pos = i;
                break;
            }
        }
        prod_list.splice(pos, 1);
        */
        fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(prod_list), 'utf8', (err)=>{
            if(err) throw err;
            console.log('Product Added!');
        });
        //console.log(prod_list);
    }
}
