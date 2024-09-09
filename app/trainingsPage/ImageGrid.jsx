'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ImageGrid() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    '/assets/Images/Image (42).jpg', 
    '/assets/Images/Image (44).jpg', 
    '/assets/Images/Image (46).jpg', 
    '/assets/Images/Image (49).jpg'
  ];

  return (
    <section style={styles.sectionPadding}>
      <div style={styles.container}>
        {/* Heading Section */}
        <div style={styles.heading}>
          <h2 style={styles.title}>
            Our Certificates
          </h2>
          <p style={styles.subtitle}>
            These are the certificates we award to our students upon completing the course.
          </p>
        </div>

        {/* Image Slider */}
        <div
          ref={sliderRef}
          style={styles.slider}
        >
          {images.map((src, index) => (
            <div key={index} style={styles.slide}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={200} // Width of the images
                height={120} // Reduced height for shorter images
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inline styles
const styles = {
  sectionPadding: {
    padding: '2rem',
  },
  container: {
    maxWidth: '800px', // Reduced maxWidth for a smaller container
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#6c757d',
  },
  slider: {
    display: 'flex',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
  },
  slide: {
    flexShrink: 0,
    width: 'calc(50% - 10px)', // Adjust width to account for spacing
    scrollSnapAlign: 'center',
    margin: '0 5px', // Add space around each image
  },
  image: {
    objectFit: 'cover',
    borderRadius: '0.375rem', // Rounded corners (Tailwind's rounded-md)
    width: '100%',
    height: 'auto', // Ensure image scales correctly
  },
};
