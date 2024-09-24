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

const CustomWebsiteDevelopment = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const customWebsiteServicesData = [
    {
      icon: serviceIcon1,
      title: "Tailored Web Design",
      description:
        "Creating unique, brand-specific web designs that resonate with your target audience.",
    },
    {
      icon: serviceIcon2,
      title: "Responsive Design Implementation",
      description:
        "Ensuring your website is accessible and looks great on all devices, from desktops to smartphones.",
    },
    {
      icon: serviceIcon1,
      title: "E-commerce Integration",
      description:
        "Building secure and user-friendly e-commerce platforms that enhance the shopping experience and drive sales. ",
    },
    {
      icon: serviceIcon2,
      title: "User Experience Optimization",
      description:
        "Focusing on intuitive navigation and clear call-to-actions to enhance the user journey.",
    },
    {
      icon: serviceIcon1,
      title: "SEO-Friendly Development",
      description:
        "Incorporating SEO best practices into the design and development process to boost your search engine rankings",
    },
    {
      icon: serviceIcon2,
      title: "Scalable Web Architecture",
      description:
        "Designing websites that grow with your business, allowing for easy updates and expansions.",
    },
    {
      icon: serviceIcon1,
      title: "Custom Backend Solutions",
      description:
        "Developing tailored backend systems that support your specific business operations and enhance performance.",
    },
    {
      icon: serviceIcon2,
      title: "Advanced Security Features",
      description:
        "Implementing robust security measures to protect your website from cyber threats. ",
    },
    {
      icon: serviceIcon1,
      title: "Ongoing Support and Maintenance",
      description:
        " Providing continuous support to keep your website updated, secure, and performing at its best.",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Unique Designs Tailored to Your Brand",
      description:
        " We create custom websites that reflect your brand’s identity and stand out from the competition.",
    },
    {
      icon: serviceIcon2,
      title: "Advanced Technical Expertise",
      description:
        "Our team leverages the latest technologies to deliver high-performance web solutions. ",
    },
    {
      icon: serviceIcon1,
      title: "User-Centric Approach",
      description:
        "We prioritize the user experience, ensuring your site is engaging, intuitive, and conversion-focused. ",
    },
    {
      icon: serviceIcon2,
      title: "Scalable Solutions",
      description:
        "Our custom web designs are built to grow with your business, providing the flexibility needed to adapt to market changes. ",
    },
    {
      icon: serviceIcon1,
      title: "SEO-Optimized Development",
      description:
        "We integrate SEO best practices into the design and development process to improve your website’s visibility. ",
    },
    {
      icon: serviceIcon2,
      title: "Reliable Support and Maintenance",
      description:
        "Continuous support ensures your website remains secure, updated, and performing optimally. ",
    },
  ];

  const faqData = [
    {
      question: "What is custom website development?",
      answer:
        "It involves creating a website tailored specifically to your business needs, rather than using pre-built templates. ",
    },
    {
      question:
        "Why should I choose a custom website development company?",
      answer:
        "A custom website development company provides personalized solutions that align with your brand and business goals.",
    },
    {
      question:
        "How does custom website design improve user engagement?",
      answer:
        "Custom designs are user-focused, providing intuitive navigation and appealing layouts that enhance the overall user experience. ",
    },
    {
      question: "What’s the difference between custom web development and using a template?",
      answer:
        "Custom web development offers unique features and design flexibility, unlike templates that provide limited customization. ",
    },
    {
      question: "Can Wtechy handle complex web design requirements?",
      answer:
        "Yes, our team is equipped to handle projects of any complexity, ensuring the final product meets your specific needs. ",
    },
    {
      question: "What kind of support do you offer after development?",
      answer:
        "We offer comprehensive maintenance and support to keep your website up-to-date and fully functional.",
    },
  ];

  return (
    <div>
      <head>
        <title>Custom Website Development</title>
        <meta title="Custom Website Development" />
        <meta name="description" content="" />
      </head>
      <InnerBanner
        title={"Custom Website Development"}
        info={
          "Innovative custom web solutions designed to elevate your digital presence."
        }
      />
      <ImageInfoWrap
        title={
          "Achieve Superior Outcomes with Our Custom Web Development Expertise "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s approach to custom website development goes beyond the conventional offerings of typical digital marketing companies. We focus on creating bespoke websites that align with your brand identity and business goals. Our custom website design services ensure your site is not just another template-based platform, but a unique digital asset tailored to your needs. By integrating advanced technologies and design principles, Wtechy delivers websites that are visually compelling, highly functional, and optimized for user experience. Our design philosophy emphasizes flexibility and scalability, enabling businesses to adapt to evolving market demands. Our team of skilled designers and developers collaborates closely with you to understand your vision and turn it into a reality through custom web designs that are both aesthetically pleasing and technically robust. </p>"
        }
      />
      <FullWidthCTASection
        title={"Experience Tailored Solutions That Drive Results"}
      />

      <ImageInfoWrap
        title={"Gain True Reach from Our Custom Web Development Services"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Choosing Wtechy for custom web development means partnering with a team dedicated to creating websites that perform as good as they look. Our custom website development services are crafted to enhance your online presence by combining intuitive design with seamless functionality. With a focus on creating user-centric designs, our custom web design services help businesses attract and retain customers by providing a superior browsing experience. Our development process involves thorough research, innovative design, and meticulous testing to ensure your website meets your business objectives. By opting for a custom website development company like Wtechy, businesses can benefit from a platform that not only looks professional but also converts visitors into loyal customers. </p>"
        }
      />
      <FullWidthCTASection
        title={"Transform Your Online Presence with Custom Web Solutions "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Partnering with Wtechy means gaining access to a wide range of custom website development services designed to set your business apart. Our customized website development approach allows us to create tailored solutions that align with your brand’s goals. From the initial concept to the final launch, every stage of the process is executed with precision to ensure your website performs exceptionally in today’s competitive digital landscape. Our service ensures that every aspect of your website is fine-tuned to your needs, whether you’re seeking to enhance your brand image, improve functionality, or optimize performance. The result is a website that doesn’t just meet industry standards—it sets new ones. </p>"
            }
            title={"Core Enhancements Begins with Our Custom Web Development Services"}
            smallTitle={"Collaborate with a trusted partner in custom website development."}
            showContactBtn={true}
          />
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            title={"Key Elements of Our Custom Website Development Services "}
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
        title={"Get Started on Your Custom Web Journey "}
      />

      <ImageInfoWrap
        title={"See the Quality and Craftsmanship in Our Custom Website Development "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Wtechy’s custom web development services provide enhancements that elevate your online presence. Our approach to custom web design services includes detailed customization, ensuring that every aspect of your site reflects your brand’s voice and values. By focusing on both aesthetics and functionality, our services enhance user engagement, reduce bounce rates, and drive conversions, giving your business a significant edge in the market. </p>"
        }
      />
      <FullWidthCTASection title={"Let Us Help You Create Your Ideal Website"} />

      <ImageInfoWrap
        title={
          "Your Vision, Our Expertise: Elevating Website Development Quality"
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Wtechy is recognized as a leading custom website development company for delivering quality services that exceed client expectations. Our focus on innovation, precision, and reliability makes us the go-to partner for businesses looking to invest in custom websites that make a statement. We take pride in our ability to deliver projects on time, within budget, and to the highest standards, ensuring your website is a powerful tool in your digital strategy.</p>"
        }
      />
      <FullWidthCTASection
        title={"Start Building with Confidence"}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Custom Website Development"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for Custom Website Development? "}
            title={"Wtechy and Custom Website Development"}
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

export default CustomWebsiteDevelopment;
