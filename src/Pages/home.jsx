import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import homescreen from '../assets/homescreen.png';
import YouTube from 'react-youtube';

export function Home() {
    const navigate = useNavigate();

    const opts = {
        height: '270',
        width: '460',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'aVvAQQZVQbk',
        },
    };

    const onReady = (event) => {
        event.target.playVideo();
    };

    const goToNextPage = () => {
        navigate('/page1'); // Adjust the path as needed
    };

    return (
        <div className="container">
            <div className="background-image">
                <img src={homescreen} alt="Background" />
            </div>
            <div className="video-wrapper">
                <YouTube videoId="aVvAQQZVQbk" opts={opts} onReady={onReady} />
            </div>
            <button className="play-button" onClick={goToNextPage}>
                <span className="play-icon">&#9654;</span>
            </button>
        </div>
    );
}













