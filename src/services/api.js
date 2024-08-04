import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDemoData = async () => {
  try {
    const response = await api.get('/posts'); 
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export default api;
