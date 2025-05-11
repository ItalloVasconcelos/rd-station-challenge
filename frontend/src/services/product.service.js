// import axios from 'axios';
//
// const baseURL = 'http://localhost:3001';
//
// const getProducts = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/products`);
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao obter os produtos:', error);
//     throw error;
//   }
// };

import mockProducts from '../mocks/mockProducts';

export async function getProducts() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    if (!response.ok) throw new Error('API Offline');
    return await response.json();
  } catch (error) {
    console.warn('Usando mocks: API Offline ou indisponível.');
    return mockProducts;
  }
}

export default getProducts;
