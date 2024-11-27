const { Router } = require('express')
const axios = require('axios')

const route = Router()

route.get('/:mangaId/:coverId', async (req, res) => {
   try {
    const { mangaId, coverId } = req.params
    const response = await axios.get(`https://uploads.mangadex.org/covers/${mangaId}/${coverId}`, { responseType: 'arraybuffer' })
    res.setHeader('Content-Type', 'image/jpeg')
    return res.send(response.data)
   } catch (error) {
    console.log(error)
    return res.send('Servidor não conseguiu processar')
   }
})

module.exports = route