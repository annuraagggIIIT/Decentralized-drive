import React from 'react';
import './Footer.css';
const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {currentDate} AnuragKhanna. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
