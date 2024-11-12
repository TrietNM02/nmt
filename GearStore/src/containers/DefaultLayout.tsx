import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../views/Login';
import Home from '../views/Home';
import Header from './Header';
import Signup from '../views/Signup';
import Footer from './Footer';

const DefaultLayout = () => {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </>
    );
}

export default DefaultLayout;
