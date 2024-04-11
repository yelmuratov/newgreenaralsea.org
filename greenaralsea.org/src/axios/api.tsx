import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_API_URL;

axios.defaults.baseURL = baseUrl;

export default axios;