const express = require('express')
const libroController = require('../controllers/libroController')

const api = express.Router()

api.get('/libros', libroController.listar)
api.get('/libros/:id', libroController.listarId)
api.post('/libros', libroController.guardar)
api.delete('/libros/:id', libroController.borrar)
api.put('/libros/:id', libroController.editar)

module.exports = api