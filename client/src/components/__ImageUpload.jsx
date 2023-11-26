import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, Button, CircularProgress, useTheme } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import sendImage from '../services/sendImage';
import { tokens } from '../theme'
import SendIcon from '@mui/icons-material/Send';
import ImageComparisonSlider from './ImageComparisonSlider';

const ImageUpload = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);

 
  
  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };
  /* 
  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); 
    }
  }; */

  const handleDragOver = event => {
    event.preventDefault();
    if (!dragging) {
      setDragging(true);
    }
  };

  const handleDrop = event => {
    event.preventDefault();
    if (dragging) {
      setDragging(true);
    }
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSend = async () => {
    try {
      setLoading(true);
      await sendImage(selectedImage);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={2}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedImage ? (
          <Box>
            <Card sx={{ width: 600, margin: 'auto' }}>
              <CardMedia
                component="img"
                sx={{ height: 300 }}
                image={selectedImage}
                title="Selected Image"
              />
              <Typography variant="caption" align="center">
                Выбрано изображение
              </Typography>
            </Card>
            <Box sx={{ m: '12px 0 0 0', display: 'flex', justifyContent: 'space-between' }}>
              {loading ? (
                <CircularProgress size='24px' sx={{ color: colors.accent2[500] }} />
              ) : (
                <Box>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleImageSend}

                    sx={{
                      minWidth: '26px',
                      backgroundColor: colors.primary[400],
                      color: colors.accent2[200],
                      '&:hover': {
                        backgroundColor: colors.primary[300],
                        color: colors.accent2[200],
                      }
                    }} >
                    Загрузить
                  </Button>

                  <Button variant="contained" component="label" htmlFor="contained-button-file" endIcon={<CloudUploadIcon />}
                    sx={{
                      marginLeft: '20px',
                      minWidth: '26px',
                      backgroundColor: colors.primary[400],
                      color: colors.accent2[200],
                      '&:hover': {
                        backgroundColor: colors.primary[300],
                        color: colors.accent2[200],
                      }
                    }} >

                    Другое изображение
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="contained-button-file"
                      multiple={false}
                      type="file"
                      onChange={handleImageChange}
                    />
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        ) : (
          <>
            <label htmlFor="contained-button-file">
              <CloudUploadIcon
                style={!dragging ? { fontSize: 80, cursor: 'pointer' } : { fontSize: 120, color: colors.lighterPrimary[500], cursor: 'pointer' }}
              />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple={false}
                type="file"
                onChange={handleImageChange}
              />
            </label>
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Загрузите изображение
            </Typography>
          </>
        )}
      </Box>
    </Box >
  );
};

export default ImageUpload;
