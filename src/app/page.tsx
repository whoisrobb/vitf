"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Landing from "@/components/page-sections/landing";
import Intro from "@/components/page-sections/intro";
import IntroVideo from "@/components/elements/intro-video";
import SiteShell from "@/components/elements/site-shell";
import ServicesBento from "@/components/elements/services-bento";
import Partners from "@/components/page-sections/partners";
import Contact from "@/components/page-sections/contact";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, []);

  return (
    <div className="">
      <Landing />

      <SiteShell className="flex flex-col gap-60">
        <IntroVideo />
        <Intro />
        <ServicesBento />
        <Partners />
        <Contact />
      </SiteShell>
    </div>
  );
}
