import axios from 'axios';

export const saveDossierRequest = async (data: { id: string; title: string; email: string }) => {
  return axios.post('/api/dossiers', data);
};

export const getDocuments = async () => {
  const response = await axios.get('/api/documents');
  return response.data;
};

export const saveMembership = async (data: { id: string; name: string; email: string; tier: string }) => {
  return axios.post('/api/memberships', data);
};
export const saveAdvocacyBurst = async (data: { id: string; packageId: string; packageName: string; email: string }) => {
  return axios.post('/api/bursts', data);
};

export const createCheckoutSession = async (data: { type: string; email: string; tier?: string; docId?: string; title?: string }) => {
  const response = await axios.post('/api/create-checkout-session', data);
  return response.data;
};
