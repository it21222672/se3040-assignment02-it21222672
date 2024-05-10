import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import firebase from 'firebase/compat/app'; // Assuming you've configured Firebase

const Homemain = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY`
            );
            const data = await res.json();
            setPhotoData(data);
        }

        fetchPhoto();
    }, []);

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            alert("Logged out successfully");
            window.location.href = "/"; // Redirect to the home page after logout
        }).catch((error) => {
            console.error("Error logging out:", error);
        });
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="https://th.bing.com/th/id/R.8275bfcc71e42eee0f1f4eaa9034823f?rik=KaGGCrGcQf91tg&pid=ImgRaw&r=0"
                            alt="NASA Image"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="display-4">Welcome to NASA Explorer!</h1>
                            <p className="lead">
                                Explore the wonders of the universe with stunning NASA images.
                            </p>
                            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        {photoData ? (
                            <>
                                <h2 className="text-center mb-4">{photoData.title}</h2>
                                <img
                                    src={photoData.url}
                                    alt={photoData.title}
                                    className="img-fluid rounded shadow-lg mx-auto d-block"
                                />
                                <p className="mt-3">{photoData.explanation}</p>
                            </>
                        ) : (
                            <p className="text-center">Loading...</p>
                        )}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2 className="mb-4">About NASA</h2>
                        <p>
                            The National Aeronautics and Space Administration (NASA) is an independent
                            agency of the United States federal government responsible for the civilian
                            space program, as well as aeronautics and aerospace research.
                        </p>
                        <p>
                            NASA was established in 1958, succeeding the National Advisory Committee
                            for Aeronautics (NACA). Since its establishment, NASA has led numerous
                            space exploration missions, including sending humans to the Moon, Mars
                            exploration, and the study of distant planets and celestial bodies.
                        </p>
                        <Link to="/about" className="btn btn-primary">
                            Learn More About NASA
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-4">NASA Missions</h2>
                        <ul className="list-group">
                            <li className="list-group-item">Mars Exploration Rover Mission</li>
                            <li className="list-group-item">James Webb Space Telescope</li>
                            <li className="list-group-item">International Space Station (ISS)</li>
                            <li className="list-group-item">Voyager Mission</li>
                            <li className="list-group-item">Pluto Exploration Mission</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homemain;
