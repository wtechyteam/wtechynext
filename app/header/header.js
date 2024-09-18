'use client'
import React, { useState, useEffect } from 'react';
import './headerStyle.scss';
import HeaderNavbar from './navbar/navbar.jsx';



const Header = ({ activeTab, setActiveTab, currentPath, setCurrentPath }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Safe to use document here
            const handleScroll = () => setIsScrolled(window.scrollY > 50);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
            document.getElementById('elementId').focus();
          }
    }, []);


    return (
        <> 
            <header className={`headerMain ${isScrolled ? 'sticky' : ''}`}>
                <div className='container'>
                    <HeaderNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </header>
            
        </>
    );
};

export default Header;
