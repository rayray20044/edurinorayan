import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/home.jsx';
import { Choosegame } from './Pages/choosegame.jsx';
import { Game1 } from './Pages/game1.jsx';
import { Game2 } from './Pages/game2.jsx';
import { Certificate } from './Pages/certificate.jsx';
import { Coupon } from './Pages/coupon.jsx';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Choosegame />} />
                <Route path="/game1" element={<Game1 />} />
                <Route path="/game2" element={<Game2 />} />
                <Route path="/page3" element={<Certificate />} />
                <Route path="/page4" element={<Coupon />} />
            </Routes>
        </Router>
    );
}

export default App
