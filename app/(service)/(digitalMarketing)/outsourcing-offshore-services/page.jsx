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

const OutsourcingOffshore = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  const seoServicesData = [
    {
      icon: serviceIcon1,
      title: "Comprehensive SEO Audits",
      description:
        "We perform in-depth audits to identify areas of improvement, ensuring that your website aligns with the latest SEO best practices.",
    },
    {
      icon: serviceIcon2,
      title: "Keyword Research & Optimization",
      description:
        "Our team conducts extensive research to pinpoint high-value keywords that can drive traffic and conversions, refining your content to target these effectively.",
    },
    {
      icon: serviceIcon1,
      title: "Content Creation & Marketing",
      description:
        "Outsource your content needs to our experienced writers who craft engaging, SEO-friendly content designed to captivate and convert.",
    },
    {
      icon: serviceIcon2,
      title: "Link Building Strategies",
      description:
        "Strengthen your website’s authority with targeted link-building efforts that focus on acquiring high-quality, relevant backlinks.",
    },
    {
      icon: serviceIcon1,
      title: "Technical SEO Enhancements",
      description:
        "Optimize site speed, improve mobile usability, and ensure that your website’s technical elements meet search engine standards.",
    },
    {
      icon: serviceIcon2,
      title: "Performance Tracking & Reporting",
      description:
        "Stay informed with regular reports detailing your site’s performance, keyword rankings, and areas of growth.",
    },
    {
      icon: serviceIcon1,
      title: "Local SEO Tactics",
      description:
        "Expand your local reach with services tailored to improve your presence in geographically targeted search results.",
    },
    {
      icon: serviceIcon2,
      title: "Competitor Analysis",
      description:
        "Gain insights into your competitors' strategies, allowing you to refine your approach and stay ahead in the market.",
    },
    {
      icon: serviceIcon1,
      title: "Dedicated Account Management",
      description:
        "Benefit from personalized support and guidance, ensuring your SEO strategy is continuously aligned with your business objectives.",
    },
  ];
  

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: "Expert Strategy Development",
      description:
