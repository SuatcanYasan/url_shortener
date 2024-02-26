const router = require('express').Router()
const todoMainRoute = require('./components/url/url.route.js')

router.use('/url', todoMainRoute)

module.exports = router