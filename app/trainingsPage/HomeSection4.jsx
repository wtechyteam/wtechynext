'use client'
import { Link } from 'react-router-dom';
import { scrollTop } from '../../common/utils'
import contact from './../../public/assets/Images/homepage/contact.png'
import { BrowserRouter } from 'react-router-dom';
import Image from 'next/image';
import {useMounted} from "./../../common/unmounted"


const HomeSection4 = () => {

    const mounted = useMounted();
    if(!mounted) return null;

    return (
        <BrowserRouter>
        <section className='sectionPadding'>
          <div className="container">
            <div className="ctaWrap">
              <div className="row align-items-center">
                
                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">
                  <h4 className='section-title-sm'>Contact Us</h4>
                  <h2 className='title-xl fw-bold'>Our team is here to answer your questions and help you get started.</h2>
                  <p className='sectionInfo'>Start your career in digital marketing today with Wtechy Corporate Training Program and learn the skills you need to succeed! </p>
                  <Link className="dBtn btnPrimary mt-4 hasShadow" title='Contact us' onClick={scrollTop} to='/contact'>Contact Us</Link>
                </div>
                <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                  <Image className="ctaImage" src={contact} alt='Get In Touch' style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
      
    );
};

export default HomeSection4;