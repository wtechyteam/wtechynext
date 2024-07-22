import { fetchEntries } from "../../contentful";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getInsights(contentType = "componentDuplex") {
  const data = await fetchEntries(contentType);
  const items = data.items || [];
  const assets = data.includes?.Asset || [];

  return items.map((item) => {
    const imageId = item.fields.image?.sys?.id;
    const image = imageId
      ? assets.find((asset) => asset.sys.id === imageId)
      : null;
    item.imageUrl = image?.fields?.file?.url;
    return item;
  });
}

async function getInsightBySlug(slug) {
  const insights = await getInsights();
  return insights.find((insight) => insight.fields.slug === slug);
}

function getRelatedPosts(currentInsight, allInsights) {
  const currentCategory = currentInsight.fields.category;
  return allInsights
    .filter(
      (insight) =>
        insight.fields.category === currentCategory &&
        insight.fields.slug !== currentInsight.fields.slug
    )
    .slice(0, 6); // Limit to 4 related posts
}

const options = {
  renderNode: {
    // Customize rendering for different node types as needed
  },
  renderMark: {
    // Customize rendering for different mark types as needed
  },
  renderInline: {
    // Customize rendering for different inline types as needed
  },
};

export default async function InsightPage({ params }) {
  const { insightsDescr } = params;
  const insights = await getInsights();
  const insight = insights.find((item) => item.fields.slug === insightsDescr);

  if (!insight) {
    return <div>Insight not found</div>;
  }

  const relatedPosts = getRelatedPosts(insight, insights);

  return (
    <div style={styles.page}>
      {/* ---------innerBanner------------- */}
      <section className="innerBanner text-center" style={styles.innerBanner}>
        <div className="container position-relative">
          <div className="col-lg-7 mx-auto">
            <h1 className="title-xl fw-bold">{insight.fields.title}</h1>
            <p>{insight.fields.description}</p>
          </div>
        </div>
      </section>
      {/* ------------------------------------------ */}

      <div style={styles.contentWrapper}>
        <section className="sectionPadding" style={styles.mainContent}>
          <div style={styles.container}>
            <>
              <div className="row g-5" style={styles.row}>
                <div className="col-lg-7" style={styles.col}>
                  <h2 className="title-xl fw-bold">{insight.fields.title}</h2>
                  {insight.imageUrl && (
                    <Image
                      style={styles.image}
                      src={`https:${insight.imageUrl}`}
                      title={insight.fields.title}
                      alt={insight.fields.title}
                      layout="responsive"
                      width={300}
                      height={475}
                    />
                  )}
                  <div style={styles.body} className="py-4">
                    {documentToReactComponents(insight.fields.body, options)}
                  </div>
                </div>
                <div className="col-lg-5" style={styles.relatedColWrapper}>
                  <div style={styles.relatedCol}>
                    <h3 style={{padding: '20px'}}>Related Posts</h3>
                    <div className="row g-3" style={styles.relatedPostsContainer}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.fields.slug}
                          href={`/insights/${post.fields.slug}`}
                          legacyBehavior
                          passHref
                        >
                          <a className="col-12" style={styles.relatedPost}>
                            {post.imageUrl && (
                              <div style={styles.relatedImageContainer}>
                                <Image
                                  style={styles.relatedImage}
                                  src={`https:${post.imageUrl}`}
                                  title={post.fields.title}
                                  alt={post.fields.title}
                                  layout="fixed"
                                  width={100}
                                  height={75}
                                />
                              </div>
                            )}
                            <h4 style={styles.relatedTitle}>
                              {post.fields.title}
                            </h4>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerBanner: {
    width: "100%",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  mainContent: {
     flex: 1,
    padding: "50px 20px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start", // Changed to flex-start to align content correctly
    padding: "0 20px",
  },
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  col: {
    // flex: "1", // Ensures the main content column takes available space
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  relatedColWrapper: {
    width: "300px", // Ensures the related column has a fixed width
    padding: "0", // Reduce padding to minimize gap
    marginLeft: "5px", // Reduce margin to 5px
  },
  relatedCol: {
    position: "sticky",
    top: "100px", // Adjust the top value as needed
    alignSelf: "flex-start",
    padding: "0", // Reduce padding to 0
  },
  title: {
    textAlign: "center",
  },
  image: {
    maxWidth: "80%",
    height: "auto",
  },
  description: {
    textAlign: "center",
  },
  body: {
    textAlign: "left",
    maxWidth: "800px",
    width: "100%",
  },
  relatedPostsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  relatedPost: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
    marginBottom: "10px",
    width: "100%",
  },
  relatedImageContainer: {
    marginRight: "10px",
  },
  relatedImage: {
    maxWidth: "100px",
    height: "75px",
  },
  relatedTitle: {
    fontSize: "1.1rem",
    marginLeft: "10px", // Add margin to separate title from image
  },
};
