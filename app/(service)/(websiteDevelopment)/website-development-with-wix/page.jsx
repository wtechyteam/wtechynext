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

const WixDevelopment = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const customWebsiteServicesData = [
    {
      icon: serviceIcon1,
      title: "Custom Wix Website Design",
      description:
        "Tailoring the design to reflect your brand’s identity and resonate with your audience.",
    },
    {
      icon: serviceIcon2,
      title: "Responsive Web Design",
      description:
        "Ensuring your website looks great and functions smoothly across all devices, enhancing user experience.",
    },
    {
      icon: serviceIcon1,
      title: "SEO Optimization",
      description:
        "Leveraging Wix’s built-in SEO features to improve your site’s visibility on search engines. ",
    },
    {
      icon: serviceIcon2,
      title: "E-commerce Integration",
      description:
        "Building fully functional online stores with Wix, complete with payment gateways and inventory management.",
    },
    {
      icon: serviceIcon1,
      title: "Content Management",
      description:
        "Providing easy-to-use content management solutions that allow you to update your site with ease. ",
    },
    {
      icon: serviceIcon2,
      title: "Analytics and Tracking",
      description:
        "Integrating analytics tools to monitor your site’s performance and gain insights into visitor behavior.",
    },
    {
      icon: serviceIcon1,
      title: "Blog Integration",
      description:
        "Setting up a blog on your Wix site to boost content marketing efforts and drive traffic. ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Features and Widgets",
      description:
        "Enhancing your website with custom features and widgets that add value to your users. ",
    },
    {
      icon: serviceIcon1,
      title: "Maintenance and Support",
      description:
        " Offering ongoing maintenance and support to keep your site updated, secure, and performing optimally.",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Tailored Design Approach",
      description:
        " Creating custom Wix designs that align with your brand identity. ",
    },
    {
      icon: serviceIcon2,
      title: "Advanced SEO Strategies",
      description:
        "Implementing Wix’s SEO features to boost your site’s search engine performance.",
    },
    {
      icon: serviceIcon1,
      title: "Responsive Development",
      description:
        "Ensuring your site functions well on all devices, enhancing the user experience.",
    },
    {
      icon: serviceIcon2,
      title: "E-commerce Solutions",
      description:
        " Building robust online stores using Wix’s versatile e-commerce capabilities. ",
    },
    {
      icon: serviceIcon1,
      title: "Content Management Expertise",
      description:
        " Simplifying content updates and management through user-friendly solutions.  ",
    },
    {
      icon: serviceIcon2,
      title: "Dedicated Support",
      description:
        "Providing ongoing support to keep your Wix website secure and performing optimally. ",
    },
  ];

  const faqData = [
    {
      question: "What is website development with Wix?",
      answer:
        "It involves creating customized websites using Wix’s platform, tailored to your business needs.  ",
    },
    {
      question:
        "Why choose Wtechy for Wix website development services?",
      answer:
        "Wtechy provides personalized Wix web design services that prioritize your brand and business goals. ",
    },
    {
      question:
        "How does Wix web design improve online visibility?",
      answer:
        "Wix’s SEO features, combined with expert design, enhance search engine rankings and visibility.",
    },
    {
      question: "Can Wtechy handle complex Wix development projects?",
      answer:
        "Yes, Wtechy specializes in managing complex Wix projects with advanced custom features and integrations. ",
    },
    {
      question: "What industries benefit from Wix website development?",
      answer:
        "Wix is suitable for a variety of industries, including retail, services, personal brands, and more. ",
    },
    {
      question: "What kind of support do you offer after development?",
      answer:
        "Wtechy offers continuous maintenance and support to ensure your Wix website remains updated and effective. ",
    },
  ];

  return (
    <div>
      <head>
        <title>Creative Wix Website Development Services | Wtechy</title>
        <meta title="Creative Wix Website Development Services | Wtechy" />
        <meta name="description" content="Elevate your brand with Wtechy's creative Wix website development services. Custom designs that not only look great but also convert visitors into customers!" />
      </head>
      <InnerBanner
        title={"Website Development with Wix "}
        info={
          "Professional Wix website development tailored to your business needs"
        }
      />
      <ImageInfoWrap
        title={
          "Get The Quality Service You Deserve with Our Wix Development  "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s approach to website development with Wix is centered on creating highly customized, professional web solutions that stand out in today’s competitive market. Unlike many digital marketing companies that provide generic Wix development services, Wtechy offers a tailored experience, focusing on understanding your business objectives and crafting a website that aligns perfectly with your brand. Our expertise in Wix web design services enables us to create visually stunning and fully functional websites optimized for both user experience and search engine visibility. We use Wix’s powerful tools to design responsive, SEO-friendly websites that load quickly and look great on any device. By integrating advanced design techniques with Wix’s versatile platform, Wtechy ensures your site is not just aesthetically pleasing but also built to perform. </p>"
        }
      />
      <FullWidthCTASection
        title={"Enhance Your Digital Footprint with Expert Wix Development "}
      />

      <ImageInfoWrap
        title={"Wix Approach vs. Other Digital Marketing Firms: A Better Choice "}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Choosing Wtechy for your Wix website development needs guarantees a site that is both engaging and effective. Our Wix development services are designed to help businesses achieve better online results through strategic design and implementation. By focusing on creating websites that are easy to navigate, visually appealing, and optimized for conversions, Wtechy helps you attract and retain your target audience. Our approach includes thorough planning, custom design, and ongoing support to ensure your website continues to meet your evolving needs. Whether you’re a small business owner or a growing brand, Wtechy’s Wix development services provide a scalable solution that enhances your digital presence and supports your business growth. </p>"
        }
      />
      <FullWidthCTASection
        title={"Build a Site That Works as Hard as You Do "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Collaborating with Wtechy on your Wix website development project means gaining access to a team of experienced developers and designers who are committed to delivering exceptional results. Our Wix web design services are structured to provide a seamless experience from start to finish, ensuring your website is designed to the highest standards. We offer a comprehensive suite of services, including custom web design, SEO optimization, and mobile responsiveness, all tailored to your specific business needs. With Wtechy, your website is more than just an online presence—it’s a powerful tool that drives engagement, builds brand awareness, and converts visitors into loyal customers. </p>"
            }
            title={"Better Outcomes with Our Wix Development Expertise "}
            smallTitle={"Partner with a trusted provider of Wix web design services."}
            showContactBtn={true}
          />
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            title={"Key Elements of Our Website Development with Wix Services "}
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {customWebsiteServicesData.map((service, index) => (
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
        title={"Ready to Elevate Your Online Presence? "}
      />

      <ImageInfoWrap
        title={"Partner with Us and See Better Results with Wix Web Design "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Wtechy’s Wix web design services offer enhancements that set your website apart from the competition. Our focus on customization and user-centric design ensures that every element of your site is optimized for performance. From faster load times to improved navigation, our services enhance the overall user experience, helping to increase engagement and drive conversions. </p>"
        }
      />
      <FullWidthCTASection title={"Let Us Help You Create a Stunning Wix Website "} />

      <ImageInfoWrap
        title={
          "Discover the Difference: Enhancements with Our Wix Development Services "
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Wtechy’s commitment to quality in Wix website development services ensures that your website is built to the highest standards. Our attention to detail and dedication to using best practices mean that your site will not only look great but also function smoothly and efficiently. By choosing Wtechy, you’re selecting a partner that prioritizes your business goals and works tirelessly to exceed your expectations. </p>"
        }
      />
      <FullWidthCTASection
        title={"Trust Your Web Development to the Experts "}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Website Development with Wix "}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for Website Development with Wix? "}
            title={"Wtechy and Website Development with Wix "}
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

export default WixDevelopment;
