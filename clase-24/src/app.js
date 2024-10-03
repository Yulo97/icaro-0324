const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

app.get("/", (req, res) => {
  console.log("Hicieron una peticion");

  res.sendFile(path.join(__dirname, "views/index.html"));
});
