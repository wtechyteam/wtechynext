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

const SeoForSquarespace = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const squarespaceServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive Site Audits",
      description:
        "We conduct in-depth audits to identify key areas for SEO improvement on your Squarespace site. ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Keyword Strategies ",
      description:
        "Our SEO services include tailored keyword research and implementation to drive targeted traffic. ",
    },
    {
      icon: serviceIcon1,
      title: "Content Optimization ",
      description:
        "We enhance your site’s content to ensure it is SEO-friendly and aligns with search engine guidelines. ",
    },
    {
      icon: serviceIcon2,
      title: "Technical SEO Enhancements ",
      description:
        "We optimize the technical aspects of your site, such as site speed and mobile responsiveness, to improve search engine rankings. ",
    },
    {
      icon: serviceIcon1,
      title: "Image Optimization ",
      description:
        "We ensure that all images on your Squarespace site are optimized with appropriate alt text and compression to improve load times and SEO. ",
    },
    {
      icon: serviceIcon2,
      title: "SEO-Friendly URL Structures",
      description:
        "We create clean, keyword-rich URLs that are easy for search engines to crawl and rank. ",
    },
    {
      icon: serviceIcon1,
      title: "Local SEO Services",
      description:
        "For businesses targeting local audiences, we implement local SEO strategies to increase visibility in your area.  ",
    },
    {
      icon: serviceIcon2,
      title: "Schema Markup Implementation",
      description:
        "We add structured data to your site to enhance search engine understanding and improve rich results in SERPs. ",
    },
    {
      icon: serviceIcon1,
      title: "Ongoing Monitoring and Reporting",
      description:
        " We provide regular reports and continuous monitoring to track your SEO progress and make necessary adjustments.",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Specialized SEO Strategies",
      description:
        "Tailored approaches to maximize your Squarespace site’s SEO potential. ",
    },
    {
      icon: serviceIcon2,
      title: "Thorough Site Audits ",
      description:
        "In-depth audits to identify and address SEO weaknesses. ",
    },
    {
      icon: serviceIcon1,
      title: "Content and Technical Optimization ",
      description:
        "Enhancing both content and technical aspects for improved rankings. ",
    },
    {
      icon: serviceIcon2,
      title: "Keyword-Driven Results",
      description:
        "Strategic keyword implementation to attract targeted traffic. ",
    },
    {
      icon: serviceIcon1,
      title: "Regular Performance Tracking ",
      description:
        "Continuous monitoring and reporting to keep your site competitive. ",
    },
    {
      icon: serviceIcon2,
      title: "Client-Centric Approach",
      description:
        "Focused on delivering results that align with your business objectives. ",
    },
  ];

  const faqData = [
    {
      question: "What is Squarespace SEO optimization?",
      answer:
        "Squarespace SEO optimization involves improving your Squarespace site’s visibility on search engines through targeted strategies. ",
    },
    {
      question:
        "Why should I use a Squarespace SEO company? ",
      answer:
        "A Squarespace SEO company like Wtechy has the expertise to optimize your site effectively, leading to better search engine rankings and more traffic.",
    },
    {
      question:
        "Can I optimize my Squarespace site for SEO by myself? ",
      answer:
        "While basic SEO can be managed on your own, professional Squarespace SEO services provide comprehensive optimization for better results. ",
    },
    {
      question: "How long does it take to see results from Squarespace SEO? ",
      answer:
        "Results can vary, but most businesses see improvements within a few months of consistent SEO efforts. ",
    },
    {
      question: " What makes Wtechy’s Squarespace SEO services different?  ",
      answer:
        "We offer specialized SEO services tailored to the unique features of Squarespace, ensuring better performance and rankings. ",
    },
    {
      question: "Is Squarespace good for SEO?  ",
      answer:
        "Yes, Squarespace can be optimized for SEO, and with the right strategies, it can perform well in search engine rankings.",
    },
  ];

  return (
    <div>
      <head>
        <title>Professional Squarespace SEO Services Company | Wtechy</title>
        <meta title="Professional Squarespace SEO Services Company | Wtechy" />
        <meta name="description" content="Looking for professional Squarespace SEO services? Wtechy has the expertise to optimize your website and elevate your online presence for greater success!" />
      </head>
      <InnerBanner
        title={"SEO for Squarespace"}
        info={
          "Improve Your Squarespace Website’s Search Engine Performance"
        }
      />
      <ImageInfoWrap
        title={
          "Why Our targeted approach is better than most digital marketing companies "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s Squarespace SEO services offer a targeted strategy designed specifically for the Squarespace platform. Many digital marketing companies use one-size-fits-all approaches, but we focus on the unique aspects of Squarespace to maximize your site’s performance. Our Squarespace SEO company utilizes advanced techniques such as optimizing site structure, improving page load times, and implementing effective keyword strategies. These tactics help your site achieve better visibility on search engines, resulting in more traffic and higher conversion rates.</p>"
        }
      />
      <FullWidthCTASection
        title={"Optimize Your Squarespace Site Today "}
      />

      <ImageInfoWrap
        title={"This is how we help you get better results"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Choosing Wtechy for your Squarespace SEO needs means you’re selecting a service that understands the intricacies of the platform. Our Squarespace SEO optimization services include thorough keyword research, content optimization, and technical enhancements to improve your site’s ranking. This approach not only helps your site rank higher on search engines but also ensures a better user experience. The result is a significant increase in organic traffic, leading to more inquiries, sales, and overall business growth.</p>"
        }
      />
      <FullWidthCTASection
        title={"Achieve Higher Rankings with Our SEO Services "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Our SEO for Squarespace services is designed to deliver measurable results. By working with us, you’ll receive a comprehensive audit of your site, ongoing optimization, and regular performance reports. These services ensure that your site remains competitive in search engine rankings while offering an improved experience for your visitors. Our SEO services also include regular updates to align with the latest SEO trends and search engine algorithm changes, ensuring your site remains optimized over time. </p>"
            }
            title={"Boost Your Squarespace Visibility with Our Proven Strategies  "}
            smallTitle={"Partner with a Squarespace SEO Company That Understands Your Needs"}
            showContactBtn={true}
          />
        </div>
      </section>

      <FullWidthCTASection
        title={"Begin Your SEO Journey with us Today "}
      />

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {squarespaceServicesData.map((service, index) => (
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
        title={"Get Expert SEO Services Today "}
      />

      <ImageInfoWrap
        title={"How We Can Boost Your Squarespace Site's Speed and SEO"}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Our SEO services focus on both on-page and off-page optimization to boost your site’s visibility and performance. From keyword research to content and technical enhancements, every aspect of your site is optimized to meet search engine standards. The result is an increase in organic traffic, improved user experience, and higher conversion rates. By choosing u, you ensure that your Squarespace site is fully optimized and ready to compete in the digital landscape. </p>"
        }
      />
      <FullWidthCTASection title={"Contact Us for Customized SEO Solutions"} />

      <ImageInfoWrap
        title={
          "Experience Your Online Success with our SEO Services"
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>We deliver top-tier Squarespace SEO services that are tailored to your business needs. Our approach is methodical, focusing on both the technical and content-related aspects of SEO to ensure your site ranks well and provides a superior user experience. We understand the unique features of Squarespace and use this knowledge to optimize your site effectively. Trust us to help you achieve your online business goals with expert SEO services. </p>"
        }
      />
      <FullWidthCTASection
        title={"Get Started with Expert SEO Solutions"}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Seo with squarespace"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for SEO for Squarespace "}
            title={"Wtechy: Your Partner in SEO Success "}
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

export default SeoForSquarespace;
