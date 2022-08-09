const { request, response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/users')

const getUsers = async(req, res = response) => {

    const users = await User.find({});

    res.json({
        users
    })

}

const postUser = async(req = request, res = response) => {

    const { nombre, correo, password, img, rol, estado } = req.body;

    const user = new User({ nombre, correo, password, img, rol, estado });

    //Encriptar la constraseña
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();
    

    res.json({
        msg: "Usuario agregado...!",
        user
    })


}

module.exports = {
    getUsers,
    postUser
}