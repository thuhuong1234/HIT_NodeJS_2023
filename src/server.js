const express = require("express");
const path = require("path");
const app = express();
const productRouter = require("../src/routes/productRouter");
const port = 3000;

app.use(express.urlencoded());
app.use(express.json()); 

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(productRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