" Leverage our knowledge to craft strategies that align with your business needs"    },
    {
      icon: serviceIcon2,
      title: "Proven Results",
      description:
"Our data-driven approach ensures your SEO efforts yield tangible outcomes. "    },
    {
      icon: serviceIcon1,
      title: "Customized Solutions",
      description:
"Tailored services that adapt to the unique challenges of your industry. "    },
    {
      icon: serviceIcon2,
      title: "Scalable Services",
      description:
"Expand your SEO efforts as your business grows without worrying about resource constraints."    },
    {
      icon: serviceIcon1,
      title: "Ethical Practices",
      description:
"We adhere to industry standards and ethical practices, ensuring sustainable growth."    },
    {
      icon: serviceIcon2,
      title: "Continuous Support",
      description:
"We adhere to industry standards and ethical practices, ensuring sustainable growth."    },
  ]

  const faqData = [
    {
      question: "What are the benefits of outsourcing SEO services?",
      answer:
        "Outsourcing allows you to access expert resources, reduce costs, and focus on your core business activities.",
    },
    {
      question: "How does an SEO outsourcing company improve my search engine rankings?",
      answer:
        "By implementing data-driven strategies and continuous optimization, an SEO outsourcing company can significantly enhance your online visibility.",
    },
    {
      question: "What’s the difference between SEO outsourcing services and in-house SEO?",
      answer:
        "Outsourcing provides scalability, expertise, and flexibility, often at a lower cost than maintaining an in-house team.",
    },
    {
      question: "Can outsourcing SEO services help with content marketing?",
      answer:
        "Yes, SEO outsourcing agencies often include content creation as part of their services, helping you produce optimized and engaging content.",
    },
    {
      question: "Is it safe to outsource SEO services?",
      answer:
        "Absolutely, as long as you work with a reputable company that follows ethical SEO practices.",
    },
    {
      question: "How do I choose the right outsource SEO agency?",
      answer:
        "Look for a company with a proven track record, transparent practices, and the ability to provide tailored strategies that align with your business goals.",
    },
  ];
  

  return (
    <div>
      <head>
      <title>Expert SEO Outsourcing Services Company | Wtechy</title>
        <meta title="Expert SEO Outsourcing Services Company | Wtechy"/>
        <meta
          name="description"
          content="Wtechy is a trusted SEO outsourcing company, offering custom strategies that enhance search engine performance and drive long-term organic traffic growth."
        />
      </head>
      <InnerBanner
        title={"Outsourcing/Offshore Services"}
        info={
          "Elevate your business with cost-effective, high-quality offshore services."
        }
      />
      <ImageInfoWrap
        title={"Our SEO Outsourcing Stands Out in a Crowded Market "}
        imageUrl={section2Image}
        isReverse={true}
        description={
          "<p>Outsourcing SEO services through Wtechy offers businesses a strategic advantage in the competitive digital landscape. With our tailored approach, we focus on providing specialized, reliable, and efficient services that are unmatched in the market. Unlike other companies that offer generic solutions, our SEO outsourcing services are designed to cater to your unique business needs, delivering results that align with your goals. Our approach stands out due to our commitment to understanding your business and its specific challenges. We leverage a team of seasoned professionals equipped with the latest tools and techniques, ensuring that your SEO strategy is not only up-to-date but also ahead of the curve. By outsourcing SEO services to Wtechy, businesses can reduce operational costs, access expert resources, and gain the flexibility to scale their marketing efforts without the burden of managing in-house teams.</p>"
        }
      />
      <FullWidthCTASection
        title={"Enhance Your Digital Strategy Today "}
      />

      <ImageInfoWrap
        title={"Maximizing Results with Our SEO Outsourcing Services Outperform Competitors "}
        imageUrl={section1Image}
        isReverse={false}
        description={
          "<p>Wtechy’s SEO outsourcing services empower businesses to achieve superior results by focusing on data-driven strategies and continuous optimization. Our team delves deep into your market, identifying key opportunities that drive traffic and improve rankings. We don't just aim for higher search engine visibility; our goal is to convert that visibility into tangible results, such as increased website traffic, better lead quality, and higher conversion rates. By partnering with a dedicated outsource SEO company like Wtechy, you gain access to an expansive network of professionals who bring diverse skill sets to the table. This ensures that every aspect of your SEO strategy is handled with expertise, from technical audits to content creation, link building, and beyond.</p>"
        }
      />
      <FullWidthCTASection
        title={
          "Drive Results That Matter "
        }
      />

      <ImageInfoWrap
        title={"Benefits of Partnering: Superior SEO Outsourcing Result "}
        imageUrl={section3Image}
        isReverse={true}
        description={
          "<p>Choosing Wtechy means partnering with an outsourcing SEO agency that prioritizes your success. Our services are designed to be adaptable, allowing you to scale your SEO efforts according to your business needs. We offer end-to-end solutions that encompass everything from initial strategy development to ongoing optimization and reporting, giving you the peace of mind that every aspect of your SEO is in expert hands. Our SEO outsourcing service not only enhances your online visibility but also ensures that your brand message resonates with your target audience. We take a holistic approach, analyzing every element of your website to ensure it is optimized for both search engines and users, driving sustainable growth over time.</p>"        }
      />

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            smallTitle={"Collaborate with a proven SEO outsourcing company."}
            isFullWidth={true}
            title={
              "Key Elements of Our Outsourcing/Offshore Services"
            }
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {seoServicesData.map((service, index) => (
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
        title={"Start Optimizing Your Online Presence Now "}
      />

      <ImageInfoWrap
        title={"The Unmatched Quality of Our SEO Outsourcing Solutions "}
        imageUrl={section1Image}
        isReverse={false}
        description={
            "<p>Wtechy's outsource SEO agency doesn’t just offer services; we provide a partnership that enhances your brand’s online presence. Our SEO outsourcing services include comprehensive strategies tailored to address your unique needs, resulting in enhanced user experience, better site performance, and improved search engine rankings. This structured approach helps your business stay relevant and competitive in a constantly evolving digital landscape. </p>"        }
      />
      <FullWidthCTASection
        title={"Ready to Take the Next Step? "}
      />

      <ImageInfoWrap
        title={
          "Get the best performance and reach with our SEO Outsourcing Services "
        }
        imageUrl={section2Image}
        isReverse={true}
        description={
            "<p>Working with Wtechy means engaging with a company that stands behind the quality of its work. Our outsource SEO services are built on a foundation of transparency, expertise, and a commitment to delivering measurable results. Each campaign is meticulously managed to ensure that we are not just meeting expectations but consistently exceeding them. </p>"        }
      />
      <FullWidthCTASection
        title={"Discover the Benefits of Partnering with Us "}
      />

      
      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs About Outsourcing/Offshore Services "}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"Wtechy and Outsourcing/Offshore Services "}
            title={"Why Choose Wtechy for Outsourcing/Offshore Services?"}
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

export default OutsourcingOffshore;
