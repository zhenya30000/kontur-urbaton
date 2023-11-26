import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, Button, CircularProgress, useTheme } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import sendImage from '../services/sendImage';
import { tokens } from '../theme';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

const ImageUpload = ({ onSuccessUpload }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setFileName(file.name);
    }
  };

  const handleImageSend = async () => {
    try {

      const selectedValues = {};

      if (acUnitCheckbox) {
        selectedValues['class_5'] = acUnitCheckboxValue / 1000;
      }
      if (adsCheckbox) {
        selectedValues['class_1'] = adsCheckboxValue / 1000;
      }
      if (shtenderCheckbox) {
        selectedValues['class_3'] = shtenderCheckboxValue / 1000;
      }
      if (lightboxCheckbox) {
        selectedValues['class_4'] = lightboxCheckboxValue / 1000;
      }
      if (bannerCheckbox) {
        selectedValues['class_2'] = bannerCheckboxValue / 1000;
      }

      setLoading(true);
      await sendImage(selectedImage, selectedValues);
      onSuccessUpload();
      onSuccessUpload(fileName);
    } catch (error) {
      console.error('Upload err:', error);
    } finally {
      setLoading(false);
    }
  };

  const [acUnitCheckbox, setAcUnitCheckbox] = useState(false);
  const [adsCheckbox, setAdsCheckbox] = useState(false);
  const [shtenderCheckbox, setshtenderCheckbox] = useState(false);
  const [lightboxCheckbox, setlightboxCheckbox] = useState(false);
  const [bannerCheckbox, setbannerCheckbox] = useState(false);

  const [acUnitCheckboxValue, setacUnitCheckboxValue] = useState(50);;
  const [adsCheckboxValue, setadsCheckboxValue] = useState(90);
  const [shtenderCheckboxValue, setshtenderCheckboxValue] = useState(60);
  const [lightboxCheckboxValue, setlightboxCheckboxValue] = useState(60);
  const [bannerCheckboxValue, setbannerCheckboxValue] = useState(80);

  const handleCheckbox1Change = (event) => {
    setAcUnitCheckbox(event.target.checked);
  };

  const handleCheckbox2Change = (event) => {
    setAdsCheckbox(event.target.checked);
  };

  const handleCheckbox3Change = (event) => {
    setshtenderCheckbox(event.target.checked);
  };

  const handleCheckbox4Change = (event) => {
    setlightboxCheckbox(event.target.checked);
  };

  const handleCheckbox5Change = (event) => {
    setbannerCheckbox(event.target.checked);
  };


  const handleSlider1Change = (event, newValue) => {
    setacUnitCheckboxValue(newValue);
  };

  const handleSlider2Change = (event, newValue) => {
    setadsCheckboxValue(newValue);
  };

  const handleSlider3Change = (event, newValue) => {
    setshtenderCheckboxValue(newValue);
  };
  const handleSlider4Change = (event, newValue) => {
    setlightboxCheckboxValue(newValue);
  };
  const handleSlider5Change = (event, newValue) => {
    setbannerCheckboxValue(newValue);
  };

  return (
    <Box
      display='flex'
      justifyContent='spase-between'
      alignItems='flex-start'
      padding='20px'
    >
      <Box
        justifyContent='space-between'
        alignItems='center'
        padding='20px'
        id='options'
        sx={{
          alignSelf: 'flex-start',
          width: '300px',
        }}
      >
        <Typography variant='h4' fontWeight='bold' marginBottom='20px'>
          Что убрать?
        </Typography>
            
        <div>
          <FormControlLabel
            control={
              <Checkbox
              checked={adsCheckbox}
                onChange={handleCheckbox2Change}
                />
            }
            label="Рекламные вывески"
          />
          <Slider
            value={adsCheckboxValue}
            onChange={handleSlider2Change}
            disabled={!adsCheckbox}
 
          />
        </div>

        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={bannerCheckbox}
                onChange={handleCheckbox5Change}
              />
            }
            label="Вывески"
          />
          <Slider
            value={bannerCheckboxValue}
            onChange={handleSlider5Change}
            disabled={!bannerCheckbox}
     
          />
        </div>

        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={shtenderCheckbox}
                onChange={handleCheckbox3Change}
              />
            }
            label="Штендеры"
          />
          <Slider
            value={shtenderCheckboxValue}
            onChange={handleSlider3Change}
            disabled={!shtenderCheckbox}
   
          />
        </div>

        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={lightboxCheckbox}
                onChange={handleCheckbox4Change}
              />
            }
            label="Световые короба"
          />
          <Slider
            value={lightboxCheckboxValue}
            onChange={handleSlider4Change}
            disabled={!lightboxCheckbox}
    
          />
        </div>

        
        <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acUnitCheckbox}
                    onChange={handleCheckbox1Change}
                  />
                }
                label="Кондиционеры"
              />
              <Slider
                value={acUnitCheckboxValue}
                onChange={handleSlider1Change}
                disabled={!acUnitCheckbox}
               
              />
            </div>

        {loading ? (
          <CircularProgress size='24px' sx={{ color: colors.accent2[500] }} />
        ) : (
          <Box>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleImageSend}
              disabled={!selectedImage}
              sx={{
                minWidth: '26px',
                marginTop: '20px',
              }}
            >
              Загрузить
            </Button>
            <Button variant="contained" component="label" htmlFor="contained-button-file" endIcon={<CloudUploadIcon />} disabled={!selectedImage}
              sx={{
                minWidth: '26px',
                marginTop: '20px',
              }}>
              Заменить картинку
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple={false}
                type="file"
                onChange={handleImageChange}
              />
            </Button>
            <Box >

              <Typography style={{ margin: '40px 0 0 0' }} variant='h4' fontWeight='bold'>
                Инструкция
              </Typography>
              <Typography style={{ margin: '20px 0 0 0' }} >
                Чекбоксы указывают, что ищем, а слайдеры позволяют регулировать, насколько точно ищем выбранный объект.

              </Typography>
              <Typography style={{ margin: '10px 0 0 0' }} >

                Чем меньше значение на слайдере, тем больше объектов попадает в этот класс, но с большей вероятностью ошибок.

              </Typography>
              <Typography style={{ margin: '10px 0 0 0' }} >

                Если значение выше, то найдутся только самые уверенно определенные объекты этого класса.
              </Typography>

            </Box>
          </Box>
        )}

      </Box>
      <Box
        backgroundColor={colors.textColor[500]}
        id='image'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '75vh',
          width: '100%',
          minWidth: '1200px',
          padding: '20px',
          flex: '1',
          margin: '0 0 0 60px'
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={2}
        >
          {selectedImage ? (
            <Box>
              <Card sx={{ width: 600, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  sx={{ height: 300 }}
                  image={URL.createObjectURL(selectedImage)}
                  title="Selected Image"
                />
                <Typography variant="caption" align="center">
                  Выбрано изображение
                </Typography>
              </Card>
              <Box sx={{ m: '12px 0 0 0', display: 'flex', justifyContent: 'space-between' }}>

              </Box>
            </Box>
          ) : (
            <Box style={{ textAlign: 'center' }}>
              <label htmlFor="contained-button-file" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CloudUploadIcon style={{ fontSize: 80, cursor: 'pointer' }} />
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  multiple={false}
                  type="file"
                  onChange={handleImageChange}
                />
                <Typography variant="h6" sx={{ marginTop: 1 }}>
                  Загрузите изображение
                </Typography>
              </label>
            </Box>
          )}
        </Box>
      </Box>
    </Box >
  );
};

export default ImageUpload;