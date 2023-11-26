import React, { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import ResetButton from './ResetButton';

const ImageComparisonSlider = ({ originalFileName }) => {

  /* const regex = /\.[^.]+$/;
  const extension = originalFileName.match(regex)[0];
  
  const baseName = originalFileName.replace(regex, '');

  const pocessedFileName = `${baseName}_processed${extension}`; */


  const pocessedFileName = `${originalFileName.split('.')[0]}_processed.${originalFileName.split('.')[1]}`;
  console.log(originalFileName, pocessedFileName);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        maxWidth: '600px',
        margin: '0 auto',
        
      }}>
      <ImgComparisonSlider value='50' 
      >
        <img slot="first" width='100%' src={`http://localhost:3001/images/${originalFileName}`} />
        <img slot="second" width='100%' src={`http://localhost:3001/images/${pocessedFileName}`} />
      </ImgComparisonSlider>
      
    </Box>
  );
};

export default ImageComparisonSlider;
