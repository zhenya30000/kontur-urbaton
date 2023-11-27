import axios from "axios";

const sendImage = async (imageFile, neuralSettings) => {

  const neuralNetworkUrl = 'http://localhost:8080/process-image/';
  const localServerUrl = 'http://localhost:3001/upload';

  const formData = new FormData();
  formData.append('file', imageFile, imageFile.name);
  formData.append('classes', JSON.stringify(neuralSettings));

  try {
    const responseFromNeural = await axios.post(neuralNetworkUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'arraybuffer'
    });

    const responseFromServer = await axios.post(localServerUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'arraybuffer'
    });

    console.log(neuralSettings);
    
    console.log(formData);

    console.log(responseFromNeural);
    const updatedName = `${imageFile.name.split('.')[0]}_processed.${imageFile.name.split('.')[1]}`
    const updatedData = new FormData();
    updatedData.append('file', new Blob([responseFromNeural.data], { type: 'image/jpeg' }), updatedName);

    const sendToServer = await axios.post(localServerUrl, updatedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    console.log(sendToServer);
  } catch (error) {
    console.error('Ошибка:', error);
  }

};


export default sendImage;
