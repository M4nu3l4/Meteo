import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Weather App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Link alla Home */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> {/* Link alla pagina About */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link> {/* Link alla pagina Contact */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">Weather</Link> {/* Link alla pagina Weather */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
