
import './certificate.css';
import imgFig from '../assets/certificateimg/figures.png';
import imgCer from '../assets/certificateimg/certificate.png';
import logo from '../assets/logo.png';
import Confetti from "react-confetti";
import {useNavigate} from "react-router-dom";


export function Certificate () {

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/page4');
    };

    return (
        <>

            <div className="container1">


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

                <div className="confetti-container">

                    <Confetti/>

                </div>

                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-image"/>

                </div>

                <div className="certificate-container">
                    <img src={imgCer} alt="Certificate" className="certificate-image"/>
                </div>

                <div className="figures-container">
                    <img src={imgFig} alt="Figures" className="figures-image"/>
                </div>

                <button className="button3" onClick={handleNextClick}>Claim Prize!!</button>


            </div>

        </>
    )
}