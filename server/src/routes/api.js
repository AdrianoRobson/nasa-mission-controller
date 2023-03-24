
const express = require('express')

const planetsRouter = require('./planets/planets.router')
const lauchesRouter = require('./lauches/lauches.router')

const api = express.Router()

api.use('/planets', planetsRouter)
api.use('/launches', lauchesRouter)

module.exports = api