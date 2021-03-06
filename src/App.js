import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import HoverContact from "./components/HoverContact"

function App() {
  return (

    <div className="App">

      <Nav />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <HoverContact />

      </div>
    </div>
  );
}

export default App;
