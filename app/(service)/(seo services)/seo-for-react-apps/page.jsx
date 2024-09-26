"use client";
import React from "react";
import InnerBanner from "../../../../common/InnerBanner";
import ImageInfoWrap from "../../../../common/ImageInfoWrap";
import section1Image from "./../../../../public/assets/Images/services/customDev.jpeg";
import section2Image from "./../../../../public/assets/Images/services/customDev2.jpeg";
import section3Image from "./../../../../public/assets/Images/services/customDev3.jpeg";
import section4Image from "./../../../../public/assets/Images/services/customDev4.png";

import serviceIcon1 from "./../../../../public/assets/Images/homepage/digitalMarketing.png";
import serviceIcon2 from "./../../../../public/assets/Images/homepage/MarketingStrategies.png";

import SectionTopInfo from "../../../../common/SectionTopInfo";
import FullWidthCTASection from "../../../../common/FullWidthCTASection";
import FAQs from "../../../../common/FAQs";
import Image from "next/image";
import { useMounted } from "../../../../common/unmounted";

const SeoForReactApps = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const reactServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive Site Audits ",
      description:
        "We conduct detailed audits to identify key areas for SEO improvement in your React app. ",
    },
    {
      icon: serviceIcon2,
      title: "Server-Side Rendering Optimization ",
      description:
        "We optimize your app’s server-side rendering to ensure it is fully indexed by search engines.  ",
    },
    {
      icon: serviceIcon1,
      title: "JavaScript Management ",
      description:
        "We implement strategies to manage and optimize JavaScript execution for better SEO performance. ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Keyword Strategies ",
      description:
        "We perform in-depth keyword research tailored to your target audience to drive relevant traffic. ",
    },
    {
      icon: serviceIcon1,
      title: "Content Optimization ",
      description:
        "Our team optimizes your content to ensure it is both user-friendly and search engine optimized. ",
    },
    {
      icon: serviceIcon2,
      title: "Technical SEO Enhancements ",
      description:
        "We focus on improving the technical aspects of your React app, including load times and mobile responsiveness. ",
    },
    {
      icon: serviceIcon1,
      title: "Schema Markup Implementation ",
      description:
        "We add structured data to improve how your app’s content is presented in search results. ",
    },
    {
      icon: serviceIcon2,
      title: "Local SEO Optimization ",
      description:
        "For businesses targeting specific regions, we implement local SEO strategies to increase visibility in local searches. ",
    },
    {
      icon: serviceIcon1,
      title: "Ongoing Monitoring and Reporting",
      description:
        "We provide continuous monitoring and detailed reporting to track your SEO progress and make necessary adjustments. ",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Expert SEO Strategies",
      description:
        "Tailored SEO strategies designed specifically for React.js applications.  ",
    },
    {
      icon: serviceIcon2,
      title: "Detailed Site Audits",
      description:
        "Comprehensive audits to identify and address SEO challenges. ",
    },
    {
      icon: serviceIcon1,
      title: "Technical and Content Optimization ",
      description:
        "Enhancing both the technical and content aspects of your React app for better rankings.  ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Keyword Implementation",
      description:
        "Strategic keyword research and implementation to attract relevant traffic. ",
    },
    {
      icon: serviceIcon1,
      title: "Regular Performance Tracking  ",
      description:
        "Ongoing monitoring and detailed reporting to keep your site competitive.",
    },
    {
      icon: serviceIcon2,
      title: "Client-Centered Approach  ",
      description:
        "Focused on delivering results that align with your specific business goals. ",
    },
  ];

  const faqData = [
    {
      question: "What is React.js SEO optimization? ",
      answer:
        "React.js SEO optimization involves improving the visibility of your React app on search engines through targeted strategies. ",
    },
    {
      question:
        "Why should I choose a React.js SEO company? ",
      answer:
        "A specialized React.js SEO company understands the unique challenges of optimizing React apps and can deliver better results. ",
    },
    {
      question:
        "Can I optimize my React app for SEO by myself?  ",
      answer:
        "While basic SEO can be managed on your own, professional React.js SEO services provide comprehensive optimization for better performance.  ",
    },
    {
      question: "How long does it take to see results from React.js SEO? ",
      answer:
        "Results vary, but most businesses see improvements within a few months of consistent optimization efforts. ",
    },
    {
      question: "What makes Wtechy’s SEO services different? ",
      answer:
        "It offers a targeted approach to React.js SEO, ensuring both technical and content optimization for superior results. ",
    },
    {
      question: "Is React.js good for SEO?  ",
      answer:
        "React.js can be challenging for SEO due to its reliance on JavaScript, but with the right optimization techniques, it can perform well in search engine rankings. ",
    },
  ];

  return (
    <div>
      <head>
        <title>Leading React JS SEO Specialists | Wtechy</title>
        <meta title="Leading React JS SEO Specialists | Wtechy" />
        <meta name="description" content="Optimize your website for success with our leading React JS SEO specialists. Partner with Wtechy to enhance your visibility and engagement!" />
      </head>
      <InnerBanner
        title={"SEO for React Apps "}
        info={
          "Mastering SEO Techniques for React Apps: Improve Visibility and Ranking on Search Engines "
        }
      />
      <ImageInfoWrap
        title={
          "Why our SEO service is better than most digital marketing agencies  "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s SEO for React apps is designed to address the specific challenges that come with optimizing single-page applications (SPAs). Many digital marketing companies use general SEO techniques that do not fully leverage the potential of React. At Wtechy, our React.js SEO approach focuses on optimizing your React apps by improving server-side rendering, managing JavaScript execution, and ensuring proper indexing by search engines. By using these targeted strategies, we help your React app rank better, load faster, and provide a seamless user experience, all of which are crucial for retaining visitors and converting them into customers. </p>"
        }
      />
      <FullWidthCTASection
        title={"Achieve Superior SEO Results with us "}
      />

      <ImageInfoWrap
        title={"Our unique strategies to help you get better results"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Choosing Wtechy for your React.js SEO needs means gaining a partner that understands the unique requirements of React applications. Our SEO services include optimizing the content structure, improving site speed, and ensuring that search engines can effectively crawl and index your site. We focus on delivering technical SEO enhancements that directly impact your app's performance on search engines. The outcome is a noticeable increase in organic traffic, better user engagement, and higher conversion rates. Our approach ensures that your React app not only meets but exceeds modern SEO standards. </p>"
        }
      />
      <FullWidthCTASection
        title={"Boost Your React App's Performance Today "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>By partnering with us, you get access to specialized React.js SEO services tailored to the specific needs of your application. We conduct comprehensive audits, keyword research, and implement advanced optimization techniques that ensure your app performs well on search engines. Our collaboration focuses on creating a robust SEO strategy that aligns with your business goals, delivering better rankings, increased traffic, and superior user experience. Our commitment to ongoing optimization and performance monitoring ensures that your app remains competitive and continues to drive results.</p>"
            }
            title={"What you'll get with our partnership"}
            smallTitle={"Collaborate with a React.js SEO Expert "}
            showContactBtn={true}
          />
        </div>
      </section>

      <FullWidthCTASection
        title={"Get Started with a Tailored SEO Plan  "}
      />

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {reactServicesData.map((service, index) => (
              <div className="col-lg-6 col-md-6 px-0 " key={index}>
                <div className="cardWrap cardType1 h-100 ">
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

      <FullWidthCTASection
        title={"Improve Your React App's SEO Today"}
      />

      <ImageInfoWrap
        title={"Enhance Your React App with our SEO Services "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Our SEO for React apps covers both technical and content optimization to ensure your app is fully optimized for search engines. We focus on improving the app’s speed, structure, and overall user experience, which directly impacts its ranking on search engines. With our SEO services, you get a comprehensive approach that ensures your React app not only performs well but also delivers the best possible experience for your users, leading to higher engagement and conversion rates.  </p>"
        }
      />
      <FullWidthCTASection title={"Contact Us for Expert SEO Services "} />

      <ImageInfoWrap
        title={
          "Give New Heights to Your Online Presence with our React.js SEO Services"
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Our React.js SEO services are designed to help your app reach its full potential. Our approach combines technical expertise with a deep understanding of SEO best practices to deliver results that matter. Whether you need to improve your app’s performance, increase traffic, or enhance user experience, we have the skills and experience to help you achieve your goals. Trust us to provide SEO services that will elevate your React app’s visibility and success.</p>"
        }
      />
      <FullWidthCTASection
        title={"Start Your SEO Success Journey Today "}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Seo with react apps"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for SEO for React Apps  "}
            title={"Wtechy: Your Trusted Partner in SEO Success  "}
          />
          <div className="row mt-5 justify-content-center">
            {whyChoose.map((item, index) => (
              <div className="col-lg-4 col-md-4 mb-4 " key={index}>
                <div className="cardWrap my-3 px-2 text-center">
                  <div className="cardIcon cardIcon-Type2">
                    <Image src={item.icon} alt={item.title} />
                  </div>
                  <div className="cardInfo">
                    <h2 className="cardTitle title-md fw-bold">{item.title}</h2>
                    <p className="cardDescription text-sm mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoForReactApps;
