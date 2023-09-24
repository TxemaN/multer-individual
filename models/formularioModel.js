const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formularioSchema = new Schema({
  
  imagen: {
    data: Buffer,
    contentType: String,
    nombreArchivo: String // Campo adicional para el nombre del archivo
  }
});

const Formulario = mongoose.model('Formulario', formularioSchema);

module.exports = Formulario;