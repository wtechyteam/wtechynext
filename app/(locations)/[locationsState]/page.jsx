import InnerBanner from '../../../common/InnerBanner';
import { fetchEntries } from "../../contentful";

// Determine the content type based on the country in the slug
function getContentTypeFromSlug(slug) {
  const match = slug.match(/seo-services-([^\/]+?)-/);
  if (match) {
    const countryName = match[1];
    switch (countryName.toLowerCase()) {
      case 'usa':
        return 'usaLocations';
      case 'australia':
        return 'australiaLocations';
      case 'canada':
        return 'canadaLocations';
      default:
        console.warn(`Unknown country: ${countryName}`);
        return 'usaLocations'; // Default content type
    }
  }
  console.warn('Slug does not match expected format');
  return 'usaLocations'; // Default content type if no match
}

async function getLocationBySlug(slug) {
  const contentType = getContentTypeFromSlug(slug);
  console.log(`Fetching data for content type: ${contentType}`);
  const data = await fetchEntries(contentType);
  console.log('Fetched data:', data); // Log fetched data for debugging

  const items = data.items || [];
  const assets = data.includes?.Asset || [];

  console.log('Received slug:', slug);

  if (typeof slug !== 'string') {
    console.error('Invalid slug format');
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
    console.log('Found location:', location);
  } else {
    console.warn(`Location not found for slug: ${slug}`);
  }

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
        <title>
        {`SEO Services Company in ${location.fields.name}`}
        </title>
      </head>
      <InnerBanner
        title={`SEO Services Company in ${location.fields.name}`}
        info={"We Help Your Business Soar to Greater Heights"}
      />
    </>
  );
}
