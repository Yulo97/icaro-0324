const renderLogin = (req, res) => {
  res.render("login.ejs");
};

const renderIndex = (req, res) => {
  res.render("index.ejs");
};

const renderAdmin = (req, res) => {
  res.render("admin.ejs");
};

module.exports = { renderLogin, renderIndex, renderAdmin };
