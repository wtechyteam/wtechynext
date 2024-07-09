'use client'
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { scrollTop } from './utils';
import Link from 'next/link';

function ContactUsButton() {
  return (
    <Link href="/contact" onClick={scrollTop} className='mt-2 dBtn btnSecondary hasShadow'>
      <FiPhoneCall />
      <span className='ms-2'>Contact Us Now</span>
    </Link>
  )
}

export default ContactUsButton;
