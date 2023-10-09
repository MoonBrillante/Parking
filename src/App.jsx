import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Login from './components/Login'
import Calendar from './components/Calendar'
import Register from './components/Register'
import AdministradorPlaza from './components/AdministradorPlaza'
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/register" element={<Register />} />
                <Route path="/administradorplaza" element={<AdministradorPlaza />} />
            </Routes>
        </Router>
    );
}

export default App;
