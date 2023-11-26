import { Box, Dialog, IconButton } from "@mui/material";
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import getImagesFromServer from "../../services/getImages";
import ImageComparisonSlider from '../../components/ImageComparisonSliderDialog';
import CloseIcon from '@mui/icons-material/Close';

const History = () => {
  const [images, setImages] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const imageList = await getImagesFromServer('./upload/');
      setImages(imageList);
    };

    fetchData();
  }, []);

  const handleImageClick = (fileName) => {
    setSelectedFileName(fileName);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedFileName(null);
  };

  return (
    <Box sx={{ m: '20px' }}>
      <Box justifyContent='space-between' alignItems='center'>
        <Header title='История загрузок' />
        <Box>
          <ImageList cols={3} style={{ marginLeft: '50px', marginRight: '50px' }}>
            {images.map((image, index) => (
              <ImageListItem key={index} onClick={() => handleImageClick(image.title)}>
                <img src={`http://localhost:3001/images/${image.title}`} alt={image.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Dialog
        open={openPopup}
        onClose={handleClosePopup}
        PaperProps={{ style: { minWidth: '800px' } }}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)', 
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton sx={{ position: 'absolute', top: 5, right: 5 }} onClick={handleClosePopup}>
            <CloseIcon />
          </IconButton>
          {selectedFileName && (
            <ImageComparisonSlider originalFileName={selectedFileName} />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default History;
