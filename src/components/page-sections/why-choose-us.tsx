"use client";

import React, { useRef } from 'react'
import ServicesBento from '../elements/services-bento'
import SectionShell from '../elements/section-shell'

const WhyChooseUs = () => {
    const chooseUsRef = useRef<HTMLDivElement>(null);
  return (
    <div
        className=""
        ref={chooseUsRef}
        id='why choose us'
    >
        <SectionShell
            shimmerText='Why Choose Us?'
            title='Explore VITF services and solutions'
            id=''
        >
            <ServicesBento />
        </SectionShell>
    </div>
  )
}

export default WhyChooseUs