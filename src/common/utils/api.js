import axios from 'axios';

const { REACT_APP_API } = process.env;

const instance = axios.create({
  baseURL: `${REACT_APP_API}/api`
});

export const get = (endPoint, params = {}) => instance.get(endPoint, { params }).then(r => r.data);
