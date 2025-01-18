import WeatherSelector from "./src/components/WeatherSelector";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)


const Main = () => {
  return (
    <main className="main-content container py-4">
      <h2>Weather Information</h2>
      <WeatherSelector />
    </main>
  );
};

export default Main;


