import InnerBanner from "../../../common/InnerBanner";
import { fetchEntries } from "../../contentful";
import SectionTopInfo from "./../../../common/SectionTopInfo";
import SectionTopInfoLoc from "./../../../common/SectionTopInfoLocations"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Import the renderer
import ImageInfoWrap from "@/common/ImageInfoWrap";
import Image from "next/image";

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

  const image1Id = location.fields.image1?.sys?.id;
  const image1 = image1Id
    ? assets.find((asset) => asset.sys.id === image1Id)
    : null;
  location.image1Url = image1?.fields?.file?.url;

  return location;
}

export default async function LocationState({ params }) {
  const { locationsState } = params;
  const location = await getLocationBySlug(locationsState);

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
          <SectionTopInfoLoc
            isCenter={true}
            isFullWidth={true}
            description={location.fields.desc} // Pass desc here
            title={`SEO Services in ${location.fields.name}`}
            // smallTitle={"Ready to collaborate with a 360-degree digital marketing company?"}
            showContactBtn={false}
          />
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

      
    </>
  );
}
