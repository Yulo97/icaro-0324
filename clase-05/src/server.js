const express = require("express");
const app = express();

app.get("/", function sayHi(req, res) {
  res.json({ message: "Hola Mundo!" });
});

app.listen(8080, function logStatus() {
  console.log("Estoy saludando desde un Servidor!");
});
