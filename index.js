/**
 * @file Cria e entrega uma tag exclusiva.
 *
 * @todo Modularizar a criação da tag.
 * @todo Configurar Porta como uma Environment Variable.
 *
 * @author Gabriel Bertola Bocca <gabriel@estudiodigitalbocca.com.br>
 * @copyright 2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br
 */

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  let dinamico = Date.now()
  let hashBase64 = Buffer.from(dinamico.toString()).toString('base64')

  if (hashBase64.length > 10) {
    hashBase64 = hashBase64.substr(-10)
  }

  let primeiraParte = hashBase64.substring(0, 5)
  let segundaParte = hashBase64.substring(5, 10)
  let algInsert = (dinamico * 344590).toString().substr(-10).substring(0, 5)

  let tagConcatenada = algInsert + primeiraParte + algInsert + segundaParte + algInsert

  res.json({tagExclusiva: tagConcatenada})
})

app.listen(80, function () {
  console.log('Funcionando na porta 80')
})

// app.listen(process.env.PORT)
