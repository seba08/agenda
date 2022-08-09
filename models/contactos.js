const { Schema, model, default: mongoose } = require('mongoose');

const ContactoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellidos: {
        type: String,
        required: [true, 'El o los apellidos son abligatorio']
    },
    puesto: {
        type: String,
        default: 'N/A'
    },
    empresa: {
        type: String,
        default: 'N/A'
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria']
    },
    cuidad: {
        type: String,
        default: 'Santo Domingo'
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
})


module.exports = model('contactos', ContactoSchema);