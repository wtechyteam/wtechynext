import { fetchEntries } from "../../contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

async function getInsightBySlug(slug) {
  const contentType = 'componentDuplex';
  const data = await fetchEntries(contentType);
  const items = data.items || [];
  const assets = data.includes?.Asset || [];
  
  const insight = items.find(item => item.fields.slug === slug);

  if (insight) {
    const imageId = insight.fields.image?.sys?.id;
    const image = imageId ? assets.find((asset) => asset.sys.id === imageId) : null;
    insight.imageUrl = image?.fields?.file?.url;
  }

  return insight;
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
  }
};

export default async function InsightPage({ params }) {
  const { insightsDescr } = params;
  const insight = await getInsightBySlug(insightsDescr);

  if (!insight) {
    return <div>Insight not found</div>;
  }

  return (
    <div>
      {/* ---------innerBanner------------- */}
      <section className='innerBanner text-center' >
        <div className="container position-relative">
          <div className="col-lg-7 mx-auto ">
            {insight && (
              <>
                <h1 className='title-xl fw-bold'>{insight.fields.title}</h1>
                <p className=''>{insight.fields.description}</p>
              </>
            )}
          </div>
        </div>
      </section>
      {/* ------------------------------------------ */}

      <section className={`sectionPadding`} >
        <div style={styles.container}>
          <div className={`row g-5`} style={styles.row}>
            <div className='col-lg-8' style={styles.col}>
              {insight && (
                <>
                  <h2 style={styles.title} className='title-xl fw-bold'>{insight.fields.title}</h2>
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
                  <div style={styles.body} className='py-4'>
                    {documentToReactComponents(insight.fields.body, options)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  sectionPadding: {
    padding: '50px 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 20px',
  },
  row: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  description: {
    textAlign: 'center',
  },
  body: {
    textAlign: 'left',
    maxWidth: '800px',
    width: '100%',
  },
};
