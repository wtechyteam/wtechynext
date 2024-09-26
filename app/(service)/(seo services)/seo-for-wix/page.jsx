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

const SeoForWix = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const wixServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive Site Audits",
      description:
        "Our detailed audits identify areas for improvement, ensuring every aspect of your Wix site is optimized for search engines. ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Meta Tags and Descriptions ",
      description:
        "We create unique meta tags and descriptions that enhance your site’s relevance and click-through rates. ",
    },
    {
      icon: serviceIcon1,
      title: "SEO-Friendly URLs",
      description:
        "Our Wix SEO optimization includes creating clean, keyword-rich URLs that improve your site’s search engine rankings. ",
    },
    {
      icon: serviceIcon2,
      title: "Keyword Research and Implementation",
      description:
        "We perform thorough keyword research to target the terms your audience is searching for, driving quality traffic to your site. ",
    },
    {
      icon: serviceIcon1,
      title: "Mobile Optimization ",
      description:
        "Ensuring your Wix site is fully optimized for mobile devices is a key component of our SEO strategy, enhancing user experience and rankings. ",
    },
    {
      icon: serviceIcon2,
      title: "Content Optimization ",
      description:
        "We enhance your content with strategic keyword placement, readability improvements, and internal linking to boost your SEO performance. ",
    },
    {
      icon: serviceIcon1,
      title: "Image Optimization ",
      description:
        "Our services include optimizing images with alt text and proper formatting, which improves your site's speed and SEO. ",
    },
    {
      icon: serviceIcon2,
      title: "Ongoing Support and Maintenance",
      description:
        "We implement local SEO tactics to help your business rank higher in local searches, attracting nearby customers. ",
    },
    {
      icon: serviceIcon1,
      title: "Analytics and Reporting ",
      description:
        " We provide detailed analytics and reports that show the impact of our SEO efforts, helping you track progress and ROI.",
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
      question: "What is Wix SEO optimization? ",
      answer:
        "It involves improving your Wix website's visibility on search engines through tailored strategies. ",
    },
    {
      question:
        "How does a Wix SEO company help? ",
      answer:
        "A Wix SEO company like Wtechy specializes in optimizing Wix sites, ensuring they perform well on search engines.",
    },
    {
      question:
        "Are Wix SEO services necessary? ",
      answer:
        "Yes, for businesses looking to improve their online visibility, these services are crucial for attracting and converting visitors. ",
    },
    {
      question: "Can I perform SEO on my Wix site myself? ",
      answer:
        "While you can handle basic SEO tasks, professional SEO services ensure your site is fully optimized for the best results. ",
    },
    {
      question: " How long does it take to see results from Wix SEO? ",
      answer:
        "Results can vary, but most businesses see improvements in their rankings and traffic within a few months.",
    },
    {
      question: "What makes Wtechy different from other SEO companies? ",
      answer:
        "We providee specialized Wix SEO services that are tailored to the platform, ensuring better performance and results.",
    },
  ];

  return (
    <div>
      <head>
        <title>Wix SEO Optimization Services for Enhanced Visibility </title>
        <meta title="Wix SEO Optimization Services for Enhanced Visibility" />
        <meta name="description" content="Our Wix SEO optimization services focus on enhancing your website's visibility and driving organic traffic, helping you connect with your ideal audience." />
      </head>
      <InnerBanner
        title={"SEO for Wix"}
        info={
          "Optimize Your Wix Website for Unmatched Digital Visibility "
        }
      />
      <ImageInfoWrap
        title={
          "Why our SEO Service is Different "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wix SEO services from Wtechy provide a tailored approach to optimizing your Wix website, ensuring it stands out in the competitive digital landscape. Unlike generic SEO strategies, we understand the unique challenges and strengths of Wix as a platform. By leveraging specific techniques, such as custom meta tags, SEO-friendly URLs, and strategic keyword placement, our Wix SEO optimization efforts surpass the standard practices of many digital marketing companies. The result is a significant improvement in your site’s ranking on search engines, leading to increased traffic and higher conversion rates.</p>"
        }
      />
      <FullWidthCTASection
        title={"Make a Difference with Us"}
      />

      <ImageInfoWrap
        title={"How our work will help you get better results "}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Wix SEO optimization with Wtechy isn’t just about increasing your website’s visibility; it’s about driving quality traffic that converts. Our expertise as a leading Wix SEO company ensures that every aspect of your site is optimized, from content to backend settings. This holistic approach results in better user experience, higher engagement, and ultimately, more leads and sales. By focusing on what makes your business unique, we tailor our strategies to align with your goals, delivering measurable improvements. </p>"
        }
      />
      <FullWidthCTASection
        title={"Maximize Your Wix Site’s Potential "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Partnering with us means receiving personalized SEO for Wix services designed to meet your specific needs. From initial site audits to ongoing optimization, every step of our process is aligned with your business objectives. Our comprehensive approach ensures that your Wix site not only ranks well but also provides a seamless user experience, which is crucial for retaining visitors and converting them into customers. The outcome? A stronger online presence that supports your business growth. </p>"
            }
            title={"What you'll get with our collaboration and how it will help you get better results "}
            smallTitle={"Collaborate with a Wix SEO Company That Delivers Results"}
            showContactBtn={true}
          />
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {wixServicesData.map((service, index) => (
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
        title={"Take the First Step Towards Better Rankings "}
      />

      <ImageInfoWrap
        title={"Enhance Your Wix Site’s Performance with Us "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Wtechy offers more than just improved rankings; it enhances your site’s overall performance. From faster loading times to a more user-friendly interface, the improvements we implement contribute to a better experience for your visitors. This, in turn, leads to higher engagement, more leads, and greater customer satisfaction. Trust in our expertise to elevate your Wix website to its full potential. </p>"
        }
      />
      <FullWidthCTASection title={"Elevate Your Online Presence Today "} />

      <ImageInfoWrap
        title={
          "Boosting Your Online Success with Our Wix SEO Services "
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Quality is at the core of everything we do. Our SEO services are designed to deliver exceptional results, backed by years of experience and a deep understanding of the platform. Whether you’re looking to improve your search engine rankings or enhance your site’s usability, our team is committed to providing top-notch services that help you achieve your online goals.  </p>"
        }
      />
      <FullWidthCTASection
        title={"Achieve Excellence with Expert SEO Solutions "}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Seo with Wix"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for SEO for Wix"}
            title={"Wtechy: Your Partner in Wix SEO "}
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

export default SeoForWix;
