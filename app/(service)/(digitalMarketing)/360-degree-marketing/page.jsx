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

const DegreeMarketing = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const degreeMarketingServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive Marketing Analysis ",
      description:
        "Receive a thorough assessment of your current marketing efforts, identifying strengths and areas for improvement.",
    },
    {
      icon: serviceIcon2,
      title: "Tailored Strategy Development ",
      description:
        "Get a customized 360-degree marketing strategy designed specifically for your business goals. ",
    },
    {
      icon: serviceIcon1,
      title: "Multi-Channel Integration",
      description:
        "Experience the power of a cohesive marketing plan that seamlessly integrates multiple digital channels. ",
    },
    {
      icon: serviceIcon2,
      title: "Data-Driven Insights ",
      description:
        "Benefit from detailed analytics that provide actionable insights to enhance your marketing performance. ",
    },
    {
      icon: serviceIcon1,
      title: "Creative Content Creation ",
      description:
        "Engage your audience with compelling content that resonates across all platforms. ",
    },
    {
      icon: serviceIcon2,
      title: "SEO Optimization ",
      description:
        "Improve your online visibility with a well-rounded SEO strategy that covers all bases.  ",
    },
    {
      icon: serviceIcon1,
      title: "Social Media Management ",
      description:
        "Boost your brand's presence on social media with targeted campaigns that drive engagement.",
    },
    {
      icon: serviceIcon2,
      title: "Email Marketing ",
      description:
        "Keep your audience informed and engaged with personalized email marketing campaigns. ",
    },
    {
      icon: serviceIcon1,
      title: "Performance Tracking and Optimization ",
      description:
        "Continuously monitor and refine your marketing efforts for sustained growth and success. ",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Expertise in Integrated Marketing",
      description:
        "Leverage our deep knowledge and experience in creating cohesive marketing strategies that deliver results. ",
    },
    {
      icon: serviceIcon2,
      title: "Tailored Solutions for Every Business ",
      description:
        "We understand that every business is unique, so we offer customized strategies that align with your specific goals. ",
    },
    {
      icon: serviceIcon1,
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead of the curve with our use of the latest tools and technologies in the digital marketing landscape.",
    },
    {
      icon: serviceIcon2,
      title: "Comprehensive Service Offerings ",
      description:
        "From SEO to content creation, we provide a full spectrum of services under one roof.",
    },
    {
      icon: serviceIcon1,
      title: "Data-Driven Decision Making",
      description:
        "Our strategies are backed by detailed analytics, ensuring that every decision is informed and effective.",
    },
    {
      icon: serviceIcon2,
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We focus on building long-term relationships through consistent communication and reliable results. ",
    },
  ];

  const faqData = [
    {
      question: "What is 360-degree marketing?",
      answer:
        "It is an integrated approach that covers all aspects of marketing, ensuring consistent messaging across all channels.",
    },
    {
      question:
        "Why choose a 360-degree digital marketing company?",
      answer:
        "It provides a comprehensive strategy that enhances brand visibility, engagement, and customer retention. ",
    },
    {
      question:
        "How does 360-degree marketing differ from traditional marketing?",
      answer:
        "Unlike traditional marketing, it focuses on creating a unified customer experience across all digital touchpoints.  ",
    },
    {
      question: "Can this marketing be customized for small businesses? ",
      answer:
        "Yes, it can be tailored to fit the unique needs and budgets of small businesses. ",
    },
    {
      question: "How do you measure the success of a marketing campaign?",
      answer:
        "Success is measured through various KPIs, including engagement rates, conversion rates, and overall ROI, using data-driven analytics.",
    },
    {
      question: "What channels are included in a 360-degree marketing strategy? ",
      answer:
        "This marketing strategy typically includes SEO, social media, email marketing, content marketing, and more. ",
    },
  ];

  return (
    <div>
      <head>
        <title>360-Degree Marketing  </title>
        <meta title="360-Degree Marketing " />
        <meta name="description" content="" />
      </head>
      <InnerBanner
        title={"360-Degree Marketing "}
        info={
          "Elevate Your Business with Comprehensive Marketing Solutions"
        }
      />
      <ImageInfoWrap
        title={
          "How Our Approach is Better Than Most Digital Marketing Companies "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>The landscape of digital marketing is vast, but not all strategies are created equally. A 360-degree marketing approach, unlike traditional methods, provides a holistic view that covers every touchpoint of a customer's journey. This method doesn't just focus on a single channel; instead, it integrates multiple channels to create a seamless and cohesive customer experience. A 360-degree digital marketing company like Wtechy ensures that every interaction a customer has with your brand is consistent, relevant, and engaging. By leveraging a variety of platforms—social media, email marketing, SEO, content marketing, and more—this approach maximizes your brand's visibility and impact, making sure no potential customer slips through the cracks. </p>"
        }
      />
      <FullWidthCTASection
        title={"Discover the Power of Comprehensive Marketing "}
      />

      <ImageInfoWrap
        title={"How Our Work Will Help You Get Better Results "}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Wtechy's marketing strategy is designed to deliver measurable results. By analyzing your brand's current position and understanding your target audience's behavior, we craft tailored campaigns that resonate with your customers. The integration of data-driven insights with creative strategies ensures that your marketing efforts are not only seen but also remembered. This holistic approach doesn't just aim for short-term gains; it focuses on building long-term relationships with your customers, driving sustained growth for your business.</p>"
        }
      />
      <FullWidthCTASection
        title={"Achieve Consistent Growth with Our Strategy "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>When you partner with a marketing company like Wtechy, you're not just getting a service provider; you're gaining a strategic partner committed to your success. Our approach covers every aspect of your marketing needs, ensuring that your brand remains top-of-mind for your target audience. From initial consultation to campaign execution and beyond, our team is dedicated to delivering results that exceed expectations. You'll benefit from a comprehensive strategy that unifies all marketing efforts under one roof, making it easier to track, analyze, and optimize your campaigns. </p>"
            }
            title={"What You'll Get with Our Collaboration "}
            smallTitle={"Ready to collaborate with a 360-degree digital marketing company? "}
            showContactBtn={true}
          />
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {degreeMarketingServicesData.map((service, index) => (
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
        title={"Partner with Experts Today "}
      />

      <ImageInfoWrap
        title={"Enhancements You'll Get While Working with Us"}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Working with a 360-degree digital marketing company like Wtechy brings a multitude of enhancements to your marketing strategy. You'll experience a more streamlined approach where every campaign is aligned with your overall business objectives. This alignment not only boosts efficiency but also improves the effectiveness of your marketing efforts. With Wtechy, you can expect a significant increase in brand recognition, customer engagement, and conversion rates, all while maintaining a consistent brand voice across all channels. </p>"
        }
      />
      <FullWidthCTASection title={"Elevate Your Marketing Game "} />

      <ImageInfoWrap
        title={
          "Experience the Difference: Our Superior Service Quality "
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Wtechy prides itself on delivering high-quality service that goes beyond mere execution. Our team of experts is constantly evolving with the latest trends and technologies in 360-degree marketing, ensuring that your business stays ahead of the competition. We focus on creating value at every step, from the initial strategy development to the final campaign analysis. Our commitment to excellence is evident in the results we deliver—measurable, impactful, and tailored to your unique needs.</p>"
        }
      />
      <FullWidthCTASection
        title={"Experience Quality Like Never Before "}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            // title={"FAQs About Web App Development"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for 360-Degree Marketing "}
            // title={"Wtechy and Web App Development"}
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

export default DegreeMarketing;
