import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Typography = () => {
  
    const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
        tapId: data.get('tapId'),
        tapPh: data.get('tapPH'),
        tapLocation: data.get('tapLocation'),
        tapGeoLocation: data.get('tapGeoLocation'),
        tapProvider: data.get('tapProvider'),
        tapConductivity: data.get('tapConductivity'),
        tapTurbidity: data.get('tapTurbidity'),
    };

    if (actualData.tapId && actualData.tapLocation && actualData.tapGeoLocation && actualData.tapProvider && actualData.tapConductivity && actualData.tapTurbidity && actualData.tapPh) {
      console.log(actualData);

      document.getElementById('tap-detail-form').reset()
      setError({ status: true, msg: "Tap Details Added Successfully", type: 'success' })
    //   navigate('/dashboard')
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
  {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    <Box component='form' noValidate sx={{ mt: 1 }} id='tap-detail-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='tapId' name='tapId' label='Enter Tap ID' />
      <TextField margin='normal' required fullWidth id='tapLocation' name='tapLocation' label='Enter Tap Location' />
      <TextField margin='normal' required fullWidth id='tapGeoLocation' name='tapGeoLocation' label='Enter Geo Location' />
      <TextField margin='normal' required fullWidth id='tapProvider' name='tapProvider' label='Enter Provider Name' />
      <TextField margin='normal' required fullWidth id='tapPH' name='tapPH' label='Enter PH Value' />
      <TextField margin='normal' required fullWidth id='tapConductivity' name='tapConductivity' label='Enter Conductivity Value' />
      <TextField margin='normal' required fullWidth id='tapTurbidity' name='tapTurbidity' label='Enter Turbidity value' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
      {/* {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''} */}
    </Box>
  </>;
};

export default Typography;