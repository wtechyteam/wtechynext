'use client'
import React, { useState } from 'react';
import { Accordion, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import Logo from './../../../common/SiteLogo';
import headerLogo from './../../../public/assets/Images/siteLogo.png';
import { FiChevronDown } from "react-icons/fi";
import { headerData } from '../../data/headerData';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';


const HeaderNavbar = () => {
    
    const [show, setShow] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const handleNavLinkClick = () => {
        window.scrollTo(0, 0);
        handleParentNavLeave()
    };

    const toggleOffCanvas = () => {
        setShow(!show);
    };

    const executeMultipleFunctions = () =>{
        toggleOffCanvas();
        handleNavLinkClick();
    }

    const handleParentNavHover = (index) => {
        setActiveLink(index);
    };

    const handleParentNavLeave = () => {
        setActiveLink(null);
    };

    return (
        <BrowserRouter>
        <Navbar expand="xl"> 
            <Link href='/'>
            <Image src={headerLogo} width={100} />
            </Link>
            <Navbar.Toggle onClick={toggleOffCanvas} aria-controls="offcanvasNavbar-expand-xl" />
            <Navbar.Offcanvas
                show={show}
                onHide={toggleOffCanvas}
                id="offcanvasNavbar-expand-xl"
                aria-labelledby="offcanvasNavbarLabel-expand-xl"
                placement="end"
            >
                <Offcanvas.Header show={show.toString()} closeButton />

                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1">
                        <ul className="d-none d-xl-flex desktopMenu navList">
                            {headerData.map((navItem, index) => (
                                <li
                                    key={index}
                                    className="navItemWrap"
                                    onMouseEnter={() => handleParentNavHover(index)}
                                    onMouseLeave={handleParentNavLeave}
                                >
                                    <NavLink
                                        to={navItem.link}
                                        className={`navItem mb-0 ${navItem?.customClass}`}
                                        onClick={handleNavLinkClick}
                                    >
                                        {navItem.title}
                                        {navItem.subMenu && <FiChevronDown className="fs-large" />}
                                    </NavLink>
                                    {navItem.subMenu && activeLink === index && (
                                        <div className="megaMenuWrapper">
                                            {navItem.subMenu.map((subMenu, index) => (
                                                <div key={index} className="menuWrap">
                                                    <h6 className="title-sm fw-semibold fontInter">{subMenu.subtitle}</h6>
                                                    <ul>
                                                        {subMenu.subLinks.map((item) => (
                                                            <li key={item.id}>
                                                                <NavLink
                                                                    to={item.link}
                                                                    className="itemLink"
                                                                    onClick={handleNavLinkClick}
                                                                >
                                                                    {item.title}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        
                        <ul className='d-xl-none mobileMenu navList'>
                            {headerData && headerData.map((item, index) => {
                                return (
                                    <li key={index} className="navItemWrap">
                                        {
                                            item.subMenu ? (
                                                <Accordion defaultActiveKey="0" className='drops'>
                                                    <Accordion.Item eventKey={item.eventKey}>
                                                        <Accordion.Header>{item.title}</Accordion.Header>
                                                        {item.subMenu && item.subMenu.map((ele, index) => (
                                                            <Accordion.Body key={index}>
                                                                <Accordion defaultActiveKey="0" className='drops'>
                                                                    <Accordion.Item eventKey={item.eventKey}>
                                                                        <Accordion.Header>{ele.subtitle}</Accordion.Header>
                                                                        <Accordion.Body>
                                                                            <ul>
                                                                                {ele.subLinks && ele.subLinks.map((item, index) => (
                                                                                    <li key={index}>
                                                                                        <NavLink onClick={executeMultipleFunctions} to={item.link} className='itemLink'>{item.title}</NavLink>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </Accordion.Body>
                                                                    </Accordion.Item>
                                                                </Accordion>
                                                            </Accordion.Body>
                                                        ))}
                                                    </Accordion.Item>
                                                </Accordion>
                                            )
                                            :
                                            <NavLink to={item.link} onClick={executeMultipleFunctions} className='navItem'>{item.title}</NavLink>
                                        }
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
        </BrowserRouter>
    );
};

export default HeaderNavbar;
