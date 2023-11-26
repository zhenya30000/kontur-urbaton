import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

const CheckboxSliderComponent = () => {
  const [acUnitCheckbox, setAcUnitCheckbox] = useState(false);
  const [adsCheckbox, setAdsCheckbox] = useState(false);
  const [shtanderCheckbox, setshtanderCheckbox] = useState(false);
  const [acUnitCheckboxValue, setacUnitCheckboxValue] = useState(50);
  const [adsValue, setAdsValue] = useState(50);
  const [shtanderValue, setshtanderValue] = useState(50);
  const [textInput, setTextInput] = useState('');
  const [textInputValue, settextInputValue] = useState(50);

  const handleCheckbox1Change = (event) => {
    setAcUnitCheckbox(event.target.checked);
  };

  const handleCheckbox2Change = (event) => {
    setAdsCheckbox(event.target.checked);
  };

  const handleCheckbox3Change = (event) => {
    setshtanderCheckbox(event.target.checked);
  };

  const handleSlider1Change = (event, newValue) => {
    setacUnitCheckboxValue(newValue);
  };

  const handleSlider2Change = (event, newValue) => {
    setAdsValue(newValue);
  };

  const handleSlider3Change = (event, newValue) => {
    setshtanderValue(newValue);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSlider4Change = (event, newValue) => {
    settextInputValue(newValue);
  };


  const handleSubmit = () => {
    const selectedValues = {
      acUnitCheckbox: Number(`${acUnitCheckbox}Value`),
      adsCheckbox,
      shtanderCheckbox,
      acUnitCheckboxValue,
      adsValue,
      shtanderValue,
      textInput,
      textInputValue
    };
    
    console.log(selectedValues);
  };

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant='h4' fontWeight='bold' marginBottom='20px'>
        Что убрать?
      </Typography>
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
          value={adsValue}
          onChange={handleSlider2Change}
          disabled={!adsCheckbox}
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={shtanderCheckbox}
              onChange={handleCheckbox3Change}
            />
          }
          label="Штендеры"
        />
        <Slider
          value={shtanderValue}
          onChange={handleSlider3Change}
          disabled={!shtanderCheckbox}
        />
      </div>
      <TextField
        label="Свободный ввод"
        value={textInput}
        onChange={handleTextInputChange}
        style={{ marginTop: '20px' }}
      />
      <Slider
        value={textInputValue}
        onChange={handleSlider4Change}
        disabled={!textInput}
        style={{ marginTop: '20px' }} 
      />

    </div>
  );
};

export default CheckboxSliderComponent;
