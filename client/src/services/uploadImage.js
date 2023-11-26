import axios from 'axios';

const getFiles = async (folderPath) => {
  try {
    const response = await axios.post('http://localhost:8000', { folderPath });
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};

export default getFiles;
