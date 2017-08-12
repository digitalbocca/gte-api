/**
 * (c)2017 - Estúdio Digital Bocca
 * https://estudiodigitalbocca.com.br
 */

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// const moment = require('moment')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  let dinamico = Date.now()
  
  /**
   * Implementação de Navegador
   */
  // let hashBase64 = btoa(dinamico)
  
  /**
   * Implementação em NODE
   */
  let hashBase64 = Buffer.from(dinamico.toString()).toString('base64')

  if (hashBase64.length > 10) {
    hashBase64 = hashBase64.substr(-10)
  }

  let primeiraParte = hashBase64.substring(0, 5)
  let segundaParte = hashBase64.substring(5,10)

  // let exclusividade = btoa($('#exclusividade').val())
  // let exSemEspacos = exclusividade.split(' ').join('').toUpperCase()
  let algInsert = (dinamico * 344590).toString().substr(-10).substring(0, 5)

  var tagConcatenada = algInsert + primeiraParte + algInsert /* + exSemEspacos */ + algInsert + segundaParte + algInsert

  res.json({tagExclusiva: tagConcatenada})
})

app.listen(80, function () {
  console.log('Funcionando na porta 80')
})
// app.listen(process.env.PORT)