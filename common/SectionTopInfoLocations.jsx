import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import ContactUsButton from './ContactUsButton';

const SectionTopInfoLoc = ({
  smallTitle,
  title,
  text,
  isCenter,
  isFullWidth,
  showContactBtn,
  description,
  isLeftAligned, // New boolean parameter
}) => {
  // Determine the alignment class based on the new prop
  const alignmentClass = isCenter
    ? 'text-center mx-auto'
    : isLeftAligned
    ? 'text-start' // New class for left-aligned text
    : '';

  return (
    <div
      className={`sectionTopInfo ${isFullWidth ? 'col-md-10' : 'col-md-6'} ${alignmentClass}`}
    >
      <h4 className='section-title-sm'>{smallTitle}</h4>
      <h2 className='title-xl fw-bold'>{title}</h2>
      
      <div>
        {description && typeof description === 'object' ? (
          documentToReactComponents(description) // Render description as rich text
        ) : (
          <p></p> // Fallback message if description is not available
        )}
      </div>

      {showContactBtn && <ContactUsButton />}
    </div>
  );
};

export default SectionTopInfoLoc;
