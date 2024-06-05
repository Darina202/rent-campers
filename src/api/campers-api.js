import axios from 'axios';

const camperInstance = axios.create({
  baseURL: 'https://65d38a55522627d501091c9b.mockapi.io/api/adverts',
});

export const requestFetchCamper = async () => {
  const { data } = await camperInstance.get('/');
  return data;
};

export const requestOneCamper = async id => {
  const { data } = await camperInstance.get(`/${id}`);
  return data;
};