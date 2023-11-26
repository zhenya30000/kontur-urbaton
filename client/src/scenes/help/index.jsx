import { Box, Card } from "@mui/material";
import Header from '../../components/Header'
import MultiSliderComponent from "../../components/MultiSliderComponent";



const Help = () => {

  return <Box sx={{ m: '20px' }}>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Header title='Помощь' subtitle='Бог в помощь '/>
    </Box>
    <Card sx={{ width: 600, margin: '20px 0 0 0 ', justifyContent: 'center'}}>
      <MultiSliderComponent />
    </Card>
  </Box>
}

export default Help;
