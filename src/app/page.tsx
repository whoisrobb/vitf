"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Landing from "@/components/page-sections/landing";
import Intro from "@/components/elements/intro";
import SiteShell from "@/components/elements/site-shell";
import Partners from "@/components/page-sections/partners";
import Contact from "@/components/page-sections/contact";
import { HeroVideo } from "@/components/elements/hero-video";
import WhyChooseUs from "@/components/page-sections/why-choose-us";
import AboutUs from "@/components/page-sections/about-us";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, []);

  return (
    <div className="">
      <Landing />

      <SiteShell className="flex flex-col md:gap-60 gap-28">
        {/* <HeroVideo />
        <Intro /> */}
        <AboutUs />
        <WhyChooseUs />
        <Partners />
        <Contact />
      </SiteShell>
    </div>
  );
}
