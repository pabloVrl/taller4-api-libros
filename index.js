require('dotenv').config()

// Librerias
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// Rutas
const libroRoute = require('./routes/libroRoute')

// Configuración
const app = express()
const PORT = 3001

app.use(cors())
app.options('*', cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', libroRoute)

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4, skip trying IPv6
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://192.99.144.232:27017/grupo15?security=false', options)
.then(() => console.log('Conectado a la base de datos :)'))
.catch(err => console.log(err))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})