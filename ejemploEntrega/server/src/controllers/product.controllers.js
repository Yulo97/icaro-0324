const connection = require("../db/db.js");

const getAllProducts = (req, res) => {
  connection.query("SELECT * FROM productos", (err, result, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }

    res.status(200).json(result);
  });
};

const createProduct = (req, res) => {
  const { title, price, description, categoryId, stock } = req.body;

  connection.query(
    "INSERT INTO productos (title, price, description, categoryId, stock) VALUES (?, ?, ?, ?, ?)",
    [title, price, description, categoryId, stock],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      res.status(200).json(result);
    }
  );
};

const getProductById = (req, res) => {
  const { id } = req.params;

  connection.query(
    "SELECT * FROM productos WHERE id = ?",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      res.status(200).json(result);
    }
  );
};

const deleteProductById = (req, res) => {
  const { id } = req.params;

  connection.query(
    "DELETE FROM productos WHERE id = ? LIMIT 1",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      res.status(200).json(result);
    }
  );
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { title, price, description, categoryId } = req.body;

  connection.query(
    "UPDATE productos SET title = ?, price = ?, description = ?, categoryId = ?, stock = ? WHERE id = ? LIMIT 1",
    [title, price, description, categoryId, stock, id],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      if (result.changedRows) {
        res
          .status(200)
          .json({ status: "success", message: "Producto actualizado" });
      } else {
        res.status(200).json({
          status: "warning",
          message: "No se actualizo el producto",
        });
      }
    }
  );
};

const createManyProducts = (req, res) => {
  const productos = req.body;
  const resultado = [];

  productos.forEach((producto) => {
    const { title, price, description, categoryId, stock } = producto;

    connection.query(
      "INSERT INTO productos (title, price, description, categoryId, stock) VALUES (?, ?, ?, ?, ?)",
      [title, price, description, categoryId, stock],
      (err, result, fields) => {
        if (err) {
          console.error(err);
          resultado.push({ status: "failure", message: err.message });
        }

        resultado.push(result);
      }
    );
  });

  res
    .status(200)
    .json({ status: "success", message: "Productos cargados corretamente" });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProduct,
  createManyProducts,
};
