import React, { useState, useEffect } from 'react';


import NavBar from "./NavBar"
const apiKey = process.env.REACT_APP_NASA_KEY;
export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=ohW23vzPILDd25GEUlx7gI0rxOzINFLJvfZWcDZf`
            );
            const data = await res.json();
            console.log(data); // Log photoData to console for debugging
            setPhotoData(data);
        }

        fetchPhoto();
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    // Check if photoData is null or undefined before rendering
    if (!photoData) return <div>Loading...</div>;

    // Conditional rendering based on media_type
    return (
        <>
        <NavBar/>
        <div className = 'pagea'>
            {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} />
            ) : (
                <iframe
                    title="NASA APOD"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    classaname = "photo"
                />
            )}
            <div className = 'desc'>
                <h1>{photoData.title}</h1>
                <p>{photoData.explanation}</p>
            </div>
        </div>
        </>
    );
}
