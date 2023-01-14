const express = require('express')

const Router = express.Router()

const {
    getVideo
} = require('../controller/videoStrem');

Router.route('/').get(getVideo)

module.exports = Router;