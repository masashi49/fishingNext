import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5001/api', // サーバーのベースURL
  headers: {
    'Content-Type': 'application/json', // json形式で送信
  },
});
