const renderLogin = (req, res) => {
  res.render("login.ejs");
};

const renderSaludo = (req, res) => {
  const body = req.body;
  res.render("saludo.ejs", body);
};

module.exports = {
  renderLogin,
  renderSaludo,
};
