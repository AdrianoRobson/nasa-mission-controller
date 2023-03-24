const express = require('express')

const {
    httpGetAllLauches,
    httpAddNewLaunch,
    httpAbortLaunch
} = require('./lauches.controller')

const lauchesRouter = express.Router()

lauchesRouter.get('/', httpGetAllLauches)
lauchesRouter.post('/', httpAddNewLaunch)
lauchesRouter.delete('/:id', httpAbortLaunch)

module.exports = lauchesRouter 