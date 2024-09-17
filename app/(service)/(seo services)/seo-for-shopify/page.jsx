"use client";
import InnerBanner from "./../../../../common/InnerBanner";
import ImageInfoWrap from "./../../../../common/ImageInfoWrap";
import section1Image from "./../../../../public/assets/Images/services/SEO.webp";
import section2Image from "./../../../../public/assets/Images/services/what-we-do-service.png";

import SectionTopInfo from "./../../../../common/SectionTopInfo";
import FullWidthCTASection from "./../../../../common/FullWidthCTASection";
import FAQs from "./../../../../common/FAQs";

const SeoForShopify = () => {
  //   const faqData = [
  //     {
  //       question: "Can I use WordPress to develop an E-commerce website?",
  //       answer:
  //         "<p>SWordPress offers a complete web solution to you, it is creating either a website or blogging, and it is an ideal solution for you. It is a static website, and it gives you enhanced results; a static WordPress website helps you attain better SEO and improved search engine rankings. There are several benefits of creating a website on WordPress; some of them are:</p><ul><li>It has an open-source platform, which means you can quickly revolutionize WordPress software by changing plug-in, themes, content, and so on.</li><li>WordPress is a secure web development tool, and it persistently updates the platform with the latest safety policies.</li><li>It is accessible to code, so the business owners have a significant advantage of handling their website once it is created.</li></ul>",
  //     },
  //     {
  //       question: "Are WordPress websites mobile-responsive?",
  //       answer:
  //         "<p>WordPress is a dynamic platform, allowing users to create mobile-friendly websites. It offers you a wide array of options; from adding themes to set up the contrasts, you can design a template on your own.</p><p>Our team of high-end WordPress developers makes sure to provide you with nothing but the best mobile-responsive websites, which will productively help you attract traffic to your website. In addition to this, it will also help you to rank on the top of the search engine result pages.</p>",
  //     },
  //     {
  //       question: "How much time does it consume to develop a WordPress website?",
  //       answer:
  //         "<p>To create a website on WordPress, you need first to design a custom theme, which will take 1 or 2 weeks. The next step involves the development of the website, which might take 3 to 4 weeks to code, and the last step requires content, which includes the creation of content adding images that will undoubtedly lead up to 2 weeks.</p><p>The time entirely depends upon the project’s demand, and it will consume from 10 to 12 weeks to develop a website on WordPress.</p>",
  //     },
  //     // Add more FAQ items as needed
  //   ];
  return (
    <div>
      {/* <head>
        <title>WordPress Website Development Services | Craft Your Website</title>
        <meta title="WordPress Website Development Services | Craft Your Website"/>
        <meta
          name="description"
          content="Attract & Convert Leads with a Custom WordPress Website Development services. Our Digital Marketing Agency Builds SEO-Friendly Websites on WordPress."/>
      </head> */}
      <InnerBanner
        title={"SEO for Shopify "}
        info={
          "Grow Your Shopify Store’s Traffic and Sales with Our Simple and Effective SEO Strategies "
        }
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={"What Sets Us Apart in Shopify SEO "}
        imageUrl={section1Image}
        description={
          "<p>Many digital marketing firms offer generalized SEO services, but at Wtechy, we specialize in Shopify SEO optimization tailored to the unique needs of Shopify stores. Our approach begins with an in-depth analysis of your store’s structure, product pages, and target audience. This allows us to identify and implement specific strategies that boost organic traffic and improve conversion rates. Unlike traditional SEO agencies, we understand the nuances of Shopify's platform, ensuring that every aspect of your online store is optimized for search engines. </p>"
        }
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection title={"Discover the difference with us "} />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={"bg-gray"}
        title={"How We Can Improve Your Shopify Rankings"}
        imageUrl={section2Image}
        description={
          "<p>Our Shopify SEO agency is designed to enhance your store's visibility on search engines, driving more qualified traffic to your site. We use proven techniques such as keyword optimization, content strategy, and technical SEO improvements to ensure that your store ranks higher for relevant search terms. By focusing on Shopify-specific optimizations, we help your store stand out in a crowded market, ultimately leading to increased sales and customer loyalty. </p>"
        }
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={
          "Achieve top rankings with our expertise. Ready to collaborate on your Shopify SEO journey? "
        }
      />

      <section className="sectionPadding services ">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={
              "<p>Partnering with Wtechy means gaining access to a team of experts dedicated to improving every aspect of your Shopify store’s SEO. Our services include comprehensive keyword research, on-page optimization, and ongoing performance monitoring to ensure sustained growth. With our specialized knowledge, you can expect a noticeable improvement in your store’s search engine rankings and overall online presence.Research: Identifying the most relevant and high-traffic keywords for your Shopify store.</p>" 
                       }
            title={"What you'll get with our Shopify SEO Company "}
            smallTitle={"Ready to collaborate on your Shopify SEO journey?"}
            showContactBtn={true}
          />
        </div>
      </section>
      <ImageInfoWrap
        isReverse={true}
        title={"Innovative WordPress Website Development for Businesses"}
        imageUrl={section1Image}
        description={
          "<p>When the users get the desired information on the website, they intend to stick to the landing page, which becomes crucial for the business owners to create a website that will give eloquent information, be user-friendly, and be flexible.</p><p>WordPress is one of the most popular website development platforms, and it has managed to present the users with a dynamic, swift, supple, easy-to-use website, which directly helps to adhere to the visitors’ attention. It is user-friendly for the visitors and the business owners, as without any support from the development team, they can maintain their website on their own.</p><p>WordPress is an exceptional web development podium to manage websites of any size and kind with substantial assistance and a dynamic platform. Having a business website makes it supple for any company to accomplish its business objectives, which is why our WordPress development services are adapted to the precise requirements. For that reason, we make sure to create a unique website that connects with your customers and generates conversions.</p><p>Our developers construct a contemporary and eye-catching website that imitates your product and its significance. In addition to this, we make sure to offer you an informed website that will catch the attention of your potential spectators and will aid in engendering the leads.</p>"
        }
      />
      {/* ======New Section Start ====== */}
      {/* ======New Section Start ====== */}
      {/* <section className="sectionPadding">
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={"FAQs"}
            title={"FAQs for WordPress Development"}
          />
          <FAQs faqList={faqData} />
        </div>
      </section> */}
    </div>
  );
};

export default SeoForShopify;
