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
                portalId="47335383"
                formId="6a2695d4-269b-4a77-8ec8-59357787d258"
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
