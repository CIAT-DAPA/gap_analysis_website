import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from './components/menu/Menu';
import AboutUs from './pages/aboutUs/AboutUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
