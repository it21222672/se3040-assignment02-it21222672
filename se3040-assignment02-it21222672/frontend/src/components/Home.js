import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className="display-4 mb-4 text-primary">Welcome to NASA Explorer!</h1>
                        <h2>The National Aeronautics and Space Administration (NASA) is an independent
                            agency of the United States federal government responsible for the civilian
                            space program, as well as aeronautics and aerospace research.</h2>
                        <p className="lead">Explore the wonders of the universe with stunning NASA images.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src='https://th.bing.com/th/id/R.8275bfcc71e42eee0f1f4eaa9034823f?rik=KaGGCrGcQf91tg&pid=ImgRaw&r=0' alt="NASA Image" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-start">
                    <Link to="/signup" className="btn btn-primary btn-lg" style={{ marginBottom: '3rem' }}>
                        <span>See into the Cosmos</span>
                        <span className="arrow">➔</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
