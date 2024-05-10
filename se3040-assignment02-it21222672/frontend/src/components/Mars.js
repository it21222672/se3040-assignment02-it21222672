import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import './mars.css';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Mars() {
    const [photoData, setPhotoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPhotos, setFilteredPhotos] = useState([]);

    useEffect(() => {
        async function fetchPhoto() {
            try {
                const res = await fetch(
                    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`
                );
                const data = await res.json();
                console.log(data); // Log photoData to console for debugging
                setPhotoData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
                setLoading(false);
            }
        }

        fetchPhoto();
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    useEffect(() => {
        if (photoData) {
            // Filter photos based on search query
            const filtered = photoData.photos.filter(photo =>
                photo.rover.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                photo.camera.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                photo.earth_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (`${photo.rover.name} Rover: ${photo.camera.full_name} captured this image on Sol ${photo.sol}.`).toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPhotos(filtered);
        }
    }, [searchQuery, photoData]);

    // Check for loading state
    if (loading) return <div className="loading">Loading...</div>;

    // Check for error state
    if (error) return <div className="error">{error}</div>;

    return (
        <>
            <NavBar/>
            <div className='page'>
                <h1 className="section-header">Mars Rover Photos</h1>
                {/* Search input field */}
                <input
                    type="text"
                    placeholder="Search by description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                {/* Rendering filtered photos */}
                <div className="photos-container">
                    {filteredPhotos && filteredPhotos.map(photo => (
                        <div key={photo.id} className="photo-wrapper">
                            <div className="photo-container">
                                <img src={photo.img_src} alt={photo.camera.full_name} className="photo-img" title={photo.rover.name + " - " + photo.earth_date} />
                                <div className="photo-info">
                                    <h2>{photo.camera.full_name}</h2>
                                    <p>Sol: {photo.sol}</p>
                                    <p>{photo.earth_date}</p>
                                    <p>{photo.rover.name} Rover: {photo.camera.full_name} captured this image on Sol {photo.sol}.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );        
}
