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

const SeoForNextjs = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const nextjsServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive Site Audits ",
      description:
        "We conduct detailed audits to identify key areas for improvement in your Next.js site’s SEO",
    },
    {
      icon: serviceIcon2,
      title: "Server-Side Rendering Optimization ",
      description:
        "We optimize your Next.js site’s server-side rendering capabilities to improve search engine indexing. ",
    },
    {
      icon: serviceIcon1,
      title: "Static Site Generation Enhancement  ",
      description:
        "Our services ensure your static pages are fully optimized for fast loading and search engine visibility. ",
    },
    {
      icon: serviceIcon2,
      title: "Custom Keyword Strategies ",
      description:
        "We perform thorough keyword research tailored to your industry and audience to drive targeted traffic. ",
    },
    {
      icon: serviceIcon1,
      title: "Content Optimization ",
      description:
        "We enhance your content to be both user-friendly and search engine optimized, ensuring higher engagement.  ",
    },
    {
      icon: serviceIcon2,
      title: "Technical SEO",
      description:
        "Our technical SEO services include optimizing your site’s codebase, ensuring fast load times and mobile responsiveness. ",
    },
    {
      icon: serviceIcon1,
      title: "Schema Markup Implementation ",
      description:
        "We add structured data to your Next.js site, improving search engine understanding and enhancing your search results.  ",
    },
    {
      icon: serviceIcon2,
      title: "Local SEO Optimization ",
      description:
        "For businesses targeting specific regions, we implement local SEO strategies to increase your site’s visibility in local searches. ",
    },
    {
      icon: serviceIcon1,
      title: "Ongoing Monitoring and Reporting",
      description:
        " We provide regular reports and continuous monitoring to track your SEO progress and make necessary adjustments. ",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Expert SEO Strategies ",
      description:
        "Tailored SEO strategies designed specifically for the Next.js framework.  ",
    },
    {
      icon: serviceIcon2,
      title: "Detailed Site Audits  ",
      description:
        "Comprehensive audits to identify and address SEO weaknesses. ",
    },
    {
      icon: serviceIcon1,
      title: "Technical and Content Optimization",
      description:
        "Enhancing both the technical and content aspects of your Next.js site for better rankings. ",
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
      question: "What is Next.js SEO optimization?",
      answer:
        "It involves enhancing the visibility of your Next.js site on search engines through tailored strategies. ",
    },
    {
      question:
        "Why should I choose a Next.js SEO company? ",
      answer:
        "A specialized SEO company like Wtechy has the expertise to fully leverage the framework’s capabilities for better SEO results. ",
    },
    {
      question:
        "Can I optimize my Next.js site for SEO by myself?  ",
      answer:
        "While basic SEO can be managed on your own, professional SEO services provide comprehensive optimization for better performance.  ",
    },
    {
      question: "How long does it take to see results from Next.js SEO? ",
      answer:
        "Results vary, but most businesses start seeing improvements within a few months of consistent optimization efforts.",
    },
    {
      question: "What makes Wtechy’s SEO services different? ",
      answer:
        "We offer a targeted approach to SEO, ensuring both technical and content optimization for superior results. ",
    },
    {
      question: "Is Next.js good for SEO?  ",
      answer:
        "Yes, Next.js is excellent for SEO, especially with its server-side rendering and static site generation capabilities, which can be fully optimized for search engines.",
    },
  ];

  return (
    <div>
      <head>
        <title>Next.js SEO Strategies for Success | Wtechy</title>
        <meta title="Next.js SEO Strategies for Success | Wtechy" />
        <meta name="description" content="Optimize your Next.js site for better visibility! Wtechy offers comprehensive SEO strategies to enhance your online presence and drive traffic." />
      </head>
      <InnerBanner
        title={"SEO for Next.js "}
        info={
          "Experience the Wtechy Advantage: Expert Next.js Optimization "
        }
      />
      <ImageInfoWrap
        title={
          "Why Choose Wtechy for Your Next.js SEO "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s Next.js SEO services are specifically designed to leverage the unique strengths of the Next.js framework. Unlike many digital marketing companies that apply generic SEO tactics, we focus on the specific requirements and benefits of Next.js. The framework's ability to deliver server-side rendering and static site generation gives it a distinct advantage in SEO. Our approach ensures that these features are fully utilized to improve your site’s visibility on search engines. This targeted strategy not only improves your site’s rankings but also enhances user experience by delivering faster load times and more relevant content. </p>"
        }
      />
      <FullWidthCTASection
        title={"Unlock the Full Potential of Your Next.js Site "}
      />

      <ImageInfoWrap
        title={"Experience the Wtechy Difference: Expert Next.js Optimization"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>By choosing our SEO services, you’re investing in a comprehensive solution that goes beyond traditional SEO. Our SEO optimization service ensures your site is fully optimized for search engines while maintaining the high performance that Next.js is known for. From optimizing the codebase to ensuring proper meta tag implementation and schema markup, our services cover every aspect of SEO. This results in improved organic traffic, better user engagement, and higher conversion rates. Our expertise in Next.js ensures that your website not only meets but exceeds search engine optimization standards. </p>"
        }
      />
      <FullWidthCTASection
        title={"Transform Your Next.js Website Today "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>When you collaborate with us, you gain access to a dedicated team that understands the intricacies of Next.js. Our SEO for Next.js includes thorough site audits, keyword research, content optimization, and ongoing performance monitoring. We ensure that your website is fully optimized from the ground up, which means better rankings and a more engaging user experience. With our SEO services, you’re not just getting an optimized site; you’re getting a partner committed to your long-term success. </p>"
            }
            title={"You get plenty of advantages with our collaboration"}
            smallTitle={"Collaborate with a SEO Company That Delivers Results"}
            showContactBtn={true}
          />
        </div>
      </section>

      <FullWidthCTASection
        title={"Start Your SEO Journey with us "}
      />

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {nextjsServicesData.map((service, index) => (
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
        title={"Improve Your Next.js SEO Today "}
      />

      <ImageInfoWrap
        title={"Enhance Your Next.js Site with our SEO Services "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Our SEO for Next.js focuses on both the technical and content-related aspects of optimization. We ensure that your site is not only search engine friendly but also provides excellent user experience. From optimizing server-side rendering to enhancing the static site generation process, we ensure that every part of your site is working towards achieving higher rankings and better performance. This comprehensive approach results in a significant increase in organic traffic and improved business outcomes. </p>"
        }
      />
      <FullWidthCTASection title={"Contact Us to Start Optimizing Your Site "} />

      <ImageInfoWrap
        title={
          "Boost Your Online Presence with our SEO Services "
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>Our Next.js SEO services are designed to deliver real results. Our approach is based on a deep understanding of the Next.js framework and its unique capabilities. We focus on optimizing both the front-end and back-end of your site to ensure it performs at its best. With Wtechy, you can trust that your site is in expert hands, and that our strategies will help you achieve your online goals.</p>"
        }
      />
      <FullWidthCTASection
        title={"Start Achieving SEO Success Today"}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Seo with nextjs"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for SEO for Next.js "}
            title={"Wtechy: Your Expert Partner in SEO  "}
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

export default SeoForNextjs;
