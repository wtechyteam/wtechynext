"use client";
import React from "react";
import InnerBanner from "../../../../common/InnerBanner";
import ImageInfoWrap from "../../../../common/ImageInfoWrap";
import section1Image from "./../../../../public/assets/Images/services/nextjsDevelopment.jpeg";
import section2Image from "./../../../../public/assets/Images/services/nodejsDevelopment.png";
import section3Image from "./../../../../public/assets/Images/services/online-reputation.webp";

import serviceIcon1 from "./../../../../public/assets/Images/homepage/digitalMarketing.png";
import serviceIcon2 from "./../../../../public/assets/Images/homepage/MarketingStrategies.png";

import SectionTopInfo from "../../../../common/SectionTopInfo";
import FullWidthCTASection from "../../../../common/FullWidthCTASection";
import FAQs from "../../../../common/FAQs";
import Image from "next/image";
import { useMounted } from "../../../../common/unmounted";

const WebsiteDevelopment = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const websiteDevelopmentData = [
    {
      icon: serviceIcon1,
      title: "Custom Next.js Web Development",
      description:
        "Tailored web applications that utilize Next.js for improved speed and performance.",
    },
    {
      icon: serviceIcon2,
      title: "Scalable Node.js Solutions",
      description:
        "Scalable backend development using Node.js to manage high-traffic demands and real-time data.",
    },
    {
      icon: serviceIcon1,
      title: "Enhanced SEO Capabilities",
      description:
        "Leveraging Next.js’s server-side rendering for better search engine optimization.",
    },
    {
      icon: serviceIcon2,
      title: "Real-Time Application Development",
      description:
        "Creating real-time features for enhanced interactivity using Node.js.",
    },
    {
      icon: serviceIcon1,
      title: "API Integration and Management",
      description:
        "Seamlessly integrating third-party APIs to enhance your web application’s functionality.",
    },
    {
      icon: serviceIcon2,
      title: "Secure Web Applications",
      description:
        "Implementing robust security measures to protect against vulnerabilities in Node.js.",
    },
    {
      icon: serviceIcon1,
      title: "Performance Optimization",
      description:
        "Enhancing site speed and performance through advanced caching and optimization techniques.",
    },
    {
      icon: serviceIcon2,
      title: "Responsive Web Design",
      description:
        "Ensuring your web application works flawlessly across all devices and screen sizes. ",
    },
    {
      icon: serviceIcon1,
      title: "Maintenance and Support",
      description:
        "Providing ongoing support to keep your website updated and performing optimally. ",
    },
  ];

  const faqData = [
    {
      question: "What is website development with Next.js and Node.js?",
      answer:
        "It involves building high-performance websites using Next.js for the frontend and Node.js for the backend.",
    },
    {
      question: "Why choose a Next.js development company for your website?",
      answer:
        "Next.js offers superior performance and SEO benefits, making it ideal for modern web applications.",
    },
    {
      question: "How does Node.js development improve web functionality?",
      answer:
        "Node.js provides a scalable and efficient backend, enhancing real-time data handling and application speed.",
    },
    {
      question: "Can Wtechy handle complex web development projects?",
      answer:
        "Yes, Wtechy specializes in managing complex projects with a focus on delivering tailored solutions.",
    },
    {
      question:
        "What industries benefit from Next.js and Node.js development? ",
      answer:
        "E-commerce, finance, healthcare, and any industry that requires dynamic, fast, and secure web applications can benefit.",
    },
    {
      question: "What kind of support is available after development? ",
      answer:
        "Wtechy offers continuous maintenance and support to ensure your website remains up-to-date and fully functional.",
    },
  ];

  return (
    <div>
      <head>
      <title>Website Development with NextJS and NodeJS</title>
        <meta title="Website Development with NextJS and NodeJS"/>
        <meta
          name="description"
          content=""
        />
      </head>
      <InnerBanner
        title={"Website Development with Next.js and Node.js"}
        info={
          "Cutting-edge web solutions leveraging Next.js and Node.js technologies."
        }
      />
      <ImageInfoWrap
        title={"Our Next.js Development Outshines the Competition"}
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s approach to website development with Next.js and Node.js distinguishes us from conventional digital marketing companies. As a leading Next.js development company, we specialize in creating fast, scalable, and SEO-optimized websites that provide a seamless user experience. Our development strategy combines the best of Next.js and Node.js to deliver highly efficient web applications tailored to your business needs. Unlike many agencies that rely on generic solutions, Wtechy prioritizes a custom approach to every project. By leveraging Next.js, a framework known for its server-side rendering and static site generation capabilities, we enhance website performance and search engine visibility. Combined with the robust backend capabilities of Node.js, our websites are built to handle complex functionalities, ensuring optimal performance under high traffic. </p>"
        }
      />
      <FullWidthCTASection
        title={"Revolutionize Your Online Presence with Expert Development "}
      />

      <ImageInfoWrap
        title={"Our Partnership: A Game-Changer for Your Development Needs"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Partnering with Wtechy means accessing top-tier Node.js development services that drive results. Our focus on building high-performance web applications through Node.js allows businesses to benefit from fast, scalable, and secure platforms that cater to modern digital demands. As a leading Node.js development company, our services go beyond mere functionality, incorporating best practices that enhance user experience and engagement. Our Node.js development services are ideal for businesses looking to create real-time applications, streamline data handling, and improve overall operational efficiency. By working with a team that understands the intricacies of Node.js, you gain a competitive edge, ensuring your website remains agile and responsive in an ever-evolving market. </p>"
        }
      />
      <FullWidthCTASection
        title={
          "Join hands with a Next.js development agency that delivers results."
        }
      />

      <ImageInfoWrap
        title={"Unlock Better Results and Improved Quality Our Collaboration"}
        imageUrl={section3Image}
        isReverse={true}
        description={
          "<p>When you collaborate with Wtechy, you gain access to comprehensive website development services with Next.js and Node.js at the core. Our next.js development agency is committed to providing tailored solutions that align with your unique business needs. From enhanced site speed to superior SEO performance, our approach ensures your website is fully optimized to meet current digital standards. With our expert team handling every aspect of your web development, you receive a solution that not only meets but exceeds your expectations. The integration of Next.js and Node.js technologies allows us to deliver highly interactive and dynamic web experiences that drive user engagement and business growth. </p>"
        }
      />
      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            smallTitle={"Unlock the Power of Node.js for Your Business "}
            isFullWidth={true}
            title={
              "Key Elements of Our Website Development with Next.js and Node.js "
            }
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {websiteDevelopmentData.map((service, index) => (
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
        title={"Start Your Next.js and Node.js Journey with Us"}
      />

      <ImageInfoWrap
        title={"Upgrade Your Experience with Our Next.js Development Services"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Wtechy’s next.js development services are designed to enhance every aspect of your web presence. From faster load times to improved SEO rankings, our Next.js solutions offer significant advantages that translate directly into better user engagement and business outcomes. Our focus on scalability ensures that your website can grow alongside your business, providing a robust platform that supports future expansion. </p>"
        }
      />
      <FullWidthCTASection
        title={"Let’s Build a Better Web Experience Together "}
      />

      <ImageInfoWrap
        title={
          "Experience Best Service and Quality with Our Node.js Development "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy is renowned for delivering top-notch Node.js development services that prioritize quality and innovation. Our commitment to excellence ensures that every project is handled with the utmost care, focusing on delivering secure, high-performance web applications. Our approach to Node.js development combines the latest technologies with best practices, ensuring your website is built to last. </p>"
        }
      />
      <FullWidthCTASection
        title={"Partner with a Trusted Development Expert "}
      />

      

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Website Development with Next.js and Node.js"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
