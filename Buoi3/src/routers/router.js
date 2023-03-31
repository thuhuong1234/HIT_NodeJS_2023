const express = require('express')
const router=express.Router()
const {
    getProduct,
    addProduct
}=require('../controllers/product_controller')
router.get('/products', getProduct)
router.get('/add-products', addProduct)
module.exports = router