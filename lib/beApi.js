const axios = require('axios');


const axiosInstance = axios.create({
    baseURL: process.env.PLATFORM_URL,
});


module.exports = axiosInstance;
