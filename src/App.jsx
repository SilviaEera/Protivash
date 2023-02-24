import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Background from "./components/Background";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import Teachers from "./Pages/Teachers/Teachers";
import Noticepage from "./Pages/Notice/Noticepage";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";

function App() {
  return (
    <Background>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/notice" element={<Noticepage />}></Route>
        </Routes>
        <Routes>
          <Route path="/gallery" element={<ImageGallery />}></Route>
        </Routes>
        <Routes>
          <Route path="/teachers" element={<Teachers />}></Route>
        </Routes>
        <Footer />
        {/* <Home /> */}
      </div>
    </Background>
  );
}

export default App;
