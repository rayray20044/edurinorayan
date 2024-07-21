import Cards from "../component/Card/Cards.jsx";
import './game1.css';
import './home.css'
import asaFace from '../assets/game1/asaface.png'
import bubble from '../assets/game1/bubble.png'
import logo from "../assets/logo.png";


export function Game1() {


    return (
        <div className="container3">

            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image"/>

            </div>

            <div className="sqaure1">

                <div className="asaface">
                    <img src={asaFace} alt="Asa" className="asa-image"/>
                </div>

                <div className="circle circleface"/>


            </div>

            <h1>Match the correct animals</h1>

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
            <div className="circle circle12"></div>


            <Cards/>

        </div>


    );
}