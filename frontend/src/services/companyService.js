import axios from 'axios';

const API_URL = 'http://localhost:3000/companies';

// Helper to get token (adjust based on where you store it: localStorage/cookies)
const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getCompanies = async () => {
  const response = await axios.get(API_URL, getAuthHeader());
  return response.data;
};

export const deleteCompany = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, getAuthHeader());
  return response.data;
};

export const createCompany = async (companyData) => {
  const response = await axios.post(API_URL, companyData, getAuthHeader());
  return response.data;
};

