const express = require("express")
const vistasRouter = require("./routes/vistas.routes.js")
const usuariosRouter = require("./routes/usuarios.routes.js")
const sessions = require("express-session");

const app = express()

app.listen(3000, () => {console.log("Servidor UP")})

app.set("view engine", "ejs")

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(sessions({
    secret: "123",
    saveUninitialized: true,
    cookie: {maxAge: 604800000},
    resave: false
}))


// Router
app.use("/", vistasRouter)
app.use("/usuarios", usuariosRouter)
