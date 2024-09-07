'use client';
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const ImageSlider = () => {
  return (
    <section className="sectionPadding">
      <div className="container mx-10 max-w-lg">
        <h2 className="title-xl fw-bold text-center mb-4">
          Explore Our Training Programs
        </h2>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-10"
              src="/assets/Images/Image (46).jfif"
              alt="Slide 1"
              layout="responsive"
              width={200}  // Further reduced width
              height={100} // Further reduced height
              objectFit="contain" // Changed from 'cover' to 'contain'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-10"
              src="/assets/Images/Image (44).jfif"
              alt="Slide 2"
              layout="responsive"
              width={200}  // Further reduced width
              height={100} // Further reduced height
              objectFit="contain" // Changed from 'cover' to 'contain'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-10"
              src="/assets/Images/Image (42).jfif"
              alt="Slide 3"
              layout="responsive"
              width={200}  // Further reduced width
              height={100} // Further reduced height
              objectFit="contain" // Changed from 'cover' to 'contain'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-10"
              src="/assets/Images/Image (49).jfif"
              alt="Slide 4"
              layout="responsive"
              width={200}  
              height={100} // Further reduced height
              objectFit="contain" // Changed from 'cover' to 'contain'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageSlider;
