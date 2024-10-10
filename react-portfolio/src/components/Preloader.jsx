import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Custom CSS for styling (if needed)

function Preloader() {
    // State to manage preloader visibility
    const [loading, setLoading] = useState(true);

    // Hide the preloader after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // 2 seconds delay

        // Cleanup the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                // Preloader content
                <div className="preloader-container">
                    <img src="https://raw.githubusercontent.com/AbuHorairaTarif/test/refs/heads/main/hasnat.webp" className="img-fluid preloader-image object-fit-cover figure-img " width={200} height={200} alt="Profile Logo" />
                    <h2 className="preloader-heading">Md. Abul Hasnat Bhuiyan</h2>
                    <p className="preloader-subtitle">Data Entry, Digital Marketing Specialist</p>

                </div>
            ) : (
                // Main content after preloader
                <div></div>
            )}
        </div>
    );
}

export default Preloader;
