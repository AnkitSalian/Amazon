import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-challenge-27088.cloudfunctions.net/api"
    // baseURL: "http://localhost:5001/challenge-27088/us-central1/api"
})

export default instance;