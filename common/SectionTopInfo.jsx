import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import ContactUsButton from './ContactUsButton';

const SectionTopInfo = ({ smallTitle, title, text, isCenter, isFullWidth, showContactBtn, description }) => {
  
  const alignmentClass = isCenter ? 'text-center mx-auto' : '';

  return (
    <div className={`sectionTopInfo ${isFullWidth ? 'col-md-10' : 'col-md-6'} ${alignmentClass}`}>
      <h4 className='section-title-sm'>{smallTitle}</h4>
      <h2 className='title-xl fw-bold'>{title}</h2>

      <div>
        {description && typeof description === 'object' ? (
          documentToReactComponents(description) // Render rich text description
        ) : (
          <div dangerouslySetInnerHTML={{ __html: description }} /> // Properly format HTML string description
        )}
      </div>

      {showContactBtn && <ContactUsButton />}
    </div>
  );
};

export default SectionTopInfo;
