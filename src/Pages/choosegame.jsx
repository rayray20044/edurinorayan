import './choosegame.css'
import './home.css'
import {useNavigate} from "react-router-dom";
import YouTube from 'react-youtube';
import robinGame from "../assets/gameimg/robin.png"
import asaGame from "../assets/gameimg/asa.png"
import leoGame from "../assets/gameimg/leo.png"
import mikaGame from "../assets/gameimg/mika.png"
import {useState} from "react";
import logo from "../assets/logo.png";


export function Choosegame () {
    const navigate = useNavigate();

    const goToPage1 = () => {
        navigate('/game1');
    };

    const goToPage2 = () => {
        navigate('/game2');
    }

    const [playing] = useState(true);

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
        <>

            <div className="container2">


                <div className="video-wrapper2">
                    <YouTube videoId="4Ekk5lCCVIw" opts={opts} onReady={onReady} onEnd={onEnd}/>
                </div>


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


                <div className="header">
                    <h3>Choose a friend to help first!</h3>
                </div>


                <div className="game-buttons">
                    <button className="game-button" onClick={goToPage1}>
                        <img src={asaGame} alt="Game 1" className="robin1"/>
                    </button>
                    <button className="game-button" onClick={goToPage2}>
                        <img src={robinGame} alt="Game 2" className="robin1"/>
                    </button>


                    <button className="game-button">
                        <img src={leoGame} alt="Game 3" className="robin1"/>
                    </button>


                    <button className="game-button">
                        <img src={mikaGame} alt="Game 4" className="robin1"/>
                    </button>


                </div>
            </div>


        </>
    )
}