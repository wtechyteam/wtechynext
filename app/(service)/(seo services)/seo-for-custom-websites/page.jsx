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

const SeoForCustomWebsites = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const customWebsitesServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive Site Audits ",
      description:
        "Detailed audits to identify key SEO issues and opportunities for your custom website.  ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Keyword Strategies",
      description:
        "Tailored keyword research and implementation to drive relevant traffic to your site. ",
    },
    {
      icon: serviceIcon1,
      title: "Technical SEO Enhancements",
      description:
        "Improving your site’s code, structure, and performance to boost search engine rankings. ",
    },
    {
      icon: serviceIcon2,
      title: "Content Optimization",
      description:
        "Enhancing your website’s content to make it more search engine friendly and engaging for users. ",
    },
    {
      icon: serviceIcon1,
      title: "Mobile and Speed Optimization",
      description:
        "Ensuring your custom website loads quickly and functions well on mobile devices, crucial for SEO. ",
    },
    {
      icon: serviceIcon2,
      title: "Schema Markup Implementation",
      description:
        "Adding structured data to help search engines understand your content better and improve SERP features. ",
    },
    {
      icon: serviceIcon1,
      title: "On-Page SEO Optimization",
      description:
        "Optimizing meta tags, headers, and content to ensure each page is fully optimized for search engines. ",
    },
    {
      icon: serviceIcon2,
      title: "Local SEO Strategies",
      description:
        "For businesses targeting specific regions, we implement local SEO techniques to increase visibility in local search results. ",
    },
    {
      icon: serviceIcon1,
      title: "Ongoing Monitoring and Reporting",
      description:
        "Continuous tracking of your site’s SEO performance with regular reports and adjustments as needed. ",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Tailored SEO Strategies",
      description:
        "Customized SEO plans designed specifically for your custom website. ",
    },
    {
      icon: serviceIcon2,
      title: "Detailed Site Audits",
      description:
        "In-depth audits to identify and resolve SEO challenges unique to custom sites.",
    },
    {
      icon: serviceIcon1,
      title: "Technical and Content Optimization ",
      description:
        "Enhancing both the technical and content aspects of your custom website for better rankings.  ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Keyword Implementation",
      description:
        "Strategic keyword research and implementation to attract relevant traffic. ",
    },
    {
      icon: serviceIcon1,
      title: "Continuous Monitoring",
      description:
        "Regular performance tracking and adjustments to keep your site competitive.",
    },
    {
      icon: serviceIcon2,
      title: "Client-Focused Approach",
      description:
        "Dedicated to delivering results that align with your business goals.",
    },
  ];

  const faqData = [
    {
      question: "What is SEO for custom websites? ",
      answer:
        "It involves optimizing a custom-built website to improve its visibility on search engines through tailored strategies. ",
    },
    {
      question:
        "Why should I choose a custom website SEO company?",
      answer:
        "A custom website SEO company understands the unique challenges of optimizing custom sites and can deliver better results.",
    },
    {
      question:
        "Can I optimize my custom website for SEO by myself?",
      answer:
        "While basic SEO can be managed on your own, professional SEO services for custom websites provide comprehensive optimization for better performance.",
    },
    {
      question: "How long does it take to see results from custom website SEO?",
      answer:
        "Results vary, but most businesses see improvements within a few months of consistent optimization efforts.",
    },
    {
      question: "What makes Wtechy’s SEO services different?",
      answer:
        "We offer a targeted approach to SEO ensuring both technical and content optimization for superior results. ",
    },
    {
      question: "Is SEO for custom websites different from regular SEO?",
      answer:
        "Yes, it often requires more tailored strategies due to the unique design and functionality of custom-built sites. ",
    },
  ];

  return (
    <div>
      <head>
        <title>Custom Website Design and SEO Services | Wtechy</title>
        <meta title="Custom Website Design and SEO Services | Wtechy" />
        <meta name="description" content="Wtechy combines custom website design with expert SEO services to help you stand out online. Achieve higher rankings and drive traffic effortlessly!" />
      </head>
      <InnerBanner
        title={"SEO for Custom Websites "}
        info={
          "Optimize Your Custom Website for Enhanced Search Engine Visibility "
        }
      />
      <ImageInfoWrap
        title={
          "Our strategic approach makes us different than most digital marketing companies  "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s approach to SEO for custom websites is designed to provide tailored solutions that address the unique challenges of custom-built sites. Many digital marketing companies use generic SEO strategies that often overlook the specific needs of custom websites. Our SEO services are crafted to align with the custom design and functionality of your website, ensuring that all elements work together to improve your site’s search engine performance. From optimizing site structure to implementing advanced SEO techniques, Our services ensure that your custom website stands out in search results, driving more traffic and higher conversion rates. </p>"
        }
      />
      <FullWidthCTASection
        title={"Transform Your Custom Website’s SEO Today"}
      />

      <ImageInfoWrap
        title={"How our unique methods provide you better results"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Choosing Wtechy for your custom website SEO needs ensures that you receive a strategy tailored to the unique aspects of your site. Our services include detailed site audits, keyword research, and technical SEO improvements that enhance the performance and visibility of your custom website. By focusing on SEO, we ensure that your site is fully optimized to meet the specific demands of search engines, leading to improved rankings and increased organic traffic. Our approach helps your business achieve better results by ensuring that your website is easily discoverable by potential customers.</p>"
        }
      />
      <FullWidthCTASection
        title={"Enhance Your Site’s Performance with Expert SEO "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>When you collaborate with us, you gain access to a team of experts dedicated to optimizing your custom website for search engines. Our process includes a thorough analysis of your site’s structure, content, and technical setup to identify areas for improvement. We then implement targeted SEO strategies that are designed to improve your site’s visibility and performance. With our custom website design and SEO services, you can expect to see higher rankings, more traffic, and better engagement from your audience. Our ongoing monitoring and adjustments ensure that your site continues to perform well in search engine rankings. </p>"
            }
            title={"Our partnership gives you more than just SEO services"}
            smallTitle={"Partner with a Custom Website SEO Specialist "}
            showContactBtn={true}
          />
        </div>
      </section>

      <FullWidthCTASection
        title={"Start Your Custom Website SEO Journey Today"}
      />

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {customWebsitesServicesData.map((service, index) => (
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
        title={"Improve Your Custom Website’s SEO Now"}
      />

      <ImageInfoWrap
        title={"Get a Perfect Custom Website with Our SEO Services"}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Our SEO focuses on both the technical and content aspects to ensure your site is fully optimized for search engines. We tailor our strategies to the specific design and functionality of your website, ensuring it meets modern SEO standards. With our expertise, your custom website will not only rank higher but also provide a better user experience, leading to increased engagement and conversions. Trust us to deliver the SEO services your custom website needs to succeed online. </p>"
        }
      />
      <FullWidthCTASection title={"Contact Us for Custom SEO Solutions"} />

      <ImageInfoWrap
        title={
          "Boost Your Online Presence with our Custom Website SEO Services "
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>We are committed to providing top-tier SEO services for custom websites. Our approach is built on a deep understanding of SEO best practices and the unique challenges that come with optimizing custom-built sites. We focus on improving your website’s visibility, performance, and user experience to ensure it stands out in search engine results. Whether you need to improve your site’s rankings, attract more visitors, or enhance user engagement, we have the expertise to help you achieve your goals. </p>"
        }
      />
      <FullWidthCTASection
        title={"Start Achieving SEO Success Today "}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Seo with custom websites"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for SEO for Custom Websites"}
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

export default SeoForCustomWebsites;
