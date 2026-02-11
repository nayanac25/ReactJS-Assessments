import React from 'react'

const Header = () => {
  return (
    <div className='header'>

    <div className='heading'>
      <img src="./assets/logo2.png" alt="TourIndia Logo"></img>
    <h1>GlobeYatra</h1>
    </div>

    <nav className='nav'>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#packages">Packages</a>
      <a href="#contact">Contact Us</a>
    </nav>

    </div>
  )
};

export default Header;