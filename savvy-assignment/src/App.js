import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<Dashboard />}/>
        <Route path="/weather-details" element={<WeatherDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
