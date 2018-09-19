const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

let Schema = mongoose.Schema;



let categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la categoria es necesario']
    },
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripcion de la categoria es necesaria']
    }
});

categoriaSchema.methods.toJSON = function() {
    let use = this;
    let useObject = use.toObject();
    delete useObject.password;

    return useObject;
}

categoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('usuario', categoriaSchema);