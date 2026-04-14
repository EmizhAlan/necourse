import { useState, useEffect } from 'react';
import './styles/WetherWidget.css';

function WetherWidget() {
    const [weather, setWeather] = useState(null);

    const LAT = 45.0448;
    const LON = 38.976;

    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`)
        .then((res) => res.json())
        .then((data) => {
            setWeather(data.current_weather);
        })
        .catch((err) => console.error("Ошибка погоды: ", err));
    }, []);

    if (!weather) return null;

    const getIcon = (code) => {
        if (code === 0) return "☀️";       // Ясно
        if (code >= 1 && code <= 3) return "☁️"; // Облачно
        if (code >= 51 && code <= 67) return "🌧️"; // Дождь
        if (code >= 71 && code <= 77) return "❄️"; // Снег
        if (code >= 95) return "⛈️";       // Гроза
        return "🌤️"; 
    };

    return (
        <a 
      href="https://yandex.ru/pogoda/ru/krasnodar?lat=45.03547&lon=38.975313" 
      target="_blank" 
      rel="noopener noreferrer"
      className="weather-widget-link"
    >
      <div className="weather-widget">
        <span className="weather-icon">{getIcon(weather.weathercode)}</span>
        <span className="weather-temp">{Math.round(weather.temperature)}°C</span>
      </div>
    </a>
    );
}

export default WetherWidget;