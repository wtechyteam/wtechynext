'use client'
import serviceIcon1 from './../../public/assets/Images/homepage/Digitalmarketing.svg';
import serviceIcon2 from './../../public/assets/Images/homepage/MarketingStrategies.svg';
import serviceIcon3 from './../../public/assets/Images/homepage/StrongRelations.svg';
import serviceIcon4 from './../../public/assets/Images/homepage/SustainandGrow.svg';
import Image from 'next/image';

const HomeSection3 = () => {
  const serviceData = [
    {
      icon: serviceIcon1,
      title: 'Digital Marketing',
      description: 'Digital channels allow businesses to expand their reach and connect with their potential customers worldwide...'
    },
    {
      icon: serviceIcon2,
      title: 'Marketing Strategies',
      description: 'By utilizing many prominent digital marketing strategies like Email Marketing, SEO, Content Marketing...'
    },
    {
      icon: serviceIcon3,
      title: 'Strong Relations',
      description: 'While many businesses face several challenges in this competitive online marketplace...'
    },
    {
      icon: serviceIcon4,
      title: 'Sustain and Grow',
      description: 'It’s almost impossible to sustain and grow a business without going digital...'
    },
  ];

  return (
    <section className='sectionPadding bg-gray'>
      <div className="container text-center">
        <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
          <h4 className='section-title-sm'>Big Results</h4>
          <h2 className='title-xl fw-bold'>Focusing on Delivering Big Results<br />with Customized Digital Marketing Strategies</h2>
          <p className='sectionInfo'>Our customized digital marketing strategies are designed to deliver significant results, making sure your business stands out...</p>
        </div>
        <div className='listWrapper fetchers mt-5'>
          {serviceData.map((service, index) => (
            <div className='innerWrap cardType1 text-start' key={index} data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
              <div className="icon cardIcon-Type1">
                <Image src={service.icon} alt={service.title} />
              </div>
              <h2 className="title-md fw-bold text-black">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
