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
      <head>
      <title>Digital Marketing Strategies - Read Our Expert Insights</title>
        <meta title="Digital Marketing Strategies - Read Our Expert Insights"/>
        <meta name="description"
        content="Find the latest insights into digital marketing strategies and trends on WTechy's blog. We reveal the secrets & best practices we use for our clients. Read more!"/>
      </head>
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
                <div style={styles.card}>
                  <div className="card-body">
                    {imageUrl && (
                      <div style={styles.imageContainer}>
                        <Image
                          src={`https:${imageUrl}`}
                          alt={item.fields.titleInsights}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                    <div style={styles.content}>
                      <h5 style={styles.title}>{item.fields.title}</h5>
                      <p style={styles.description}>{item.fields.description}</p>
                      <Link style={styles.link}
                        href={`/insights/${item.fields.slug}`}
                        className="btn btn-primary"
                      >
                        Read more
                      </Link>
                    </div>
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

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '100%',
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    height: '450px', // Set a fixed height
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '200px',
  },
  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1, // Ensure content takes up remaining space
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 8px 0',
  },
  description: {
    fontSize: '1em',
    color: '#555',
    margin: '0 0 16px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    background: '#0070f3',
    borderRadius: '4px',
    textAlign: 'center',
    textDecoration: 'none',
    alignSelf: 'flex-start',
    marginTop: 'auto', // Push the button to the bottom of the card content
  },

  link: {
    marginTop: 'auto',
    
  }
};
