import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Dr. Fatih Secilmis Dental Clinic</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;