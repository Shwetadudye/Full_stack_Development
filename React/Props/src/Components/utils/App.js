import axios from 'axios'

export const apiLink = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
});