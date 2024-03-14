import React, { useState } from 'react';
import './Dashboard.css';
  import { TextField, Button,Typography,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [weatherData, setWeatherData] = useState(null);   //useState to store data
  const navigate = useNavigate();                          //useNavigate to navigate to another page

//API functionality to fetch the data 

  const handleGetWeather = async () => {
    try {
      const response = await fetch(
        'https://api.weatherbit.io/v2.0/history/energy?lat=38.0&lon=-78.0&start_date=2024-03-03&end_date=2024-03-10&threshold=63&units=I&key=8ff6b1c427824112b02b9f92f1485bbb&tp=daily'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
      console.log("Weather data",data)
      navigate('/weather-details', { state: { weatherData: data } });       // Navigate to the WeatherDetailsPage with weather data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="dashboard-container">
      <Box className="background-image"></Box>
      <Box className='search-container'>
      <Typography sx={{fontSize:80,color:'#112e66',}}>Weather Forecast</Typography>
        <TextField
        size="small"
        id="outlined-basic"
        variant="outlined"
        placeholder='Enter a City'
        sx={{
          top:'20px',
          maxWidth:'100%',
          minWidth:'50%',
          border: '1px solid black',
          borderRadius:'4px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              background:"white",
              opacity:0.1,
            },
          },
        }}
        />
        <Button
         sx={{
          border: '1px solid black',
          color: '#112e66',
          top:'50px'
        }}
        onClick={handleGetWeather}
        >Get weather</Button>
      </Box>
    </Box>
  );
};

export default Dashboard;