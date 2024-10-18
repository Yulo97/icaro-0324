const autenticacion = (req, res, next) => {
  if (req.session.usuario) {
    console.log(req.session.usuario);
    next();
  } else {
    res.redirect("/login");
  }
};

const isAdmin = (req, res, next) => {
  if (req.session.usuario.admin === true) {
    next();
  } else {
    res.send("Solo los admin pueden ingresar a ese lugar");
  }
};

module.exports = { autenticacion, isAdmin };
