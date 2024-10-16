const viewLogin = (req, res) => {
  res.render("login.ejs");
};

const viewPanel = (req, res) => {
  res.render("administracion.ejs");
};

module.exports = { viewLogin, viewPanel };
