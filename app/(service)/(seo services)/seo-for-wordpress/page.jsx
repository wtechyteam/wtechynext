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

const SeoForWordpress = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const wordpressServicesData = [
    {
      icon: serviceIcon1,
      title: "Detailed SEO Audits ",
      description:
        "Comprehensive audits to identify areas for improvement, ensuring your WordPress site meets all SEO best practices.",
    },
    {
      icon: serviceIcon2,
      title: "SEO Plugin Integration",
      description:
        "We utilize leading SEO plugins like Yoast and Rank Math to enhance your site’s search engine optimization effortlessly. ",
    },
    {
      icon: serviceIcon1,
      title: "Custom Permalink Structures",
      description:
        "Optimized URL structures that improve your site’s search engine rankings and user experience. ",
    },
    {
      icon: serviceIcon2,
      title: "Keyword-Optimized Content ",
      description:
        "Strategic keyword placement in your content to drive quality traffic and improve your site’s visibility. ",
    },
    {
      icon: serviceIcon1,
      title: "Schema Markup Implementation ",
      description:
        "Adding structured data to your site to help search engines understand your content better, leading to enhanced SERP features. ",
    },
    {
      icon: serviceIcon2,
      title: "Mobile and Speed Optimization",
      description:
        "Ensuring your WordPress site is fast and fully responsive, which is crucial for SEO and user experience. ",
    },
    {
      icon: serviceIcon1,
      title: "Link Building Strategies ",
      description:
        "We build high-quality backlinks to improve your site’s authority and ranking on search engines. ",
    },
    {
      icon: serviceIcon2,
      title: "Local SEO Optimization ",
      description:
        "Implementing local SEO tactics to help your business attract customers in your area. ",
    },
    {
      icon: serviceIcon1,
      title: "Regular Reporting and Analytics ",
      description:
        " Providing detailed reports that track the progress of your SEO efforts and inform future strategies. ",
    },
  ];

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Specialized WordPress SEO Expertise",
      description:
        "Tailored strategies to enhance your site’s SEO performance.",
    },
    {
      icon: serviceIcon2,
      title: "Comprehensive Site Audits",
      description:
        "Identifying and addressing all areas for improvement.",
    },
    {
      icon: serviceIcon1,
      title: "Advanced Technical Optimization ",
      description:
        "Ensuring your WordPress site is fully optimized for search engines ",
    },
    {
      icon: serviceIcon2,
      title: "Content Strategy and Optimization ",
      description:
        "Enhancing content to attract and engage your target audience. ",
    },
    {
      icon: serviceIcon1,
      title: "Continuous Monitoring and Reporting ",
      description:
        "Regular updates on your site’s performance to guide ongoing optimization. ",
    },
    {
      icon: serviceIcon2,
      title: "Client-Focused Approach",
      description:
        "Strategies designed to meet your unique business needs. ",
    },
  ];

  const faqData = [
    {
      question: "What is WordPress SEO optimization? ",
      answer:
        "WordPress SEO optimization involves improving your website’s visibility on search engines through tailored strategies specific to the WordPress platform.",
    },
    {
      question:
        "Why should I choose a WordPress SEO company? ",
      answer:
        "A specialized WordPress SEO company like Wtechy understands the nuances of the platform and can provide more effective optimization strategies. ",
    },
    {
      question:
        "Can I optimize my WordPress site for SEO by myself?",
      answer:
        "While basic SEO can be managed by website owners, professional WordPress SEO services ensure comprehensive optimization for better results. ",
    },
    {
      question: "How long does it take to see results from WordPress SEO?  ",
      answer:
        "SEO results typically take a few months, but with consistent optimization, you’ll see steady improvements in traffic and rankings. ",
    },
    {
      question: " What makes a WordPress SEO service different?  ",
      answer:
        "We offer a tailored approach to WordPress SEO, focusing on both technical and content optimization for superior results. ",
    },
    {
      question: "Is WordPress good for SEO?  ",
      answer:
        "Yes, WordPress is an SEO-friendly platform, and with the right optimization, it can perform exceptionally well in search engine rankings. ",
    },
  ];

  return (
    <div>
      <head>
        <title>Expert WordPress SEO Optimization Services | Wtechy</title>
        <meta title="Expert WordPress SEO Optimization Services | Wtechy" />
        <meta name="description" content="Elevate your website's performance with Wtechy's professional WordPress SEO optimization services. Get customized solutions for maximum results!" />
      </head>
      <InnerBanner
        title={"SEO for WordPress"}
        info={
          "Elevate Your WordPress Site's Visibility with Expert SEO"
        }
      />
      <ImageInfoWrap
        title={
          "Unmatched SEO Service for WordPress "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Wtechy’s WordPress SEO service is designed to leverage the full potential of your WordPress website. Unlike many digital marketing companies that apply generic SEO techniques, we tailor our approach to the unique structure and capabilities of WordPress. Our WordPress SEO optimization service includes advanced strategies such as custom permalink structures, SEO plugin integration, and schema markup. This allows your site to achieve higher rankings on search engines while offering an exceptional user experience. Our focused approach ensures that your WordPress site not only meets search engine standards but excels in performance and engagement. </p>"
        }
      />
      <FullWidthCTASection
        title={"Unlock Your WordPress Site's True Potential "}
      />

      <ImageInfoWrap
        title={"Our customized plan to help you get better results"}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>By partnering with a specialized WordPress SEO company like Wtechy, you’re choosing to invest in a service that goes beyond the basics. Our WordPress SEO optimization service ensures that every element of your website is fine-tuned for maximum search engine visibility. From optimizing content with the right keywords to enhancing site speed and mobile responsiveness, our methods are comprehensive. These efforts translate into improved rankings, increased traffic, and higher conversion rates, ultimately helping your business thrive in a competitive digital landscape. </p>"
        }
      />
      <FullWidthCTASection
        title={"Start Transforming Your WordPress Site Today "}
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>When you choose our WordPress SEO service, you gain access to a partnership focused on long-term success. Our approach includes a full site audit, keyword research, and continuous monitoring to ensure your WordPress site remains optimized as search engine algorithms evolve. We implement best practices to improve your site’s content structure, usability, and overall performance. This comprehensive approach ensures your site not only ranks well but also delivers a superior user experience that keeps visitors engaged and drives conversions.  </p>"
            }
            title={"Partnering for Growth: Our Collaborative Solutions "}
            smallTitle={"Let’s Collaborate for Better SEO Results"}
            showContactBtn={true}
          />
        </div>
      </section>

      <FullWidthCTASection
        title={"Get in Touch for a Customized SEO Plan "}
      />

      <section className="sectionPadding">
        <div className="container">
          
          <div className="row mx-0 mt-5 justify-content-center">
            {wordpressServicesData.map((service, index) => (
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
        title={"Take Action to Improve Your Rankings "}
      />

      <ImageInfoWrap
        title={"Enhance Your WordPress Site with Our SEO Services  "}
        imageUrl={section3Image}
        isReverse={false}
        description={
          "<p>Our SEO for WordPress service offers more than just ranking improvements; it enhances your site’s overall functionality and performance. With a focus on both technical and content optimization, your WordPress site will deliver a superior user experience. Faster load times, better navigation, and high-quality content all contribute to keeping visitors engaged and converting them into loyal customers. By choosing us, you’re investing in a long-term strategy that supports your business growth.  </p>"
        }
      />
      <FullWidthCTASection title={"Ready to See Results? Get Started Today "} />

      <ImageInfoWrap
        title={
          "Improve Your Website's Visibility with Wtechy's SEO "
        }
        imageUrl={section4Image}
        isReverse={true}
        description={
          "<p>We are committed to providing top-quality WordPress SEO services that deliver measurable results. With a focus on both on-page and off-page SEO, our strategies are designed to improve your site’s visibility, authority, and user experience. We understand the unique capabilities of WordPress and use this knowledge to optimize every aspect of your site, ensuring it performs at its best. Trust us to take your WordPress website to the next level. </p>"
        }
      />
      <FullWidthCTASection
        title={"Experience the Benefits of Professional SEO"}
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Seo with Wordpress"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true} 
            smallTitle={"Why Choose Wtechy for SEO for WordPress "}
            title={"Wtechy: Expert SEO Services for Your Success "}
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

export default SeoForWordpress;
