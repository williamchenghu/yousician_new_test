import axios from 'axios';

const instance = axios.create({
  baseURL: `${REACT_APP_API}/api`,
  timeout: 3000
});

export const get = (endPoint, params = {}) => instance.get(endPoint, { params }).then(r => r.data);
