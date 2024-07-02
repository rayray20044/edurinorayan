import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home.jsx';
import { Page1 } from './Pages/page1.jsx';
import { Page2 } from './Pages/page2.jsx';
import { Page3 } from './Pages/page3.jsx';
import { Page4 } from './Pages/page4.jsx';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/Page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
            </Routes>
        </Router>
    );
}

export default App
