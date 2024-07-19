// src/components/Header.js
import React from 'react';
import './App.css';
//import logo from './logo.png'; // Ensure you have a logo image in your src folder

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img  alt="ABC Bank" className="logo" />
        <span className='bank-name'>Silber Private Bank</span>
      </div>
      <nav className="header-right">
        <a href="#our-bank">Our Bank</a>
        <a href="#investing-research">Investing Research</a>
        <a href="#other-products">Other Products</a>
        <a href="#financing">Financing</a>
        <select className="language-select">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          {/* Add more languages as much we needed */}
        </select>
        <button className="login-btn">Login</button>
        <button className="open-account-btn">Open Account</button>
      </nav>
    </header>
  );
};

export default Header;
