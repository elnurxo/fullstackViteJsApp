import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div> 
    
  );
}

export default App;
