const router = require('express').Router()
const {addShortUrl,getFullUrl} = require('./url.service')

router.get('/:url', getFullUrl)
router.post('', addShortUrl);


module.exports = router