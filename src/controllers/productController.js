const Product = require("../data/product_data");

const getProducts = (req , res) => {
  const products = Product.getAllProduct();
  res.json(products);
};

const getProductById = (req , res) => {
  const id = req.params.id;
  const products = Product.getAllProduct();
  const product = products.find(product => product.id == id);
  res.json(product);
};

const createProduct = (req, res) => {
  const data = req.body;
  const newProduct = new Product(data.id, data.title, data.description, data.category, data.image, data.rating);
  newProduct.save();
  res.json(newProduct);
};

const updateProductById = (req, res) => {
  const products = Product.getAllProduct();
  const data = req.body;
  const id = req.params.id;
  const index = products.findIndex((products) => products.id == id);
  const newProduct = new Product(data.id ,data.title, data.price, data.description, data.category, data.image, data.rating);
  products.splice(index, 1, newProduct);
  res.json(products);
  saveData(products);
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
