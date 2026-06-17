import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />

      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<Signup />} path={"/signup"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
