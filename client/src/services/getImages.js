import axios from 'axios';

const getImagesFromServer = async (folderPath) => {
  try {
    const response = await axios.get('http://localhost:3001/getFiles', {
      params: { folderPath }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};


export default getImagesFromServer;