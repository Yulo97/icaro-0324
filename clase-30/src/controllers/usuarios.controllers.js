const loginUser = (req, res) => {
    const {user, pass} = req.body

    if(usuario.user === user && usuario.pass === pass){

        req.session.usuario = usuario
        
        res.json(usuario)
       
    }else{
        res.json({status: "failure", message: "Credenciales Incorrectas"})
    }
}

module.exports = {loginUser}

const usuario = {
    user: "pepe",
    pass: "asd",
    email: "pepe_alberto@hotmail.com"
}
