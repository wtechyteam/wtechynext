'use client'
import { useParams } from 'next/navigation';
import InnerBanner from '../../common/InnerBanner';

const LocationState = () => {
  const params = useParams();
  const slug = params.slug;

  // If slug is an array (since [...slug] can capture multiple segments), join it to form the state name
  const state = slug ? slug.join(' ').replace(/seo-services-/g, '').replace(/-/g, ' ') : '';

  return (
    <>
      <InnerBanner
        title={`SEO Services Company in ${state.charAt(0).toUpperCase() + state.slice(1)}`}
        info={"We Help Your Business Soar to Greater Heights"}
      />
      <div className="container">
        <h2>SEO Services in {state.charAt(0).toUpperCase() + state.slice(1)}</h2>
        {/* Add more content specific to the state */}
      </div>
    </>
  )
}

export default LocationState;
