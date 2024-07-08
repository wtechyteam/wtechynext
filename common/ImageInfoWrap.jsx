import React from 'react';
import ContactUsButton from './ContactUsButton';

const ImageInfoWrap = ({ title, description, imageUrl, isReverse, showContactBtn, customClass }) => {
    return (
        <section className={`sectionPadding ${customClass}`}>
            <div className="container">
                <div className={`row align-items-center ${isReverse && 'flex-row-reverse'}`}>
                    <div className="col-md-6 mb-5 mb-md-0 text-center">
                        <div className=''>
                            <img className='content_side_image img-fluid' src={imageUrl} title={title} alt='side-img' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='title-xl fw-bold'>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                        {showContactBtn && (
                            <ContactUsButton />
                        )}

                    </div>
                </div>
            </div>
        </section>

    );
};

export default ImageInfoWrap;