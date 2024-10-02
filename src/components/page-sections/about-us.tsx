"use client";

import React, { useRef } from 'react'
import SectionShell from '../elements/section-shell'
import { HeroVideo } from '../elements/hero-video'
import Intro from '../elements/intro'

const AboutUs = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <div
        className=""
        ref={aboutRef}
        id='about us'
    >
        <SectionShell
            shimmerText='About Us'
            title=''
        >
            <HeroVideo />
            <Intro />
        </SectionShell>
    </div>
  )
}

export default AboutUs