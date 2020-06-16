import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.lop.ect.ufrn.br',
});

export default api;
