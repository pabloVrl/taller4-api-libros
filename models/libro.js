const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibroSchema = Schema({
    nombre: {
        type: String,
        required: true
    },

    anio: {
        type: Number,
        required: true
    },

    idioma: {
        type: String,
        enum: ['ING', 'ESP'],
        required: true
    },
    
    autor: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('libros', LibroSchema)