"use client";
import "./footerStyle.scss";
import footerLogo from "./../../public/assets/Images/wtechy-logo-white.webp";
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
      link: "/aboutus",
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
      title: "Locations",
      link: "/locations",
    },
    // Add more service sections as needed
  ];

  const serviceLinks = [
    {
      id: 1,
      title: "Search Engine Optimization",
      link: "/search-engine-optimization", // Correctly set the home page route
    },
    {
      id: 2,
      title: "Social Media Optimization",
      link: "/social-media-optimization",
    },
    {
      id: 3,
      title: "Google Ads Management",
      link: "/google-ads-management",
    },
    {
      id: 4,
      title: "Content Marketing",
      link: "/content-marketing",
    },
    // Add more service sections as needed
  ];

  return (
    <footer className="siteFooter">
      <div className="footerTopWrap">
        <div className="container">
          <div className="row footerRow">
            <div className="col-lg-4 col-md-6 pr-5">
              <Link href="/">
                <Image src={footerLogo} width={100} alt="footerLogo"/>
              </Link>
              <p className="mt-4 mb-0">
                The businesses influence digital channels to stay ahead from
                their competition and connect with their prospects.
              </p>
              <SocialLinks />
            </div>
            <div className="col-lg-2 col-md-6">
              <h2 className="title-sm fw-bold mb-4">Top Links</h2>
              <ul className="footerList">
                {topLinks.map((list, index) => (
                  <li className={`serviceWrap`} key={index}>
                    <Link href={list.link} legacyBehavior>
                      <a onClick={handleNavLinkClick}>{list.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="title-sm fw-bold mb-4">Services</h2>
              <ul className="footerList">
                {serviceLinks.map((list, index) => (
                  <li className="serviceWrap" key={index}>
                    <Link href={list.link} legacyBehavior>
                      <a onClick={handleNavLinkClick}>{list.title}</a>
                    </Link>
                  </li>
                ))}
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
  );
};

export default Footer;
