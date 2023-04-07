let products=require('./data');

const fs=require('fs');

const path=require('path');

const saveData = (data)=>{
    fs.writeFile(path.join(__dirname,'data.js'), "module.exports=\n" + JSON.stringify(products),function(err){
            if(err){
                console.error(err);
            }else{
                console.log('The data has been updated successfully!');
            }
        })
};

class Product{
    constructor(id,title,description,category,image,rating){
        this.id=id;
        this.title=title;
        this.description=description;
        this.category=category;
        this.rating=rating;
        this.image=image;
       
    }
    
    save(){
        products.push(this);
        console.log(products);
        saveData(products);
    }

    static getAllProduct(){
        return products;
    }

    static deleteById(id){
        const index = products.findIndex( product => product.id == id);
        if(index == -1){
            console.log("NOT FIND!!");
            return;
        }
        products.splice(index,1);
        saveData(products);
    }
}

module.exports=Product;

