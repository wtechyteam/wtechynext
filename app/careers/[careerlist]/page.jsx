import { fetchEntries } from "../../contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { scrollTop } from "./../../../common/utils";
import InnerBanner from "@/common/InnerBanner";

async function getCareersBySlug(slug) {
  const contentType = "careers";
  const data = await fetchEntries(contentType);
  const items = data.items || [];
  const assets = data.includes?.Asset || [];

  const careers = items.find((item) => item.fields.slug === slug);

  if (careers) {
    const imageId = careers.fields.image?.sys?.id;
    const image = imageId
      ? assets.find((asset) => asset.sys.id === imageId)
      : null;
    careers.imageUrl = image?.fields?.file?.url;
  }

  return careers;
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

export default async function CareersPage({ params }) {
  const { careerlist } = params;
  const career = await getCareersBySlug(careerlist);

  if (!career) {
    return <div>Career not found</div>;
  }
  return (
    <>
      <InnerBanner title={"Job Details"} />
      <section className="sectionPadding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jobInfoWrap">
                <div class="job-experience text-center">
                  <h5 className="mb-0 f">{documentToReactComponents(career.fields.experience, options)}</h5>
                  <p className="mb-0">Experience</p>
                </div>
                <h2 className="job-title paddingLeft fw-bold">
                  {career.fields.jobPost}
                </h2>
                <div className="job-content paddingLeft">
                  {career.fields.descr !== "" && (
                    <>
                      <h4>Job Description:</h4>
                      <div className="job-description">
                      {documentToReactComponents(career.fields.descr, options)}
                      </div>
                    </>
                  )}
                  {career.fields.jobResponsibilities !== "" && (
                    <>
                      <h4>Job Responsibilities:</h4>
                      <div className="job-responsibilities">
                      {documentToReactComponents(career.fields.jobResponsibilities, options)}
                      </div>
                    </>
                  )}
                  {career.fields.jobType !== "" && (
                    <>
                      <p className="job-type">
                        <strong>Job Type: </strong>
                        {career.fields.jobType}
                      </p>
                    </>
                  )}
                  {career.fields.jobType !== "" && (
                    <>
                      <p className="job-type">
                        <strong>Salary: </strong>
                        {documentToReactComponents(career.fields.salary, options)}
                      </p>
                    </>
                  )}
                  <Link
                    href={"/apply-form"}
                    className="dBtn btnSecondary mt-4 hasShadow"
                    onClick={scrollTop}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
