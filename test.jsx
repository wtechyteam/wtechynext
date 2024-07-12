require("dotenv").config();
import SectionTopInfo from "./../../common/SectionTopInfo";
import InnerBanner from "./../../common/InnerBanner";
import { FiChevronsRight } from "react-icons/fi";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { scrollTop } from "./../../common/utils";
import { FiClock } from "react-icons/fi";
import LoadingSection from "./../../common/loadingSection";

import Image from "next/image";

process.env.BASE_URL = "https://cdn.contentful.com";
process.env.SPACE_ID = "czxhot8e1lwm";
process.env.ACCESS_TOKEN = "ZyXIJCKIB-ykyM80vla3zf_3bMdCmW8JnI0t_ghlTXc";


const url = `${process.env.BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}`;
console.log(url);
export default async function Insights() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(process.env.NEXT_PUBLIC_BASE_URL);

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
    {data.items.map((item, index) => {
      const imageId = item.fields.image?.sys?.id;
      const image = imageId ? data.includes.Asset.find(
        (asset) => asset.sys.id === imageId
      ) : null;
      const imageUrl = image?.fields?.file?.url;

      return (
        <div className="col-md-4" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              {imageUrl && (
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={item.fields.titleInsights}
                />
              )}  
              <h5 className="card-title">{item.fields.titleInsights}</h5>
              <p className="card-text">
                {item.fields.shortDescriptionInsights}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
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
