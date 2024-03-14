import React from 'react';
import { useLocation } from 'react-router-dom';
import "./WeatherDetails.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WindPowerIcon from '@mui/icons-material/WindPower';
import { TextField, Button,Typography,Box } from '@mui/material';

const WeatherDetailsPage = () => {
    const location = useLocation();
    const { weatherData } = location.state || {};

    const renderWeatherDetail = (label, value, icon) => (
        <Box className="weather-detail">
            {icon}
            <Typography className="weather-label">{label}</Typography>
            <span className="weather-value">{value}</span>
        </Box>
    );

    return (
        <Box className="weather-details-container">
            <Box className="background-image" />
            <Box className="weather-card">
                <Typography fontSize={30} className="weather-title">{weatherData.city_name}</Typography>
                {weatherData ? (
                    <Box>
                        {weatherData.data.map((day, index) => (
                            <Box key={day.date} className="weather-day">
                                <Typography className="weather-date">{day.date}</Typography>
                                <Box className="weather-info">
                                    {renderWeatherDetail('Temperature', `${day.temp}°F`, <WbSunnyIcon className="weather-icon1" />)}
                                    {renderWeatherDetail('Clouds', `${day.clouds}%`, <ThunderstormIcon className="weather-icon" />)}
                                    {renderWeatherDetail('Wind Speed', `${day.wind_spd} mph`, <WindPowerIcon className="weather-icon" />)}
                                    {/* Add more weather details and icons */}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <p>No data available</p>
                )}
            </Box>
        </Box>
    );
};

export default WeatherDetailsPage;
