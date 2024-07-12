'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage1 from './../../public/assets/Images/homepage/bannerInner1.png'
import bannerImage2 from './../../public/assets/Images/homepage/bannerInner2.jpg';
import bannerImage3 from './../../public/assets/Images/homepage/bannerInner3.jpg';
import {scrollTop} from '../../common/utils'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Image from 'next/image';
import {useMounted} from "./../../common/unmounted"


const BannerSlider = () => {
  const mounted = useMounted();
  if(!mounted) return null;
  const bannerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease-in-out',
    autoplaySpeed: 5000 // Set the autoplay speed in milliseconds
  };



  return (
    <>
<BrowserRouter>
    
    
    <div className="banner-slider">
      <div className="hero-shapes">
        <div className="shape top-shape"></div>
        <div className="shape bottom-shape"></div>
      </div>
      <div className="container bannerContentWrapper">
        <div className='row align-items-center'>
          <div className='col-xl-5 text-center text-xl-start mb-5 mb-xl-0 '>
            <div className="bannerContentWrap" data-aos="fade-right" data-aos-duration="1500">
              <h1 className='bannerTitle title-xxl fw-bold'>Full-Stack <span>Digital Marketing</span> Agency: Scale Your Business </h1>
              <h2 className='bannerSubTitle'>We maximize your business potential </h2>
              <p className='text-20'>Unlock growth with our full-stack digital marketing solution. Scale your business with proven strategies in SEO, PPC, Social media, Website design, and more. </p>
              <Link className="dBtn btnPrimary mt-4 hasShadow" title='Contact us'
               onClick={scrollTop} 
               to='/contact'>Contact Us</Link>
            </div>
          </div>
          <div className="col-xl-7">
            <div className='bannerImage' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" data-aos-offset="300">
              <Slider {...bannerSliderSettings}>
                <div>
                <Image src={bannerImage1} alt="Amplify your Sales in 90 Days"  />
                </div>
                <div>
                <Image src={bannerImage2} alt="Amplify your Sales in 90 Days"  />
                </div>
                <div>
                <Image src={bannerImage3} alt="Amplify your Sales in 90 Days"  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
};

export default BannerSlider;
