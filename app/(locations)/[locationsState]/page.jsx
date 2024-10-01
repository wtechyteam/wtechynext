"use client";
import InnerBanner from "../../../common/InnerBanner";
import { fetchEntries } from "../../contentful";
import SectionTopInfo from "./../../../common/SectionTopInfo";
import SectionTopInfoLoc from "./../../../common/SectionTopInfoLocations";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Import the renderer
import ImageInfoWrap from "@/common/ImageInfoWrap";
import ImageInfoWrapLoc from "@/common/ImageInfoWrapLoc";
import Image from "next/image";
import serviceIcon1 from "./../../../public/assets/Images/homepage/digitalMarketing.png";
import serviceIcon2 from "./../../../public/assets/Images/homepage/MarketingStrategies.png";
import HubspotForm from "react-hubspot-form";

// Determine the content type based on the country in the slug
function getContentTypeFromSlug(slug) {
  const match = slug.match(/seo-services-([^\/]+?)-/);
  if (match) {
    const countryName = match[1];
    switch (countryName.toLowerCase()) {
      case "usa":
        return "usaLocations";
      case "australia":
        return "australiaLocations";
      case "canada":
        return "canadaLocations";
      default:
        console.warn(`Unknown country: ${countryName}`);
        return "usaLocations"; // Default content type
    }
  }
  console.warn("Slug does not match expected format");
  return "usaLocations"; // Default content type if no match
}
async function getLocationBySlug(slug) {
  const contentType = getContentTypeFromSlug(slug);
  console.log(`Fetching data for content type: ${contentType}`);
  const data = await fetchEntries(contentType);
  console.log("Fetched data:", data); // Log fetched data for debugging

  const items = data.items || [];
  const assets = data.includes?.Asset || [];

  console.log("Received slug:", slug);

  if (typeof slug !== "string") {
    console.error("Invalid slug format");
    return null;
  }

  // Use the exact slug for finding the location
  const location = items.find((item) => item.fields.slug === slug);

  if (location) {
    const imageId = location.fields.image?.sys?.id;
    const image = imageId
      ? assets.find((asset) => asset.sys.id === imageId)
      : null;
    location.imageUrl = image?.fields?.file?.url;
    console.log("Found location:", location);
  } else {
    console.warn(`Location not found for slug: ${slug}`);
  }

  // Retrieve image1
  const image1Id = location.fields.image1?.sys?.id;
  const image1 = image1Id
    ? assets.find((asset) => asset.sys.id === image1Id)
    : null;
  location.image1Url = image1?.fields?.file?.url;

  // Retrieve image2
  const image2Id = location.fields.image2?.sys?.id;
  const image2 = image2Id
    ? assets.find((asset) => asset.sys.id === image2Id)
    : null;
  location.image2Url = image2?.fields?.file?.url;

  // Retrieve image2
  const image3Id = location.fields.image3?.sys?.id;
  const image3 = image3Id
    ? assets.find((asset) => asset.sys.id === image3Id)
    : null;
  location.image3Url = image3?.fields?.file?.url;

  return location;
}

