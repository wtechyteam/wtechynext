import InnerBanner from "../../common/InnerBanner";
import section1Image from "../../public/assets/Images/career/carrerSection1.jpg";
import Image from "next/image";
import careerImage from "../../public/assets/Images/career/careerpage.png";
import { fetchEntries } from "../contentful";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import MyForm from "./../contact/contactForm";
import ImageSlider from "./ImageSlider";

const trainingTopics = [
  {
    title: "Search Engine Optimization (SEO)",
    info: "Learn how to rank websites higher on search engines.",
  },
  {
    title: "Google Search Console Tool & Bing Webmaster",
    info: "Understand how to manage and improve website performance.",
  },
  {
    title: "Social Media and Email Marketing",
    info: "Build brand awareness and engage with customers on platforms like Facebook and Instagram, and create email campaigns that connect with your audience.",
  },
  {
    title: "Google and Facebook Ads",
    info: "Run successful advertising campaigns on Google, and learn how to target the right audience with effective Facebook ads.",
  },
  {
    title: "AI Tools and Canva",
    info: "Use advanced AI tools to improve your marketing strategies, and design beautiful visuals for social media and marketing materials.",
  },
  {
    title: "Affiliate Marketing",
    info: "Understand how to make money through affiliate marketing.",
  },
  {
    title: "Content Writing and Blogging",
    info: "Create engaging blog posts to attract readers.",
  },
  {
    title: "WordPress/Wix",
    info: "Build websites using WordPress or Wix.",
  },
  {
    title: "E-commerce Marketing",
    info: "Learn how to grow online stores and increase sales.",
  },
  {
    title: "Google Analytics 4",
    info: "Track and analyze website data to make better decisions.",
  },
  {
    title: "Live Projects",
    info: "Work on real-life projects to gain hands-on experience.",
  },
  {
    title: "Freelancing & Portfolio Creation",
    info: "Learn how to create a professional portfolio and succeed as a freelancer.",
  },
];

const LifeAtWTechy = () => (
  <section className="sectionPadding py-1">
    <div className="container">
      <h2 className="title-xl fw-bold text-center mb-4">
        Discover Our Top Modules
      </h2>
      <p className="text-center">
        We offer a variety of digital marketing topics to help you become an
        expert. Some of our top modules include:
      </p>
      <div className="row">
        {trainingTopics.map((item, index) => (
          <div className="col-lg-3 col-md-6 mb-3" key={index}>
            <div className="cardWrap px-2 py-2">
              <div className="cardIcon cardIcon-Type2">
                <Image src={careerImage} alt={item.title} />
              </div>
              <div className="cardInfo">
                <h2 className="cardTitle title-sm fw-bold">{item.title}</h2>
                <p className="cardDescription text-sm mb-0">{item.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default async function Careers() {
  const contentType = "careers";
  const data = await fetchEntries(contentType);
  const items = data.items || [];

  return (
    <>
      <head>
        <title>We are hiring - Exciting Career Opportunities at WTechy</title>
        <meta title="We're hiring - Exciting Career Opportunities at WTechy" />
        <meta
          name="description"
          content="Career Opportunities - Join our innovative team of dedicated professionals. Apply online now for open digital marketing & Web design and development positions."
        />
      </head>

      <InnerBanner
        title="WTechy Corporate Training Programs"
        info="The Path to Your Digital Success: Our training program helps you grow your skills and turn your dreams into a successful digital career."
      />

<section className="sectionPadding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 pe-lg-4">
        <h2 className="title-xl fw-bold">
          Why Choose Our Training Program?
        </h2>
        <p>
          <strong>
            <i>Comprehensive Learning: </i>
          </strong>
          Our program covers a wide range of topics, including SEO, Google Ads, social media marketing, and more.
        </p>
        <p>
          <strong>
            <i>Flexible Classes: </i>
          </strong>
          We offer both online and in-person classes to fit your schedule.
        </p>
        <p>
          <strong>
            <i>Certification: </i>
          </strong>
          After completing the course, you will get a digital marketing certification to boost your career.
        </p>
        <p>
          <strong>
            <i>Practical Skills: </i>
          </strong>
          You will learn real-world skills that you can use immediately in your job or business.
        </p>
      </div>
      <div className="col-lg-6">
        <video
          autoPlay
          muted
          loop
          className="background-video"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        >
          <source src="/assets/Images/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</section>

      <section className="sectionPadding bg-gray2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="my-3 px-2 py-3">
                <LifeAtWTechy />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeSection3 />
      {/* <ImageSlider /> */}
      <HomeSection4 />
      <section className="sectionPadding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h2 className="title-xl fw-bold">How to Get Started</h2>
              <p>
              Are you ready to become the next digital marketing expert? Enroll now in our Corporate Training Program and start your journey today. 
              </p>
              <div>
                <ul className="contact_usInfo ps-0">
                  <li>
                    <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                    <div>
                      <h5>Corporate Head Office</h5>
                      <p>
                        HSIIDC IT Park, Plot No 6, 7th Floor, Behind Gurudwara
                        Nada Sahib, Sector 22, Panchkula, Haryana 134109
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone me-3 mt-1"></i>
                    <p>
                      <a href="tel:+91-6283857196" title="+91-6283857196">
                        +91-6283857196
                      </a>
                      ,{" "}
                      <a href="tel:+91-7717505073" title="+91-7717505073">
                        +91-7717505073
                      </a>
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope me-3 mt-1"></i>
                    <a href="mailto:info@wtechy.com" title="info@wtechy.com">
                      info@wtechy.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <MyForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
