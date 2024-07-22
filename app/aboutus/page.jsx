'use client'
import { useState } from "react";
import "./../../public/assets/styles/aboutPageStyle.scss";
import InnerBanner from "./../../common/InnerBanner";
import SectionTopInfo from "./../../common/SectionTopInfo";
import Image from "next/image";

import serviceIcon1 from "./../../public/assets/Images/homepage/digitalMarketing.png";
import serviceIcon2 from "./../../public/assets/Images/homepage/MarketingStrategies.png";

//import teamImage1 from './../assets/Images/homepage/cosnsult-image.png'
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import rb from "./../../public/assets/Images/homepage/team/rb.png";
import rs from "./../../public/assets/Images/homepage/team/rs.png";
import ss from "./../../public/assets/Images/homepage/team/ss.png";
import ak from "./../../public/assets/Images/homepage/team/ak.png";
import s from "./../../public/assets/Images/homepage/team/s.png";
import r from "./../../public/assets/Images/homepage/team/r.png";
import n from "./../../public/assets/Images/homepage/team/n.png";
import y from "./../../public/assets/Images/homepage/team/y.png";
import kg from "./../../public/assets/Images/homepage/team/kg.png";



const serviceData = [
  {
    icon: serviceIcon1,
    title: "Search Engine Optimization (SEO)",
    description:
      "Dominate search results with targeted strategies that skyrocket your website traffic and attract qualified leads. ",
  },
  {
    icon: serviceIcon2,
    title: "Social Media Optimization (SMO)",
    description:
      "Ignite your brand awareness with engaging social media campaigns that drive targeted traffic and build a loyal community.",
  },
  {
    icon: serviceIcon1,
    title: "Amazon, Ebay, Etsy Listings , EBC, PPC",
    description:
      "Boost your product sales across major marketplaces! We optimize listings, manage ads (EBC & PPC), and get you seen by millions of potential customers. ",
  },
  {
    icon: serviceIcon2,
    title: "Online Reputation Management",
    description:
      "Protect and enhance your online image. We monitor reviews, address negative feedback, and build a positive brand reputation.",
  },
  {
    icon: serviceIcon1,
    title: "Adwords PPC Management",
    description:
      "Maximize your ROI with targeted Google Ads campaigns. We attract qualified leads and generate more sales for your business.",
  },
  {
    icon: serviceIcon2,
    title: "Google Product Listing Ads (for E-commerce websites)",
    description:
      "Showcase your products directly in Google search results. We create captivating ads that drive qualified traffic and conversions.",
  },
  {
    icon: serviceIcon1,
    title: "Google Merchant Center",
    description:
      "Effortlessly manage your product data feed for Google Shopping campaigns. We ensure accurate information and optimal ad performance.",
  },
  {
    icon: serviceIcon2,
    title: "Facebook Paid Advertising",
    description:
      "Reach your ideal audience with laser-focused Facebook Ads. We design targeted campaigns to build brand awareness and generate leads. ",
  },
  {
    icon: serviceIcon1,
    title: "Twitter Advertising",
    description:
      "Spark dynamic conversations and brand engagement with targeted Twitter Ads. Connect with influencers and reach new customers.",
  },
  {
    icon: serviceIcon2,
    title: "LinkedIn Advertising",
    description:
      "Target B2B professionals with high-impact LinkedIn Ads. We generate leads and build valuable business connections.",
  },
  {
    icon: serviceIcon1,
    title: "YouTube Advertising",
    description:
      "Capture attention with engaging video ads on YouTube. We connect you with your audience and drive targeted website traffic.",
  },
  {
    icon: serviceIcon2,
    title: "WordPress Web Design",
    description:
      "Create a beautiful and user-friendly website with our custom WordPress development expertise. ",
  },
  {
    icon: serviceIcon2,
    title: "Shopify Development",
    description:
      "Build a powerful and scalable online store with our Shopify development services. We customize your store to perfectly fit your needs.",
  },
  {
    icon: serviceIcon2,
    title: "Custom Website (React JS, Javascript, front-end)",
    description:
      "Bring your unique vision to life with our custom website development using cutting-edge React JS and Javascript technologies. ",
  },
];

