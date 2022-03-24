import axios from 'axios';

export const key = 'c949416982bf108d0213a6d7b06f521120d978b2';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization' : `Bearer ${key}`,
        'Content-Type' : 'application/json'
    }
})

export default api;

