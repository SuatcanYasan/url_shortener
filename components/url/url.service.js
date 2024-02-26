const UrlRepository = require('./url.repository')

const addShortUrl = async (req, res) => {
    const [data] = [req.body]
    try {
        await UrlRepository.addShortUrl(data)
        const result = await UrlRepository.getShortUrl(data.url)
        res.success(result[0].short_url)
    } catch (e) {
        res.error(e)
    }
}

const getFullUrl = async (req, res) => {
    try {
        const [data] = [req.params]
        const result = await UrlRepository.getFullUrl(data)
        res.success(result[0]?.full_url)
    } catch (e) {
        res.error("Görev eklenirken hata oluştu, Tekrar deneyiniz.")
    }
}

module.exports = {
    addShortUrl,
    getFullUrl
}