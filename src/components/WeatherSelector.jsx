import { useState } from "react";

const WeatherSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState("Montreal");
  const [images, setImages] = useState([]);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const unsplashAccessKey = "PF2bdPo0fpv8kKkGN5JoQOFZuJ7fssz7BzlucKIiWjc";
  const weatherApiKey = "74d7009dfbbbbcedaa84096798d73edf";
  const unsplashEndpoint = "https://api.unsplash.com/photos/random";
  const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const fetchImages = async () => {
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

  const fetchData = async () => {
    await Promise.all([fetchImages(), fetchWeather()]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Selettore Meteo</h1>
      <label htmlFor="location-select">Scegli una località:</label>
      <select
        id="location-select"
        value={selectedLocation}
        onChange={handleLocationChange}
        style={{ marginLeft: "5px", padding: "5px" }}
      >
        <option value="Montreal">Montreal</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Paris">Paris</option>
        <option value="Sydney">Sydney</option>
      </select>
      <button
        onClick={fetchData}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cerca Meteo e Immagini
      </button>

      {/* Mostra errori, se presenti */}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {/* Mostra meteo */}
      {weather && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h2>Meteo a {weather.name}</h2>
          <p>
            <strong>Temperatura:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Descrizione:</strong> {weather.weather[0].description}
          </p>
          <p>
            <strong>Umidità:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Vento:</strong> {weather.wind.speed} m/s
          </p>
        </div>
      )}

      {/* Visualizza immagini */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              width: "300px",
            }}
          >
            <img
              src={image.urls.regular}
              alt={image.alt_description || "Immagine"}
              style={{ width: "100%", display: "block" }}
            />
            <div style={{ padding: "15px" }}>
              <p>
                <strong>Autore:</strong> {image.user.name}
              </p>
              <p>
                <strong>Località:</strong>{" "}
                {image.location?.name || "Sconosciuta"}
              </p>
              <a
                href={image.links.html}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007BFF" }}
              >
                Visualizza su Unsplash
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSelector;
