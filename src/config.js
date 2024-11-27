require('dotenv').config()
const axios = require('axios').create({
    baseURL: process.env.BASE_IMAGE_URL
})

module.exports = {    
    axios,
    PORT: process.env.PORT || 3000
}