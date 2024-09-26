"use client";
import InnerBanner from "./../../../../common/InnerBanner";
import ImageInfoWrap from "./../../../../common/ImageInfoWrap";
import section1Image from "./../../../../public/assets/Images/services/SEO.webp";
import section2Image from "./../../../../public/assets/Images/services/what-we-do-service.png";
import serviceIcon1 from './../../../../public/assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../public/assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from "./../../../../common/SectionTopInfo";
import FullWidthCTASection from "./../../../../common/FullWidthCTASection";
import FAQs from "./../../../../common/FAQs";
import Image from "next/image";

const SeoForShopify = () => {

  const shopifyData = [
    {
      icon: serviceIcon1,
      title: 'Keyword Research',
      description: 'Identifying the most relevant and high-traffic keywords for your Shopify store. Our team uses advanced tools to discover keywords that will drive the most traffic to your site. '
    },
    {
      icon: serviceIcon2,
      title: 'On-Page Optimization',
      description: 'Enhancing your store’s pages to rank higher in search engine results. We optimize product descriptions, meta tags, and URLs to ensure maximum visibility. '
    },
    {
      icon: serviceIcon1,
      title: 'Technical SEO',
      description: 'Fixing any technical issues that may hinder your store’s performance. From site speed to mobile responsiveness, we ensure your store meets all technical SEO standards. '
    },
    {
      icon: serviceIcon2,
      title: 'Content Strategy',
      description: 'Developing a content plan that aligns with your SEO goals. Our content experts create blog posts, product descriptions, and landing pages that attract and engage users.'
    },
    {
      icon: serviceIcon1,
      title: 'Link Building',
      description: 'Building high-quality backlinks to improve your store’s domain authority. We use ethical link-building strategies to boost your site’s credibility and ranking. '
    },
    {
      icon: serviceIcon2,
      title: 'Analytics and Reporting',
      description: 'Monitoring your store’s performance with detailed reports. We provide regular updates on your SEO progress and adjust strategies as needed.'
    },
    {
      icon: serviceIcon2,
      title: 'Local SEO',
      description: 'Optimizing your store for local search results. We ensure your Shopify store is easily discoverable by local customers. '
    },
    {
      icon: serviceIcon2,
      title: 'Conversion Rate Optimization',
      description: 'Turning visitors into customers with targeted strategies. Our experts analyze user behavior to improve your store’s conversion rates'
    },
    {
      icon: serviceIcon2,
      title: 'Ongoing Support',
      description: 'Continuous SEO improvements to keep your store competitive. We provide long-term support to ensure your Shopify store remains at the top of search results. '
    },
    

  ];
    const faqData = [
      {
        question: "What is SEO for Shopify?",
        answer:
          "SEO for Shopify involves optimizing your online store to rank higher in search engine results, increasing visibility and driving more traffic.",
      },
      {
        question: "Why should I invest in Shopify SEO Services? ",
        answer:
          "It helps your store stand out in a competitive market, attracting more visitors and converting them into customers.",
      },
      {
        question: "What makes Wtechy different from other Shopify SEO agencies? ",
        answer:
          "<p>To create a website on WordPress, you need first to design a custom theme, which will take 1 or 2 weeks. The next step involves the development of the website, which might take 3 to 4 weeks to code, and the last step requires content, which includes the creation of content adding images that will undoubtedly lead up to 2 weeks.</p><p>The time entirely depends upon the project’s demand, and it will consume from 10 to 12 weeks to develop a website on WordPress.</p>",
      },
      {
        question: "How long does it take to see results from Shopify SEO Optimization? ",
        answer:
          "While results vary, most stores begin to see improvements in their search rankings within 3 to 6 months. ",
      },
      {
        question: "Can Wtechy help with both on-page and technical SEO for Shopify?  ",
        answer:
          "Yes, we offer comprehensive SEO services that include both on-page and technical optimizations. ",
      },
      {
        question: "How do I get started with Shopify SEO Services?",
        answer:
          "Contact us today to discuss your needs and get a tailored SEO plan for your Shopify store",
      },
      // Add more FAQ items as needed
    ];
  return (
    <div>
      <head>
        <title>Shopify SEO Optimization for Better Traffic | Wtechy</title>
        <meta title="Shopify SEO Optimization for Better Traffic | Wtechy"/>
        <meta
          name="description"
          content="Looking to improve your online presence? Our Shopify SEO optimization services are tailored to increase traffic and elevate your brand visibility."/>
      </head>
      <InnerBanner
        title={"SEO for Shopify "}
        info={
          "Grow Your Shopify Store’s Traffic and Sales with Our Simple and Effective SEO Strategies "
        }
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={"What Sets Us Apart in Shopify SEO "}
        imageUrl={section1Image}
        description={
          "<p>Many digital marketing firms offer generalized SEO services, but at Wtechy, we specialize in Shopify SEO optimization tailored to the unique needs of Shopify stores. Our approach begins with an in-depth analysis of your store’s structure, product pages, and target audience. This allows us to identify and implement specific strategies that boost organic traffic and improve conversion rates. Unlike traditional SEO agencies, we understand the nuances of Shopify's platform, ensuring that every aspect of your online store is optimized for search engines. </p>"
        }
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection title={"Discover the difference with us "} />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={"bg-gray"}
        title={"How We Can Improve Your Shopify Rankings"}
        imageUrl={section2Image}
        description={
          "<p>Our Shopify SEO agency is designed to enhance your store's visibility on search engines, driving more qualified traffic to your site. We use proven techniques such as keyword optimization, content strategy, and technical SEO improvements to ensure that your store ranks higher for relevant search terms. By focusing on Shopify-specific optimizations, we help your store stand out in a crowded market, ultimately leading to increased sales and customer loyalty. </p>"
        }
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={
          "Achieve top rankings with our expertise. "
        }
      />

      {/* <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Partnering with Wtechy means gaining access to a team of experts dedicated to improving every aspect of your Shopify store’s SEO. Our services include comprehensive keyword research, on-page optimization, and ongoing performance monitoring to ensure sustained growth. With our specialized knowledge, you can expect a noticeable improvement in your store’s search engine rankings and overall online presence.Research: Identifying the most relevant and high-traffic keywords for your Shopify store.</p>" 
                       }
            title={"What you'll get with our Shopify SEO Company "}
            smallTitle={"Ready to collaborate on your Shopify SEO journey?"}
            showContactBtn={true}
          />
        </div>
      </section> */}

      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            smallTitle={"Ready to collaborate on your Shopify SEO journey?"}
            isFullWidth={true}
            title={"What you'll get with our Shopify SEO Company"}
            text={"Partnering with Wtechy means gaining access to a team of experts dedicated to improving every aspect of your Shopify store’s SEO. Our services include comprehensive keyword research, on-page optimization, and ongoing performance monitoring to ensure sustained growth. With our specialized knowledge, you can expect a noticeable improvement in your store’s search engine rankings and overall online presence. "}
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {shopifyData.map((service, index) => (
              <div className='col-lg-6 col-md-6 px-0 ' key={index} >
                <div className="cardWrap cardType1 h-100 ">
                  <div className="cardIcon cardIcon-Type1">
                    <Image src={service.icon} alt={service.title} />
                  </div>
                  <div className="cardInfo">
                    <h2 className="cardTitle title-md fw-bold">{service.title}</h2>
                    <p className='cardDescription text-sm mb-0'>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ImageInfoWrap
        isReverse={true}
        title={"Innovative WordPress Website Development for Businesses"}
        imageUrl={section1Image}
        description={
          "<p>When the users get the desired information on the website, they intend to stick to the landing page, which becomes crucial for the business owners to create a website that will give eloquent information, be user-friendly, and be flexible.</p><p>WordPress is one of the most popular website development platforms, and it has managed to present the users with a dynamic, swift, supple, easy-to-use website, which directly helps to adhere to the visitors’ attention. It is user-friendly for the visitors and the business owners, as without any support from the development team, they can maintain their website on their own.</p><p>WordPress is an exceptional web development podium to manage websites of any size and kind with substantial assistance and a dynamic platform. Having a business website makes it supple for any company to accomplish its business objectives, which is why our WordPress development services are adapted to the precise requirements. For that reason, we make sure to create a unique website that connects with your customers and generates conversions.</p><p>Our developers construct a contemporary and eye-catching website that imitates your product and its significance. In addition to this, we make sure to offer you an informed website that will catch the attention of your potential spectators and will aid in engendering the leads.</p>"
        }
      /> */}
      {/* ======New Section Start ====== */}
      {/* ======New Section Start ====== */}
      
      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs for SEO for Shopify"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  );
};

export default SeoForShopify;
