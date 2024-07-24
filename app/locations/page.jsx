import InnerBanner from "../../common/InnerBanner";
import SectionTopInfo from "../../common/SectionTopInfo";
import Link from "next/link";
import { fetchEntries } from "../contentful";

const contentTypes = {
  usa: 'usaLocations',
  canada: 'canadaLocations',
  australia: 'australiaLocations'
};

async function fetchAllLocations() {
  const usaData = await fetchEntries(contentTypes.usa);
  const canadaData = await fetchEntries(contentTypes.canada);
  const australiaData = await fetchEntries(contentTypes.australia);

  return {
    usaItems: usaData.items || [],
    canadaItems: canadaData.items || [],
    australiaItems: australiaData.items || []
  };
}

export default async function LocationsFront() {
  const { usaItems, canadaItems, australiaItems } = await fetchAllLocations();

  return (
    <>
    <head>
    <title>Locations We Serve In</title>
    {/* <meta title="Digital Marketing Strategies - Read Our Expert Insights"/>
        <meta name="description"
        content="Find the latest insights into digital marketing strategies and trends on WTechy's blog. We reveal the secrets & best practices we use for our clients. Read more!"/>
       */}
    </head>
      <InnerBanner title={"Locations We Serve In"} />
      <section className="sectionPadding bg-gray">
        <div className="container">
          <SectionTopInfo
            smallTitle={"SEO services"}
            title={"USA"}
            text={"Services we offer in the states of USA"}
          />
        </div>
        <div className="Wrapper" style={{ display: "flex", gap: "2rem", marginLeft: "18rem", marginTop: "4rem" }}>
          {usaItems.map((item) => (
            <section key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={`${item.fields.slug}`} legacyBehavior>
                      <a className="title-xl fw" style={{ textDecoration: "none", fontSize: "25px" }}>
                        {item.fields.name}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="container">
          <SectionTopInfo
            title={"Australia"}
            text={"Services we offer in the states of Australia"}
          />
        </div>
        <div className="Wrapper" style={{ display: "flex", gap: "2rem", marginLeft: "18rem", marginTop: "4rem" }}>
          {australiaItems.map((item) => (
            <section key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={`${item.fields.slug}`} legacyBehavior>
                      <a className="title-xl fw" style={{ textDecoration: "none", fontSize: "25px" }}>
                        {item.fields.name}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="container">
          <SectionTopInfo
            title={"Canada"}
            text={"Services we offer in the states of Canada"}
          />
        </div>
        <div className="Wrapper" style={{ display: "flex", gap: "2rem", marginLeft: "18rem", marginTop: "4rem" }}>
          {canadaItems.map((item) => (
            <section key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={`${item.fields.slug}`} legacyBehavior>
                      <a className="title-xl fw" style={{ textDecoration: "none", fontSize: "25px" }}>
                        {item.fields.name}
                      </a>
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
