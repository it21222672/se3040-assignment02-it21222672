import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LandsatImagery from './LandsatImagery';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/homemain">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mars">Mars</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/NasaPhoto">Planeatry</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/landsatimagery">LandsatImagery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
