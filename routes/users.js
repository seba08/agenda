const { Router } = require('express');
const { check }  = require('express-validator')

const { getUsers, postUser } = require('../controllers/users');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getUsers)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'No es un correo válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe contener al menos +5 caracteres').isLength({ min: 5 }),
    validarCampos
], postUser)

module.exports = router;