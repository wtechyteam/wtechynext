'use client';
import React, { useState, useEffect } from 'react';
import { Accordion, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import Logo from './../../../common/SiteLogo';
import headerLogo from './../../../public/assets/Images/siteLogo.png';
import { FiChevronDown } from "react-icons/fi";
import { headerData } from '../../data/headerData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HeaderNavbar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    handleParentNavLeave();
  };

  const toggleOffCanvas = () => {
    setShow(!show);
  };

  const executeMultipleFunctions = () => {
    toggleOffCanvas();
    handleNavLinkClick();
  };

  const handleParentNavHover = (index) => {
    setActiveLink(index);
  };

  const handleParentNavLeave = () => {
    setActiveLink(null);
  };

  return (
    <Navbar expand="xl">
      <Link href='/' passHref legacyBehavior>
        <a>
          <Image src={headerLogo} width={100} alt="Site Logo" />
        </a>
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
                  <Link href={navItem.link} passHref legacyBehavior>
                    <a
                      className={`navItem mb-0 ${navItem?.customClass} ${router.pathname === navItem.link ? 'active' : ''}`}
                      onClick={handleNavLinkClick}
                    >
                      {navItem.title}
                      {navItem.subMenu && <FiChevronDown className="fs-large" />}
                    </a>
                  </Link>
                  {navItem.subMenu && activeLink === index && (
                    <div className="megaMenuWrapper">
                      {navItem.subMenu.map((subMenu, subIndex) => (
                        <div key={subIndex} className="menuWrap">
                          <h6 className="title-sm fw-semibold fontInter">{subMenu.subtitle}</h6>
                          <ul>
                            {subMenu.subLinks.map((item) => (
                              <li key={item.id}>
                                <Link href={item.link} passHref legacyBehavior>
                                  <a className="itemLink" onClick={handleNavLinkClick}>
                                    {item.title}
                                  </a>
                                </Link>
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
                            {item.subMenu && item.subMenu.map((ele, subIndex) => (
                              <Accordion.Body key={subIndex}>
                                <Accordion defaultActiveKey="0" className='drops'>
                                  <Accordion.Item eventKey={ele.eventKey}>
                                    <Accordion.Header>{ele.subtitle}</Accordion.Header>
                                    <Accordion.Body>
                                      <ul>
                                        {ele.subLinks && ele.subLinks.map((subItem, subItemIndex) => (
                                          <li key={subItemIndex}>
                                            <Link href={subItem.link} passHref legacyBehavior>
                                              <a onClick={executeMultipleFunctions} className='itemLink'>{subItem.title}</a>
                                            </Link>
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
                      ) : (
                        <Link href={item.link} passHref legacyBehavior>
                          <a onClick={executeMultipleFunctions} className='navItem'>{item.title}</a>
                        </Link>
                      )
                    }
                  </li>
                )
              })}
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default HeaderNavbar;
