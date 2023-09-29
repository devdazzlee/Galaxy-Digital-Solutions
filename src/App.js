import logo from './logo.svg';
import './App.css';
import Home from './Pages/Navbar/Home/Home';
import ContactUspage from './Pages/ContactUS/ContactUspage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/Contact-us"  element={<ContactUspage/>}  />
       
       </Routes>
             </BrowserRouter>
    </div>
  );
}

export default App;
