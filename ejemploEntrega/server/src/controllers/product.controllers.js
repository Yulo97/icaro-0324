const getAllProducts = (req, res) => {
  console.log("Se descargaron todos los productos");
  res.status(200).json(products);
};

const deleteProductById = (req, res) => {
  res.send("Producto Eliminado");
};

const products = [
  {
    name: "Laptop",
    price: 1200,
    description: "High-performance laptop for professionals.",
  },
  {
    name: "Smartphone",
    price: 800,
    description: "Latest model with cutting-edge features.",
  },
  {
    name: "Headphones",
    price: 150,
    description: "Noise-cancelling headphones with superior sound quality.",
  },
  {
    name: "Gaming Chair",
    price: 300,
    description: "Ergonomic chair for gaming and long work sessions.",
  },
  {
    name: "Keyboard",
    price: 100,
    description: "Mechanical keyboard with RGB lighting.",
  },
  {
    name: "Mouse",
    price: 50,
    description: "Wireless mouse with high precision and long battery life.",
  },
  {
    name: "Smartwatch",
    price: 250,
    description: "Stylish smartwatch with fitness tracking features.",
  },
  {
    name: "Monitor",
    price: 400,
    description: "4K UHD monitor with vibrant colors and high refresh rate.",
  },
  {
    name: "Speaker",
    price: 200,
    description: "Bluetooth speaker with deep bass and clear sound.",
  },
  {
    name: "External Hard Drive",
    price: 120,
    description: "1TB portable hard drive for extra storage.",
  },
];

module.exports = {
  getAllProducts,
  deleteProductById,
};
