const Libro = require('../models/libro')

const guardar = (request, response) => {

    try {
        let libro = new Libro()

        libro.nombre = request.body.nombre
        libro.anio = request.body.anio
        libro.idioma = request.body.idioma
        libro.autor = request.body.autor

        libro.save((err, libro) => {
            if (err) return response.status(400).send({mensaje: `Error al intentar guardar registro -> ${err}`})

            response.status(200).send({libro: libro})
        })
    } catch (error) {
        response.status(500).send({error: error})
    }
}

const listar = (request, response) => {
    Libro.find({}, (err, libro) => {
        if (err) return response.status(500).send({mensaje: `Error al intentar guardar registro -> ${err}`})
        response.status(200).send({libros: libro})
    })
}

const listarId = (request, response) => {

    const idLibro = request.params.id

    Libro.findById(idLibro, (err, libro) => {
        if (err) return response.status(500).send({mensaje: `Error al intentar guardar registro -> ${err}`})
        if (!libro) return response.status(404).send({ message: 'Error libro no existe :(' })

        response.status(200).send({libro})
    })
}

const borrar = (request, response) => {
    const idLibro = request.params.id

    Libro.findByIdAndDelete(idLibro, (err, libro) => {
        if (err) return response.status(500).send({mensaje: `Error al intentar guardar registro -> ${err}`})

        response.status(200).send({deleted: libro})
    })
}

const editar = (request, response) => {
    const idLibro = request.params.id

    Libro.findByIdAndUpdate(idLibro, request.body, {new: true}, (err, libro) => {
        if (err) return response.status(500).send({mensaje: `Error al intentar guardar registro -> ${err}`})

        response.status(200).send({edited: libro})

    })
}

module.exports = {
    guardar,
    listar,
    listarId,
    borrar,
    editar
}