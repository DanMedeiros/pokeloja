import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import CardResul from './components/cardResult';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path=":id" element={<CardResul />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
