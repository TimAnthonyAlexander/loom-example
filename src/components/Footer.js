import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Dr. Fatih Secilmis Dental Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;