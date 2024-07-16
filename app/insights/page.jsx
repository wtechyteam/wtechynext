import SectionTopInfo from "./../../common/SectionTopInfo";
import InnerBanner from "./../../common/InnerBanner";
import { FiChevronsRight } from "react-icons/fi";
import { Container } from "react-bootstrap";
import Link from "next/link";

import { scrollTop } from "./../../common/utils";
import { FiClock } from "react-icons/fi";
import LoadingSection from "./../../common/loadingSection";

import Image from "next/image";
import { fetchEntries } from "./../contentful";

export const revalidate = 60; // Revalidate at most once every 60 seconds

export default async function Insights() {
  const contentType = 'componentDuplex'; 
  const data = await fetchEntries(contentType);
  const items = data.items || [];
  const assets = data.includes?.Asset || [];

  return (
    <>
      <InnerBanner
        title={"Insights"}
        info={
          "Get smarter marketing insights with Wtechy. Learn how to optimize campaigns, understand your audience, and make data-driven decisions to grow your business."
        }
      />
      <section className="sectionPadding">
        <Container>
          <SectionTopInfo
            isCenter={true}
            smallTitle={"Insights"}
            title={"Our Latest Insights"}
            text={
              "Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape."
            }
          />
        </Container>
      </section>
      <div className="container">
        <div className="row">
          {items.map((item, index) => {
             
            const imageId = item.fields.image?.sys?.id;
            const image = imageId
              ? assets.find((asset) => asset.sys.id === imageId)
              : null;
            const imageUrl = image?.fields?.file?.url;

            return (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    {imageUrl && (
                      <Image
                        src={`https:${imageUrl}`}
                        alt={item.fields.titleInsights}
                        width={300}
                        height={200}
                      />
                    )}
                    <h5 className="card-title">{item.fields.title}</h5>
                    <p className="card-text">{item.fields.description}</p>
                    <Link
                      href={`/insights/${item.fields.slug}`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
