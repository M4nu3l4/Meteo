import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './main'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components//Contact";
import WeatherSelector from "./src/components/WeatherSelector"
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app-container bg-dark text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weather" element={<WeatherSelector />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;