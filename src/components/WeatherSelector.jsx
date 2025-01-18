import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useLocation } from "react-router-dom";

const WeatherSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [images, setImages] = useState([]);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  const unsplashAccessKey = "PF2bdPo0fpv8kKkGN5JoQOFZuJ7fssz7BzlucKIiWjc";
  const weatherApiKey = "74d7009dfbbbbcedaa84096798d73edf";
  const unsplashEndpoint = "https://api.unsplash.com/photos/random";
  const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  
  const fetchImages = async () => {
    if (!selectedLocation) return;
    const url = `${unsplashEndpoint}?query=${selectedLocation}&count=5&client_id=${unsplashAccessKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Errore nella richiesta immagini: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
      setError(null);
    } catch (err) {
      console.error("Errore immagini:", err.message);
      setError("Non siamo riusciti a recuperare le immagini. Riprova.");
      setImages([]);
    }
  };
  
  const fetchWeather = async () => {
    if (!selectedLocation) return;
    const url = `${weatherEndpoint}?q=${selectedLocation}&appid=${weatherApiKey}&units=metric&lang=it`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Errore nella richiesta meteo: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      console.error("Errore meteo:", err.message);
      setError("Non siamo riusciti a recuperare il meteo. Riprova.");
      setWeather(null);
    }
  };
  
  useEffect(() => {
    if (selectedLocation) {
      fetchImages();
      fetchWeather();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);
  
  const handleSelectLocation = (event) => {
    setSelectedLocation(event.target.value);
    navigate("/weather"); 
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Selettore Meteo</h1>
      <label htmlFor="location-select">Scegli una località:</label>
      <select
        id="location-select"
        value={selectedLocation}
        onChange={handleSelectLocation} 
        style={{ marginLeft: "5px", padding: "5px" }}
      >
        <option value="">Seleziona...</option> {/* Campo vuoto iniziale */}
        <option value="Roma">Roma</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Paris">Paris</option>
        <option value="Sydney">Sydney</option>
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>Meteo a {weather.name}</h2>
          <p><strong>Temperatura:</strong> {weather.main.temp}°C</p>
          <p><strong>Descrizione:</strong> {weather.weather[0].description}</p>
          <p><strong>Umidità:</strong> {weather.main.humidity}%</p>
          <p><strong>Vento:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}

      <div>
        {images.map((image) => (
          <div key={image.id} style={{ marginBottom: "15px" }}>
            <img src={image.urls.regular} alt={image.alt_description} style={{ width: "70%" }} />
            <p><strong>Autore:</strong> {image.user.name}</p>
          </div>
        ))}
      </div>

      {/* Mostra il link per tornare alla Home solo se NON siamo sulla Home */}
      {location.pathname !== "/" && (
        <Link to="/" style={{ display: "inline-block", marginTop: "20px" }}>
          Torna alla Home
        </Link>
      )}
    </div>
  );
};

export default WeatherSelector;
