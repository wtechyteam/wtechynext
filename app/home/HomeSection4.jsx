'use client'
import Link from 'next/link';
import { scrollTop } from '../../common/utils'
import Image from 'next/image';
import contact from './../../public/assets/Images/homepage/contact.png';

const HomeSection4 = () => {
    return (
        <section className='sectionPadding'>
          <div className="container">
            <div className="ctaWrap">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">
                  <h4 className='section-title-sm'>Get In Touch</h4>
                  <h2 className='title-xl fw-bold'>Contact Us to Increase your Brand Visibility</h2>
                  <p className='sectionInfo'>We help you to see the world differently, discover opportunities you may never have imagined.</p>
                  <Link href='/contact' className="dBtn btnPrimary mt-4 hasShadow" onClick={scrollTop}>
                    Contact Us
                  </Link>
                </div>
                <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                  <Image className="ctaImage" src={contact} alt='Get In Touch' style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default HomeSection4;
