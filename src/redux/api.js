import axios from 'axios';

const baseUrl = 'http://api.coincap.io/v2/assets';
const apiKey = '1a6f034d-0a83-41b5-ba4b-cfc0019944da';

export const getCryptosFromApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const getCryptoFromApi = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.data;
  } catch (e) {
    throw e.toString();
  }
};
