const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const router = require('./src/routers/router')
const ejs=require("ejs")
//compile view engine

app.set('views',path.join(__dirname,'src/views'))
app.set('view engine', 'ejs')
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
