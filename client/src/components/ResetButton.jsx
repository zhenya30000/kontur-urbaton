import React from 'react';
import Button from '@mui/material/Button';

const ResetButton = () => {
  const resetApp = () => {

    window.location.reload();
  };

  return (
    <Button variant="contained" onClick={resetApp} sx={{m: '20px'}}>
      Загрузить ещё
    </Button>
  );
};

export default ResetButton;
