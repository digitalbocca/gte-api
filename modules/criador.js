'use strict'

/**
 * @file Cria uma tag exclusiva.
 *
 * @author Gabriel Bertola Bocca <gabriel@estudiodigitalbocca.com.br>
 * @copyright 2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br
 */

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  let dinamico = Date.now()
  let hashBase64 = Buffer.from(dinamico.toString()).toString('base64')
  let maiorQueDez = hashBase64.length > 10
  
  hashBase64 = maiorQueDez ? hashBase64.substr(-10) : hashBase64

  let primeiraParte = hashBase64.substring(0, 5)
  let segundaParte = hashBase64.substring(5, 10)
  let algInsert = (dinamico * 344590).toString().substr(-10).substring(0, 5)

  let tagConcatenada = algInsert + primeiraParte + algInsert + segundaParte + algInsert

  res.json({tagExclusiva: tagConcatenada})
})

module.exports = router