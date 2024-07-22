'use client'
import React from 'react'
import InnerBanner from './../../common/InnerBanner'
import { portfolioData } from './../data/portfolioData'
import Head from 'next/head'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <>
            <head>
                <title>Full-Stack Digital Marketing Agency: Scale Your Business</title>
                <meta title="Our Success Stories: WTechy's Digital Marketing Portfolio"/>
                <meta name="description" content="Explore proven digital marketing strategies! See our award-winning portfolio & how we provide performance marketing services to clients as per their needs." />
            </head>
            <InnerBanner
                title={'Portfolio'}
                info={"Check out WTechy's portfolio! Explore our best work to see how we can help you achieve your marketing goals by showcasing real marketing results for clients."}
            />
            <div className="portfolioWrapper">
                {portfolioData && portfolioData.map((item, index) => {
                    return (
                        <section className={`sectionPadding`} key={item.id}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2 className='title-xl fw-bold'>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <Image
                                            className='portfolio_img_1 mt-4 w-100'
                                            src={item.image1}
                                            alt='side-img'
                                            title='portfolio-1'
                                            width={600} // Replace with actual width
                                            height={400} // Replace with actual height
                                        />
                                    </div>
                                    <div className="col-md-6 mb-5 mb-md-0 text-center">
                                        <Image
                                            className='portfolio_img_1 mb-4 w-100'
                                            src={item.image2}
                                            alt='side-img'
                                            title='portfolio-2'
                                            width={600} // Replace with actual width
                                            height={400} // Replace with actual height
                                        />
                                        <Image
                                            className='portfolio_img_1 w-100'
                                            src={item.image3}
                                            alt='side-img'
                                            title='portfolio-3'
                                            width={600} // Replace with actual width
                                            height={400} // Replace with actual height
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </>
    );
};

export default Portfolio;
