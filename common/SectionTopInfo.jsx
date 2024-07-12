'use client'
import React from 'react';
import ContactUsButton from './ContactUsButton';
import {useMounted} from "./../common/unmounted"


const SectionTopInfo = ({ smallTitle, title, text, isCenter, isFullWidth, showContactBtn, description }) => {
  const mounted = useMounted();
  if(!mounted) return null;

  const alignmentClass = isCenter ? 'text-center mx-auto' : '';

  return (
    <div className={`sectionTopInfo  ${isFullWidth === true ? 'col-md-10' : 'col-md-6'} + ${alignmentClass}`} >
      <h4 className='section-title-sm '>{smallTitle}</h4>
      <h2 className='title-xl fw-bold'>{title}</h2>
      <div className='' dangerouslySetInnerHTML={{ __html: text }} />
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      {showContactBtn && (
        <ContactUsButton />
      )}
    </div>
  );
};

export default SectionTopInfo;