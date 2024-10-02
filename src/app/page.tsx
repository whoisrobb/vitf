"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Landing from "@/components/page-sections/landing";
import Intro from "@/components/page-sections/intro";
import SiteShell from "@/components/elements/site-shell";
import ServicesBento from "@/components/elements/services-bento";
import Partners from "@/components/page-sections/partners";
import Contact from "@/components/page-sections/contact";
import { HeroVideo } from "@/components/elements/hero-video";

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
        <HeroVideo />
        <Intro />
        <ServicesBento />
        <Partners />
        <Contact />
      </SiteShell>
    </div>
  );
}
