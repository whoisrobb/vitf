"use client";

import React, { useRef } from 'react';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from '../ui/animated-shiny-text';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import Image from 'next/image';

const Landing = () => {
    const homeRef = useRef<HTMLDivElement>(null);
  return (
    <div
        ref={homeRef}
        id='home'
        className={"h-screen overflow-hidden grid place-items-center"}
    >      
        <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
            "inset-x-0 inset-y-[-30%] h-[150%]",
            )}
        />

        <div className="text-center grid place-items-center max-w-[60rem] space-y-4 relative">
            <div className="absolute -z-10 h-96 opacity-50">
                <Image
                    src="/vitfusion-logo.png"
                    alt="vitfusion logo"
                    height={100}
                    width={200}
                    className='object-cover h-full w-full'
                />
            </div>

            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Vision Interactive Fusion</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
            
            <h1 className="md:text-5xl text-3xl font-bold">
                Empowering the Future with Innovative Technology Management Solutions
            </h1>
            <p className="md:w-[80%] text-muted-foreground">
                We empower innovation with AI, data intelligence, and strategic partnerships to drive the future of business and technology.
            </p>
               
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className='rounded-full bg-transparent hover:bg-transparent text-primary border-accent-light border'
            >
                Get started
            </Button>
        </div>
      
    </div>
  )
}

export default Landing
