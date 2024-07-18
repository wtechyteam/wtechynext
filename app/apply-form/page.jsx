'use client'
import InnerBanner from "./../../common/InnerBanner";

import HubspotForm from "react-hubspot-form";

const JobForm = () => {
  return (
    <>
      <InnerBanner
        title={"Apply For Job"}
        info={
          "Please submit the form below and we will get back to you as soon as possible."
        }
      />
      <section className="sectionPadding locationPage">
        <div className="container">
          <div className={`row align-items-center`}>
            <div className="col-md-7">
              <HubspotForm
                portalId="46372694"
                formId="2a5c528c-ff45-414e-9fc3-fe7af792503f"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobForm;
