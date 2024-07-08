"use client"
import "./footerStyle.scss";
import Logo from "./../../common/SiteLogo";
import footerLogo from "./../../public/assets/Images/wtechy-logo-white.webp";
import { BrowserRouter, NavLink } from "react-router-dom";
import SocialLinks from "./../../common/SocialLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const topLinks = [
    {
      id: 1,
      title: "Home",
      link: "/", // Correctly set the home page route
    },
    {
      id: 2,
      title: "About Us",
      link: "/about-agency",
    },
    {
      id: 5,
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 7,
      title: "Careers",
      link: "/careers",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "locations",
      link: "/locations",
    },
    // Add more service sections as needed
  ];

  const serviceLinks = [
    {
      id: 1,
      title: "Search Engine Optimization",
      link: "service/search-engine-optimization", // Correctly set the home page route
    },
    {
      id: 2,
      title: "Social Media Optimization",
      link: "service/social-media-optimization",
    },
    {
      id: 3,
      title: "Google Ads Management",
      link: "service/google-ads-management",
    },
    {
      id: 4,
      title: "Content Marketing",
      link: "service/content-marketing",
    },
    // Add more service sections as needed
  ];

  return (
    <BrowserRouter>
    <footer className="siteFooter">
      <div className="footerTopWrap">
        <div className="container">
          <div className="row footerRow">
            <div className="col-lg-4 col-md-6 pr-5">
              <Link href="/">
                <Image src={footerLogo} width={100} />
              </Link>
              <p className="mt-4 mb-0">
                The businesses influence digital channels to stay ahead from
                their competition and connect with their prospects.
              </p>
              <SocialLinks />
            </div>
            <div className="col-lg-2 col-md-6">
              <h2 className="title-sm fw-bold mb-4">Top Links</h2>
              <ul className="footerList linkList">
                {topLinks.map((list, index) => (
                  <li className={`serviceWrap`} key={index}>
                    <NavLink
                      onClick={() => handleNavLinkClick()}
                      to={list.link}
                    >
                      {list.title}
                    </NavLink>
                  </li>
                ))}
                {/* <li><a href='/locations'>location</a></li> */}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="title-sm fw-bold mb-4">Services</h2>
              <ul className="footerList linkList">
                <BrowserRouter>
                  {serviceLinks.map((list, index) => (
                    <li className="serviceWrap" key={index}>
                      <NavLink
                        onClick={() => handleNavLinkClick()}
                        to={list.link}
                      >
                        {list.title}
                      </NavLink>
                    </li>
                  ))}
                </BrowserRouter>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="title-sm fw-bold mb-4">Get In Touch</h2>
              <ul className="footerList contactInfo">
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+91-6283857196" title="+91-6283857196">
                    +91-6283857196
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+91-7717505073" title="+91-7717505073">
                    +91-7717505073
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:info@wtechy.com" title="info@wtechy.com">
                    info@wtechy.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <p>
                    HSIIDC IT Park, Plot No 6, 7th Floor, Behind Gurudwara Nada
                    Sahib, Sector 22, Panchkula, Haryana 134109
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p className="mb-0">Copyright © 2024 Wtechy. All rights reserved.</p>
      </div>
    </footer>
    </BrowserRouter>
  );
};

export default Footer;
