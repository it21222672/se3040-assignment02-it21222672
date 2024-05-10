import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import NavBar from './NavBar';


const LandsatImagery = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [imageDate, setImageDate] = useState('');
    const [cloudScore, setCloudScore] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=ohW23vzPILDd25GEUlx7gI0rxOzINFLJvfZWcDZf');
            setImageUrl(response.data.url);
            setImageDate(response.data.date);
            setCloudScore(response.data.cloud_score);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching image:', error);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <NavBar/>
            <h1>NASA Landsat Imagery</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div>
                        {imageUrl && <img src={imageUrl} alt="Landsat Imagery" style={{ maxWidth: '100%' }} />}
                    </div>
                    <div>
                        <p>Date: {imageDate}</p>
                        <p>Cloud Score: {cloudScore}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default LandsatImagery;
