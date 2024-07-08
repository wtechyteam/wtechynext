'use client'
import React, { useState, useEffect } from 'react';
import './headerStyle.scss';
import HeaderNavbar from './navbar/navbar.jsx';
import { BrowserRouter } from 'react-router-dom';


const Header = ({ activeTab, setActiveTab, currentPath, setCurrentPath }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <> <BrowserRouter>
            <header className={`headerMain ${isScrolled ? 'sticky' : ''}`}>
                <div className='container'>
                    <HeaderNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </header>
            </BrowserRouter>
        </>
    );
};

export default Header;
