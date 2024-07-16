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

export default async function InsightPage({ params }) {
  const { insightsDescr } = params;
  const insight = await getInsightBySlug(insightsDescr);

  if (!insight) {
    return <div>Insight not found</div>;
  }

  return (
    <div>
      {/* ---------innerBanner------------- */}
      <section className='innerBanner text-center'>
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

      <section className={`sectionPadding`}>
        <div className='container'>
          <div className={`row g-5`}>
            <div className='col-lg-8'>
              {insight && (
                <>
                  <h2 className='title-xl fw-bold'>{insight.fields.title}</h2>
                  {insight.imageUrl && (
                    <Image 
                      src={`https:${insight.imageUrl}`} 
                      title={insight.fields.title} 
                      alt={insight.fields.title} 
                      layout="responsive"
                      width={700} 
                      height={475}
                    />
                  )}
                  <div className='py-4'>{insight.fields.description}</div>
                </>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* <h1>{insight.fields.title}</h1>
      <p>{insight.fields.description}</p> */}
      {/* Add more fields as needed */}
    </div>
  );
}
