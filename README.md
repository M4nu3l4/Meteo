<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>🌤️ Weather Selector App</h1>
  <p>Benvenuto nell'app <strong>Weather Selector</strong>! 🚀 Questa applicazione ti consente di:</p>
  <ul>
    <li>🌍 Selezionare una località da una lista predefinita.</li>
    <li>🖼️ Visualizzare immagini della località selezionata grazie all'API di Unsplash.</li>
    <li>☁️ Visualizzare le informazioni meteo della località tramite l'API di OpenWeatherMap.</li>
  </ul>

  <h2>📦 Funzionalità</h2>
  <ul>
    <li>🔎 Ricerca immagini della località selezionata.</li>
    <li>📊 Informazioni meteo, tra cui:
      <ul>
        <li>🌡️ Temperatura attuale.</li>
        <li>🌦️ Descrizione delle condizioni meteorologiche.</li>
        <li>💧 Umidità.</li>
        <li>🌬️ Velocità del vento.</li>
      </ul>
    </li>
    <li>🔗 Collegamenti diretti alle immagini su Unsplash.</li>
  </ul>

  <h2>⚙️ Configurazione</h2>
  <p>Segui questi passaggi per configurare e avviare l'app:</p>
  <ol>
    <li>Clona il repository nel tuo ambiente locale:
      <pre><code>git clone https://github.com/tuo-repo/weather-selector-app.git</code></pre>
    </li>
    <li>Installa le dipendenze con il seguente comando:
      <pre><code>npm install</code></pre>
    </li>
    <li>Ottieni le tue chiavi API:
      <ul>
        <li>🔑 <strong>Unsplash API</strong>: Registrati su <a href="https://unsplash.com/developers" target="_blank">Unsplash Developers</a>.</li>
        <li>🔑 <strong>OpenWeatherMap API</strong>: Registrati su <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a>.</li>
      </ul>
    </li>
    <li>Configura le chiavi API nel file <code>WeatherSelector.jsx</code>:
      <pre><code>const unsplashAccessKey = "YOUR_UNSPLASH_ACCESS_KEY";
const weatherApiKey = "YOUR_WEATHER_API_KEY";</code></pre>
    </li>
    <li>Avvia l'app con il comando:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h2>🖥️ Utilizzo</h2>
  <p>Per utilizzare l'app:</p>
  <ol>
    <li>Seleziona una località dal menu a tendina.</li>
    <li>Fai clic sul pulsante "Cerca Meteo e Immagini".</li>
    <li>Guarda le immagini e il meteo della località selezionata. 🌟</li>
  </ol>

  <h2>📸 Screenshot</h2>
  <p>Ecco un'anteprima dell'app:</p>
  <img src="./public/EpicMeteo.jpg" alt="Screenshot dell'app Weather Selector" style="max-width: 100%; border: 1px solid #ddd; border-radius: 8px;">

  <h2>📜 Licenza</h2>
  <p>Questo progetto è distribuito sotto la licenza <strong>MIT</strong>. Puoi trovare maggiori dettagli nel file <code>LICENSE</code>.</p>

  <h2>💬 Contatti</h2>
  <p>Hai domande o suggerimenti? Contattami su:</p>
  <ul>
    <li>📧 Email: <a href="mailto:tuo-email@example.com">tuo-email@example.com</a></li>
    <li>🐙 GitHub: <a href="https://github.com/tuo-username" target="_blank">tuo-username</a></li>
  </ul>

  <footer style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px; font-size: 0.9em; color: #555;">
    <p>Creato con ❤️ da <strong>Tuo Nome</strong>.</p>
  </footer>
</body>
</html>
