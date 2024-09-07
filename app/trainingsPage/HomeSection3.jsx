'use client'
import { BrowserRouter } from 'react-router-dom'
import serviceIcon1 from './../../public/assets/Images/homepage/Digitalmarketing.svg'
import serviceIcon2 from './../../public/assets/Images/homepage/MarketingStrategies.svg'
import serviceIcon3 from './../../public/assets/Images/homepage/StrongRelations.svg'
import serviceIcon4 from './../../public/assets/Images/homepage/SustainandGrow.svg'
import {useMounted} from "./../../common/unmounted"
import Image from 'next/image'

const HomeSection3 = () => {

    const mounted = useMounted();
    if(!mounted) return null;

    const serviceData = [
        {
            icon: serviceIcon1,
            title: 'Future-Ready Skills',
            description: 'Our courses help you gain important skills that will keep you ahead in the digital world.  '
        },
        {
            icon: serviceIcon2,
            title: 'Career Advancement ',
            description: 'Our digital marketing certification can help you get promotions, new job opportunities, or grow your own business.'
        },
        {
            icon: serviceIcon3,
            title: 'Practical Experience ',
            description: 'You will learn skills you can use right away, like creating ads, optimizing websites, and managing social media. '
        },
        {
            icon: serviceIcon4,
            title: 'Flexible Learning',
            description: 'Our program is designed to fit your schedule. You can choose from online or in-person classes, depending on what works best for you. '
        },
        // Add more service sections as needed
    ];

    return (
        <BrowserRouter>
        <section className='sectionPadding bg-gray'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    
                    <h2 className='title-xl fw-bold'>Benefits of Our Corporate Training Program</h2>
                   
                </div>
                <div className='listWrapper fetchers mt-5'>
                    {serviceData.map((service, index) => (
                        <div className='innerWrap cardType1 text-start' key={index} data-aos="fade-up"  data-aos-delay="600" data-aos-duration="1500">
                            <div className="icon cardIcon-Type1">
                                <Image src={service.icon} alt={service.title} />
                            </div>
                            <h2 className="title-md fw-bold text-black">{service.title}</h2>
                            <p className=''>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </BrowserRouter>
    );
};

export default HomeSection3;