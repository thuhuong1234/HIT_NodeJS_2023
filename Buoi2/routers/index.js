const express = require('express')
const router=express.Router()
const homeController=require('../controllers')
router.get('/', homeController.getHome)
router.get('/login', homeController.getLogin)
router.get('/register',homeController.getRegister)
module.exports = router