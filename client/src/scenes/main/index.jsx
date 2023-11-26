import { Box, Card } from "@mui/material";
import Header from '../../components/Header'
import ImageUpload from "../../components/ImageUpload";
import ImageComparisonSlider from "../../components/ImageComparisonSlider";
import MultiSliderComponent from '../../components/MultiSliderComponent'
import { useState } from "react";
import { tokens } from '../../theme';
import { useTheme, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [imageUploaded, setImageUploaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSuccessUpload = (fileName) => {
    setImageUploaded(true);
    setUploadedFileName(fileName);
  };

  return <Box sx={{ m: '20px' }}>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Header title='Очиститель фасадов' />
    </Box>
    <Box>
      {!imageUploaded ? (
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' padding='20px'>
          <Box
          >
            <ImageUpload onSuccessUpload={handleSuccessUpload} />
          </Box>
        </Box>
      ) : (
        <ImageComparisonSlider originalFileName={uploadedFileName} />
      )}
    </Box>

  </Box>
}

export default Main;