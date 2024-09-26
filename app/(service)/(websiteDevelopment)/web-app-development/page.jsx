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

const WebAppDevelopment = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const webAppServicesData = [
    {
      icon: serviceIcon1,
      title: "Customized Solutions for Unique Business Needs",
      description:
        "Tailored web applications that align with your specific business objectives. ",
    },
    {
      icon: serviceIcon2,
      title: "Scalability for Future Growth",
      description:
        "Web applications designed to evolve with your business, ensuring long-term viability.",
    },
    {
      icon: serviceIcon1,
      title: "Enhanced User Experience",
      description:
        "Intuitive design and seamless navigation that improve user engagement and satisfaction.",
    },
    {
      icon: serviceIcon2,
      title: "High Performance and Speed",
      description:
        "Optimized web applications that deliver fast loading times and responsive performance.",
    },
    {
      icon: serviceIcon1,
      title: "Robust Security Features",
      description:
        "Advanced security protocols to protect your data and ensure compliance with industry standards.",
    },
    {
      icon: serviceIcon2,
      title: "Cross-Platform Compatibility",
      description:
        "Web applications that function flawlessly across all devices and browsers. ",
    },
    {
      icon: serviceIcon1,
      title: "Efficient Project Management",
      description:
        "Streamlined processes to ensure timely delivery and minimal disruptions to your operations. ",
    },
    {
      icon: serviceIcon2,
      title: "Ongoing Support and Maintenance",
      description:
        "Continuous monitoring and updates to keep your web application running smoothly. ",
    },
    {
      icon: serviceIcon1,
      title: "SEO-Friendly Development",
      description:
        " Web applications built with SEO best practices in mind to enhance online visibility.",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Expertise in Cutting-Edge Technologies",
      description:
        "Delivering the latest in app development to keep your business ahead of the curve.",
    },
    {
      icon: serviceIcon2,
      title: "Tailored Development Solutions",
      description:
        "Creating web applications that cater specifically to your business needs and goals.",
    },
    {
      icon: serviceIcon1,
      title: "Comprehensive Project Management ",
      description:
        "Ensuring that every aspect of the development process is handled efficiently and effectively. ",
    },
    {
      icon: serviceIcon2,
      title: "Focus on User Experience ",
      description:
        "Developing web applications that are intuitive, engaging, and easy to navigate",
    },
    {
      icon: serviceIcon1,
      title: "Commitment to Quality",
      description:
        "Upholding the highest standards in application development to deliver exceptional results. ",
    },
    {
      icon: serviceIcon2,
      title: "Long-Term Partnership ",
      description:
        "Offering ongoing support and development to help your business grow and succeed in the digital landscape. ",
    },
  ];

  const faqData = [
    {
      question: " What is web app development?",
      answer:
        "Web app development involves creating applications that run on web servers, accessible through browsers, and can be used across various devices without needing installation.",
    },
    {
      question:
        "Why should I choose a specialized agency?",
      answer:
        "Specialized agencies like Wtechy offer tailored solutions that align closely with your business goals, ensuring better performance, scalability, and security compared to generic offerings. ",
    },
    {
      question:
        "How long does the web application development process take?",
      answer:
        "The timeline varies depending on the complexity of the project. However, We ensure efficient project management to deliver your web application on time without compromising quality. ",
    },
    {
      question: "What are the benefits of having a custom web application? ",
      answer:
        "A custom web application offers enhanced functionality, better user experience, and greater flexibility, allowing you to meet specific business needs effectively. ",
    },
    {
      question: " How do you ensure the security of the web application?",
      answer:
        "We incorporate advanced security measures throughout the development process, including data encryption, secure authentication, and regular security audits. ",
    },
    {
      question: "What kind of ongoing support do you provide after the web application is launched? ",
      answer:
        "We offer continuous monitoring, regular updates, and prompt technical support to ensure your web application remains functional and up-to-date. ",
    },
  ];

  return (
    <div>
      <head>
        <title>Custom Web Application Development Experts | Wtechy</title>
        <meta title="Custom Web Application Development Experts | Wtechy" />
        <meta name="description" content="Transform your ideas into reality with Wtechy's custom web application development services, designed to meet your unique business needs. Contact us today!" />
      </head>
      <InnerBanner
        title={"Web App Development"}
        info={
          "Custom web application development tailored to your business needs.  "
        }
      />
      <ImageInfoWrap
        title={
          "Why We're the Best Choice for Web App Development "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>In the rapidly evolving digital landscape, having a robust web application is crucial for businesses to stay competitive. Many digital marketing companies offer web app development services, but few understand the intricacies involved in creating a solution that truly resonates with your business needs. At Wtechy, our approach goes beyond just coding. We prioritize understanding your business goals, target audience, and unique challenges before crafting a tailored web application. This ensures that the final product is not just a functional tool but a strategic asset that drives growth and engagement. By focusing on usability, scalability, and security, Wtechy's web application development services ensure that your business is equipped with a powerful digital platform that can adapt to changing market demands. Unlike many agencies that offer generic solutions, our bespoke approach allows for greater flexibility, enabling you to stay ahead of the curve in a competitive market. </p>"
        }
      />
      <FullWidthCTASection
        title={"Experience a Custom Solution "}
      />

      <ImageInfoWrap
        title={"How our work will help you get better results with web app development services "}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Effective app development is not just about building an application—it's about creating an ecosystem that supports your business objectives. Our app development services are designed to provide a seamless user experience, which is crucial for customer retention and satisfaction. With a focus on performance optimization, we ensure that your web application is fast, reliable, and accessible across all devices. Our web application development agency adopts best practices in design, coding, and testing to deliver a product that not only meets but exceeds industry standards. This attention to detail translates into higher user engagement, better conversion rates, and ultimately, a stronger ROI for your business. </p>"
        }
      />
      <FullWidthCTASection
        title={"Transform Your Business Today "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Partnering with Wtechy means you’ll receive more than just a functional product. You’ll gain a competitive edge with a web application that is designed to grow with your business. Our agency focuses on creating scalable, secure, and efficient solutions that align with your business strategy, ensuring long-term success.  From initial consultation to final deployment, every step of our process is geared towards delivering a product that enhances your brand’s online presence and drives measurable results. </p>"
            }
            title={"What You Gain from Our Expert Web Application Development Services "}
            smallTitle={"Collaborate with Us for Superior Web Application Development"}
            showContactBtn={true}
          />
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {webAppServicesData.map((service, index) => (
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
        title={"Get Started with us Today "}
      />

      <ImageInfoWrap
        title={"The Value Added by Partnering with Wtechy’s Web App Development Experts "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Choosing Wtechy means gaining a partner committed to your business’s success. Our development process incorporates the latest technologies and methodologies, ensuring that your web application is not only cutting-edge but also future-proof. With our services, you’ll benefit from a solution that is as dynamic and adaptable as your business, enabling you to respond to market changes with agility and confidence. </p>"
        }
      />
      <FullWidthCTASection title={"Enhance Your Digital Presence "} />

      <ImageInfoWrap
        title={
          "Setting the Benchmark for Quality in Web App Development"
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Wtechy prides itself on delivering top-tier web application development services that stand out in quality and effectiveness. Each project is handled with meticulous attention to detail, ensuring that the final product is not just a web application but a strategic tool that empowers your business. Our commitment to excellence is reflected in every aspect of our service, from the initial consultation to the ongoing support and maintenance. </p>"
        }
      />
      <FullWidthCTASection
        title={"Experience Unmatched Quality "}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Web App Development"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for Web App Development? "}
            title={"Wtechy and Web App Development"}
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

export default WebAppDevelopment;
