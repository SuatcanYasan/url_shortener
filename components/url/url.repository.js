const { pool } = require('../../utils/init')

const addShortUrl = async data => {
    const result = await pool.query({
        text: `insert into url_table (full_url) values ($1)`,
        values: [data.url]
    })
    return result.rows
}

const getFullUrl = async data => {
    const result = await pool.query({
        text: `select * from url_table where short_url = $1`,
        values: [data.url]
    })
    return result.rows

}

const getShortUrl = async data => {
    const result = await pool.query({
        text: `select * from url_table where full_url = $1 order by id desc limit 1`,
        values: [data]
    })
    return result.rows
}

module.exports = {
    addShortUrl,
    getFullUrl,
    getShortUrl
}