const data=require('../data/data')
const getProduct=(req, res)=>{
    res.render('products.ejs',{
        product:data,
    })
}
const addProduct=(req, res)=>{
    res.render('add-products.ejs')
}
module.exports={
    getProduct,
    addProduct
}