const teamsData = [
  {
    id: 1,
    image: rs,
    video_url: "https://www.youtube.com/embed/8K1McjsydlQ",
    name: "Randeep Singh",
    designation: "Director ",
  },
  {
    id: 2,
    image: ss,
    video_url: "https://www.youtube.com/embed/U5_pohZ8NHc?si=MypjhjYIiBYVSGss",
    name: "Seema Singh",
    designation: "Managing Director",
  },
  {
    id: 3,
    image: s,
    video_url: "https://www.youtube.com/embed/L047UlpW2SU?si=91bFPoVV6HJDDVBL",
    name: "Suhail Samwal",
    designation: "Project Manager",
  },
  {
    id: 4,
    image: rb,
    video_url: "",
    name: "R.B. Singh",
    designation: "Project Manager ",
  },
  {
    id: 5,
    image: y,
    video_url: "https://www.youtube.com/embed/xW4DGaFw94A?si=3D4A2Irz4KoQwbay",
    name: "Yuvraj Singh",
    designation: "Digital marketing Expert",
  },
  {
    id: 6,
    image: r,
    video_url: "https://www.youtube.com/embed/cnaHrbz1opM?si=hBuWo58DqJf1vmo7",
    name: "Rishita",
    designation: "Social Media expert ",
  },
  {
    id: 7,
    image: ak,
    video_url: "https://www.youtube.com/embed/K9Zufc2AHTg?si=XQ01RmsOosdeDftM",
    name: "Ankit Kapoor",
    designation: "SEO and ORM Expert ",
  },
  {
    id: 8,
    image: n,
    video_url: "https://www.youtube.com/embed/hNJEzBdOELs?si=8yEB3IdSlmDp29c0",
    name: "Naman Singh",
    designation: "SEO expert ",
  },
  {
    id: 9,
    image: kg,
    video_url: "",
    name: "Kirti Gaba",
    designation: "Technical SEO Expert",
  },
];

const AboutUs = () => {

  
  const testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [showIntro, setShowIntro] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleCloseModal = () => {
    setShowIntro(false);
  };

  const handleShowModal = (item) => {
    setActiveVideo(item);
    setShowIntro(true);
  };

  return (
    <>
     <head>
      <title>About WTechy - Growth Focused Digital Marketing Agency</title>
        <meta title="About WTechy - Growth Focused Digital Marketing Agency"/>
        <meta name="description"
        content="Unleash your brand's potential. We're a results-driven digital marketing agency crafting custom strategies for SEO, PPC & social media. Let's grow together! "/>
      </head>
<section>
      <InnerBanner
        title={"About Us"}
        info={
          "WTechy helps businesses thrive online with expert Digital Marketing Strategies and Web Design Solutions. We turn possibilities into reality for your Brand."
        }
      />
      <section className={`sectionPadding`}>
        <div className="container">
          <div className={`row align-items-center`}>
            <div className="col-md-6 mb-5 mb-md-0 text-center">
              <iframe
                className="hasShadow border_radius"
                width="100%"
                height="358"
                src="https://www.youtube.com/embed/3j70plHbICg?si=-Ih-vlNUBU2hc7Ip"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="title-xl fw-bold">About Us</h2>
              <div>
                <p>
                  At WTechy, we&apos;re your one-stop shop for comprehensive
                  Digital Marketing solutions. Our passionate team of
                  specialists leverages cutting-edge strategies to elevate your
                  Brand and achieve industry dominance.
                </p>
                <p>
                  We prioritize long-term success by adhering to ethical
                  white-hat SEO practices. This ensures your website remains
                  search engine friendly while building trust with your
                  audience.
                </p>
                <p>
                  Partner with WTechy and dominate your online presence.
                  Let&apos;s turn possibilities into reality for your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionPadding bg-gray">
        <div className="container">
          <SectionTopInfo
            smallTitle={"Our Services"}
            title={"Services We Offer"}
            text={
              "WTechy offers a variety of digital marketing services to help businesses grow online, including SEO, social media marketing, and website development."
            }
          />
          <div className="row mt-5 justify-content-center">
            {serviceData.map((service, index) => (
              <div className="col-lg-4 col-md-4 mb-4 " key={index}>
                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow h-100">
                  <div className="cardIcon cardIcon-Type1">
                    <Image src={service.icon} alt={service.title} />
                  </div>
                  <div className="cardInfo">
                    <h2 className="cardTitle title-md fw-bold">
                      {service.title}
                    </h2>
                    <p className="cardDescription text-sm mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sectionPadding teamSection">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            smallTitle={"Our Team"}
            title={"Meet the We Offer"}
            text={
              "For this Section, we have images as well as Intro videos of Team members. Please include images and videos with each member."
            }
          />
          <div className="row mt-5 teamList justify-content-center">
            <Slider
              className="testimonialSlider"
              {...testimonialSliderSettings}
            >
              {teamsData.map((item) => (
                <div className="mx-2" key={item.id}>
                  <div className="cardWrap mx-2 bg-white">
                    <div className="cardImage teamImage">
                      <Image src={item.image} alt={item.title} />
                    </div>
                    <div className="cardInfo">
                      <h2 className="cardTitle title-sm fw-bold mb-1">
                        {item.name}
                      </h2>
                      <p className="text-18 mb-0 fw-medium">
                        {item.designation}
                      </p>
                      {item.video_url ? (
                        <button
                          className="playButton"
                          onClick={() => handleShowModal(item)}
                        >
                          <AiOutlinePlayCircle />
                          Watch Intro
                        </button>
                      ) : (
                        <button className="playButton">
                          <AiOutlinePlayCircle />
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            {activeVideo !== null && (
              <Modal
                size="lg"
                centered
                show={showIntro}
                onHide={handleCloseModal}
              >
                <button
                  className="popupClose dBtn"
                  onClick={() => handleCloseModal()}
                  title="Close"
                >
                  <IoCloseOutline />
                </button>
                <Modal.Body className="">
                  <iframe
                    className="video_popup"
                    src={activeVideo.video_url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default AboutUs;

