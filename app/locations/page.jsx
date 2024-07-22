import React from 'react';
import InnerBanner from './../../common/InnerBanner';
import SectionTopInfo from './../../common/SectionTopInfo';
import Link from 'next/link';

const USAstatesData = [
    { id: 1, title: "California", link: "/seo-services-california" },
    { id: 2, title: "Hawaii", link: "/seo-services-hawaii" },
    { id: 3, title: "Washington", link: "/seo-services-washington" },
    { id: 4, title: "Georgia", link: "/seo-services-georgia" },
    { id: 5, title: "Kansas", link: "/seo-services-kansas" },
    { id: 6, title: "NewJersey", link: "/seo-services-new-jersey" },
    { id: 7, title: "NewYork", link: "/seo-services-new-york" },
    { id: 8, title: "Texas", link: "/seo-services-texas" },
    { id: 9, title: "Florida", link: "/seo-services-florida" }
];

const AustraliaStatesData = [
    { id: 1, title: "WesternAustralia", link: "/seo-services-western-australia" },
    { id: 2, title: "Victoria", link: "/seo-services-victoria" },
    { id: 3, title: "SouthAustralia", link: "/seo-services-south-australia" },
    { id: 4, title: "SouthWales", link: "/seo-services-south-wales" },
    { id: 5, title: "Queensland", link: "/seo-services-queensland" }
];

const CanadaStatesData = [
    { id: 2, title: "Quebec", link: "/seo-services-quebec" },
    { id: 3, title: "Ontario", link: "/seo-services-ontario" },
    { id: 4, title: "Alberta", link: "/seo-services-alberta" },
    { id: 5, title: "BritishColumbia", link: "/seo-services-british-columbia" },
    { id: 6, title: "Saskatchewan", link: "/seo-services-saskatchewan" }
];

const LocationsFront = () => {
  return (
    <>
      <InnerBanner
        title={'Locations We Serve In'}
      />
      <section className="sectionPadding bg-gray">
        <div className="container">
          <SectionTopInfo
            smallTitle={'SEO services'}
            title={'USA'}
            text={'Services we offer in the states of USA'}
          />
        </div>
        <div className='Wrapper' style={{display: 'flex', gap:'2rem', marginLeft: '18rem', marginTop: '4rem'}}>
          {USAstatesData.map((item) => (
            <section key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={`/locations${item.link}`}>
                      <a className='title-xl fw' style={{ textDecoration: 'none', fontSize: '25px' }}>{item.title}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {/* Repeat for Australia and Canada */}
        <div className="container">
          <SectionTopInfo
            title={'Australia'}
            text={'Services we offer in the states of Australia'}
          />
        </div>
        <div className='Wrapper' style={{display: 'flex', gap:'2rem', marginLeft: '18rem', marginTop: '4rem'}}>
          {AustraliaStatesData.map((item) => (
            <section key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={`/locations${item.link}`}>
                      <a className='title-xl fw' style={{ textDecoration: 'none', fontSize: '25px' }}>{item.title}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="container">
          <SectionTopInfo
            title={'Canada'}
            text={'Services we offer in the states of Canada'}
          />
        </div>
        <div className='Wrapper' style={{display: 'flex', gap:'2rem', marginLeft: '18rem', marginTop: '4rem'}}>
          {CanadaStatesData.map((item) => (
            <section key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={`/locations${item.link}`}>
                      <a className='title-xl fw' style={{ textDecoration: 'none', fontSize: '25px' }}>{item.title}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

export default LocationsFront;
