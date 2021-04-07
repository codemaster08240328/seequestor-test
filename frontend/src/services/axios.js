import axios from 'axios';

const initAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_API 
}

export default initAxios;
