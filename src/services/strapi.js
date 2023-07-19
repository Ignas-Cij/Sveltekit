import axios from 'axios';

const StrapiService = {
  // GET request
  async get(endpoint) {
    try {
      const response = await axios.get(`http://localhost:1338/api/${endpoint}?populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error while making GET request to Strapi:', error);
      throw error;
    }
  },

  // POST request
  async post(endpoint, data) {
    try {
      const response = await axios.post(`http://localhost:1338/api/${endpoint}?populate=*`, data);
      return response.data;
    } catch (error) {
      console.error('Error while making POST request to Strapi:', error);
      throw error;
    }
  },

  // PUT request
  // ... define additional methods as needed
};

export default StrapiService;