export default async function LocationState({ params }) {
  const { locationsState } = params;
  const location = await getLocationBySlug(locationsState);

  const serviceData = location.fields.services;
  const serviceData2 = location.fields.services2;
  console.log(typeof location.fields.services);

  if (!location) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <head>
        <title>{`SEO Services Company in ${location.fields.name}`}</title>
      </head>
      <InnerBanner
        title={`SEO Services Company in ${location.fields.name}`}
        info={"We Help Your Business Soar to Greater Heights"}
      />
      <section className="sectionPadding services">
        <div className="container">
          <div className="flex-container">
            <SectionTopInfoLoc
              isCenter={true}
              isFullWidth={true}
              description={location.fields.desc} // Pass desc here
              title={`SEO Services in ${location.fields.name}`}
              showContactBtn={false}
            />
            <div className="form-container">
              <HubspotForm
                portalId="47335383"
                formId="da5c0a33-49ac-42c9-a002-6c98afc04258"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionPadding services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            description={location.fields.desc2} // Pass desc here
            title={`SEO Services in ${location.fields.name}`}
            smallTitle={`Area, We Cover in ${location.fields.name}`}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="sectionPadding services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            description={location.fields.desc3} // Pass desc here
            title={`See How Our ${location.fields.name}, SEO Clients get Results`}
            // smallTitle={`Area, We Cover in ${location.fields.name}`}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="sectionPadding services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            description={location.fields.desc4} // Pass desc here
            title={`Are you Ready to take your ${location.fields.name} Business National and International?`}
            smallTitle={`Here’s How it is Done`}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="sectionPadding services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            isLeftAligned={true}
            description={location.fields.desc5} // Pass desc here
            title={`SEO Services ${location.fields.name}`}
            smallTitle={`We Seek Traffic, Sales, and Growth for Your Business`}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="sectionPadding services">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={
                location.image1Url
                  ? `https:${location.image1Url}`
                  : "/placeholder.jpg"
              }
              alt={`Image for ${location.fields.name}`} // Alt text for accessibility
              layout="intrinsic" // Use intrinsic layout for fixed width and height
              width={600} // Desired width
              height={600} // Desired height
              style={{
                maxWidth: "100%", // Ensure it scales down appropriately for smaller screens
                height: "auto", // Maintain aspect ratio
              }}
            />
          </div>
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            // description={location.fields.desc5} // Pass desc here
            title={`SEO Services ${location.fields.name}`}
            smallTitle={`We Seek Traffic, Sales, and Growth for Your Business`}
            showContactBtn={false}
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {serviceData.map((service, index) => (
              <div className="col-lg-6 col-md-6 px-0 " key={index}>
                <div className="cardWrap cardType1 h-100 ">
                  <div className="cardIcon cardIcon-Type1">
                    <Image src={serviceIcon1} alt={service.title} />
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

      <ImageInfoWrapLoc
        title={` Reasons Why Pick us as your SEO Agency in  ${location.fields.name}`}
        imageUrl={
          location.image2Url
            ? `https:${location.image2Url}`
            : "/placeholder.jpg"
        }
        isReverse={false}
        description={location.fields.desc6}
      />

      <ImageInfoWrapLoc
        title={`Reasons Why Pick us as your SEO Agency in  ${location.fields.name}`}
        imageUrl={
          location.image3Url
            ? `https:${location.image3Url}`
            : "/placeholder.jpg"
        }
        isReverse={true}
        description={location.fields.desc7}
      />

      <section className=" services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={false}
            isFullWidth={true}
            description={location.fields.desc8} // Pass desc here
            title={`What Local SEO Ranking Factors do ${location.fields.name} Business need to Cover? `}
            // smallTitle={"Ready to collaborate with a 360-degree digital marketing company?"}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className=" services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={false}
            isFullWidth={true}
            description={location.fields.desc9} // Pass desc here
            title={`How do we do Local SEO for Alafaya Businesses? `}
            // smallTitle={"Ready to collaborate with a 360-degree digital marketing company?"}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            description={location.fields.desc10} // Pass desc here
            title={`Why do ${location.fields.name} Business need SEO Services Company`}
            // smallTitle={`Area, We Cover in ${location.fields.name}`}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="services">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={false}
            isFullWidth={true}
            description={location.fields.desc11} // Pass desc here
            title={`Industries`}
            // smallTitle={`Area, We Cover in ${location.fields.name}`}
            showContactBtn={false}
          />
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            // description={location.fields.desc5} // Pass desc here
            title={`Services`}
            // smallTitle={`We Seek Traffic, Sales, and Growth for Your Business`}
            showContactBtn={false}
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {serviceData2.map((service, index) => (
              <div className="col-lg-6 col-md-6 px-0 " key={index}>
                <div className="cardWrap cardType1 h-100 ">
                  <div className="cardIcon cardIcon-Type1">
                    <Image src={serviceIcon2} alt={service.title} />
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
    </>
  );
}
