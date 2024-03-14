import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file
  import { TextField, Button,Typography,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

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
      // Navigate to the WeatherDetailsPage with weather data
      navigate('/weather-details', { state: { weatherData: data } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="dashboard-container">
      <Box className="background-image"></Box>  {/* Container for background image */}
      <Box className='search-container'>  {/* Container for search bar and button */}
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
          border: '1px solid black', // Set border to grey
          color: '#112e66', // Set text color to grey
          top:'50px'
        }}
        onClick={handleGetWeather} // Call handleGetWeather on button click
        >Get weather</Button>
      </Box>
    </Box>
  );
};

export default Dashboard;