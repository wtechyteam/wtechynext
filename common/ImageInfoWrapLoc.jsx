import React from "react";
import ContactUsButton from "./ContactUsButton";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ImageInfoWrapLoc = ({
  title,
  description,
  imageUrl,
  isReverse,
  showContactBtn,
  customClass,
}) => {
  console.log("Description Object:", description); // Debug description structure

  return (
    <section className={`sectionPadding ${customClass}`}>
      <div className="container">
        <div
          className={`row align-items-center ${
            isReverse && "flex-row-reverse"
          }`}
        >
          <div className="col-md-6 mb-5 mb-md-0 text-center">
            <div className="">
              {/* Updated Image component for Next.js 13+ */}
              <Image
                className="content_side_image img-fluid"
                src={imageUrl}
                title={title}
                alt="side-img"
                width={600} // Set width based on your requirements
                height={400} // Set height based on your requirements
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="title-xl fw-bold">{title}</h2>

            {/* Handle description rendering */}
            {description ? (
              typeof description === "object" && description.nodeType ? (
                documentToReactComponents(description) // Contentful Rich Text
              ) : typeof description === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: description }} /> // Plain HTML string
              ) : (
                <p>Invalid description format.</p> // Handle unexpected format
              )
            ) : (
              <p>No description available.</p>
            )}

            {showContactBtn && <ContactUsButton />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageInfoWrapLoc;
