'use client';
import React from 'react';
import InnerBanner from './../../common/InnerBanner';
import SectionTopInfo from './../../common/SectionTopInfo';
import Link from 'next/link';
import { scrollTop } from './../../common/utils'
import { FiChevronsRight } from 'react-icons/fi';
import { serviceData } from '../data/serviceCardData';
import { Helmet } from 'react-helmet';
import Image from 'next/image';

const Services = () => {
    return (
        <div>
            <Helmet>
                <meta name="title" content="Digital Marketing Services: Grow Your Business Online" />
                <meta name="description" content="Boost your online presence with our comprehensive digital marketing services. Drive success through tailored performance marketing & media strategies. Hire Us!" />
            </Helmet>
            <InnerBanner
                title={"Services"}
                info={'Explore our comprehensive range of services tailored to meet your digital needs. From SEO strategies to web development solutions, we deliver results that drive growth and success for your business.'}
            />
            <section className="sectionPadding">
                <div className="container">
                    <SectionTopInfo
                        smallTitle={'Our Services'}
                        title={'Services We Offer'}
                        text={"Boost your online presence with Wtechy! Control search engines, engage on social media, and maximize ad campaigns. From store management to content marketing, let's grow your business with expert tech solutions."}
                    />
                    <div className="row mt-5 justify-content-center">
                        {serviceData.map((service, index) => (
                            <div className='col-lg-4 col-md-6 mb-4 ' key={index} >
                                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow h-100">
                                    <div className="cardIcon cardIcon-Type1">
                                        <Image src={service.icon} alt={service.title} />
                                    </div>
                                    <div className="cardInfo">
                                        <h2 className="cardTitle title-md fw-bold text-capitalize">{service.title}</h2>
                                        <p className='cardDescription text-sm mb-4'>{service.description}</p>
                                        <Link href={`/service/${service.slug}`} legacyBehavior>
                                            <a className='dBtn btnText' onClick={scrollTop}>Read More<FiChevronsRight /></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
