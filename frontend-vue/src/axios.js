import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.withCredentials = true;  // penting untuk CORS dan cookie autentikasi

export default axios;
