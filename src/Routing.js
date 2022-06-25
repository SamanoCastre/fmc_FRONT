import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Error404 from './pages/Error/Error404';
import Administration from './pages/Administration/Administration';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
export default function Routing() {
    
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/administration" element={<Administration/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}
