import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-7e047-default-rtdb.firebaseio.com/'
})

export default instance