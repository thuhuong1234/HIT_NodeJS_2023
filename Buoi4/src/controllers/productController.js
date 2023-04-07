const Product = require("../data/product_data");

const getProducts = (req , res) => {
  const products = Product;
  res.json(products);
};

const getProductById = (req , res) => {
  const id = request.params.id;
  const products = Product;
  const product = products.find(product => product.id ===id);
  if(!product){
    res.json({err : "Khong tim thay san pham"});
  }
  res.json(product);
  
};

const createProduct = (req, res) => {
  const data =req.body;
  const newProduct = new Product(data.id, data.title, data.description, data.category, data.image, data.rating);
  newProduct.save();
  res.json(newProduct);
};

const updateProductById = (req, res) => {
  const products = Product;
  const product = products.find(product => product.id ===id);
  if(!product){
    res.json({err : "Khong tim thay san pham de update"});

  }
  const updateProduct = new Product(data.id, data.title, data.description, data.category, data.image, data.rating);
  const newProduct = {...updateProduct};
  var index = products.findIndex((item) => item.id == id);
  products[index] = newProduct;
  Product.saveData();
  res.json(products);
};
const deleteProductById = (req, res) => {
  const id = req.params.id;
  Product.deleteById(id);
  res.json(Product);
};

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
};
