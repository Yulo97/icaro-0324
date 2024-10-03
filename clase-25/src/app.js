const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.listen(PORT, () => console.log(`Server up in port ${PORT}`));

app.get("/", (req, res) => {
  res.render("vistas/inicio.ejs", { nombre: "Ricardo" });
});

app.get("/productos/0", (req, res) => {
  res.render("vistas/producto.ejs", products[0]);
});

app.get("/productos/1", (req, res) => {
  res.render("vistas/producto.ejs", products[1]);
});

app.get("/productos/2", (req, res) => {
  res.render("vistas/producto.ejs", products[2]);
});

app.get("/productos/3", (req, res) => {
  res.render("vistas/producto.ejs", products[3]);
});

app.get("/productos/4", (req, res) => {
  res.render("vistas/producto.ejs", products[4]);
});

app.get("/productos/5", (req, res) => {
  res.render("vistas/producto.ejs", products[5]);
});

const products = [
  {
    articulo: "Tetera",
    precio: "$5.300",
    descripcion: "Este es un excelente producto para poder calentar el agua.",
  },
  {
    articulo: "Cafetera",
    precio: "$12.000",
    descripcion: "Cafetera de alta calidad, ideal para los amantes del buen café.",
  },
  {
    articulo: "Tostadora",
    precio: "$7.500",
    descripcion: "Tostadora de 2 rebanadas, perfecta para un desayuno rápido.",
  },
  {
    articulo: "Licuadora",
    precio: "$10.000",
    descripcion: "Licuadora potente, ideal para preparar batidos y sopas.",
  },
  {
    articulo: "Microondas",
    precio: "$20.500",
    descripcion: "Microondas de última tecnología con varias funciones.",
  },
  {
    articulo: "Horno Eléctrico",
    precio: "$15.000",
    descripcion: "Horno eléctrico compacto para una cocción rápida y uniforme.",
  },
  {
    articulo: "Batidora",
    precio: "$6.800",
    descripcion: "Batidora manual para preparar masas y mezclas fácilmente.",
  },
  {
    articulo: "Exprimidor de Jugos",
    precio: "$3.500",
    descripcion: "Exprimidor manual para hacer jugos naturales.",
  },
  {
    articulo: "Plancha",
    precio: "$8.200",
    descripcion: "Plancha a vapor para un planchado rápido y eficiente.",
  },
  {
    articulo: "Aspiradora",
    precio: "$25.000",
    descripcion: "Aspiradora potente para mantener la casa impecable.",
  },
];
