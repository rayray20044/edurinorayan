import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import './home.css';
import foxImage from '../assets/firstpage/fox1.png';
import Rocket1 from '../assets/firstpage/rocket1.png';

export function Home() {
    const navigate = useNavigate();
    const [playing] = useState(true);

    const goToNextPage = () => {
        navigate('/page1');
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            fs: 0,
        },
    };

    const onReady = (event) => {
        event.target.playVideo();
    };

    const onEnd = (event) => {
        if (playing) {
            event.target.playVideo();
        }
    };

    return (
        <div className="container1">

s

            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="circle circle6"></div>
            <div className="circle circle7"></div>
            <div className="circle circle8"></div>
            <div className="circle circle9"></div>
            <div className="circle circle10"></div>
            <div className="circle circle11"></div>

            <div className="fox-container">
                <img src={foxImage} alt="Fox" className="fox-image"/>
            </div>



            <div className="rocket-container">
                <img src={Rocket1} alt="Rocket" className="rocket-image"/>
            </div>

            <div className="video-wrapper">
                <YouTube videoId="aVvAQQZVQbk" opts={opts} onReady={onReady} onEnd={onEnd}/>
            </div>
            <button className="play-button" onClick={goToNextPage}>
                <span className="play-icon">&#9654;</span>
            </button>
        </div>
    );
}


















