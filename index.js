'use strict'

/**
 * @file Entrega uma tag exclusiva.
 *
 * @author Gabriel Bertola Bocca <gabriel@estudiodigitalbocca.com.br>
 * @copyright 2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br
 */

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const Criador = require('./modules/criador')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Criador)

app.listen(process.env.PORT)
