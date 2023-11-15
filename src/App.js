import logo from './logo.svg';
import './App.css';
import Home from './Pages/Navbar/Home/Home';
import ContactUspage from './Pages/ContactUS/ContactUspage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/Services/Services';
import About_us from './About_us/About_us';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/About-us"  element={<About_us/>}  />
        <Route path="/Contact-us"  element={<ContactUspage/>}  />
        <Route path="/Services"  element={<Services/>}  />
        
       </Routes>
             </BrowserRouter>
    </div>
  );
}

export default App;
