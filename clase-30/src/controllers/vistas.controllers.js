const renderLogin = (req, res) => {
    res.render("login.ejs")
}

const renderIndex = (req, res) => {

    res.render("index.ejs", req.session.usuario)
}

module.exports = {renderLogin, renderIndex}