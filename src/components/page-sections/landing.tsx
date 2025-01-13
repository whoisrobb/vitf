import { Sparkles } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
            <video
                src='https://9k0i9k2kgj.ufs.sh/f/ba0Al6LG58m3J1gXZAswsQzFvk8t36IWEZXKLypdaS4hPUMC'
                controls={false}
                loop
                autoPlay
                muted
                className='dark:opacity-20 opacity-50 w-full h-full object-cover'
            />
        </div>
        
        <div className="absolute -z-10 inset-0 pointer-events-none">
            {/* Vertical lines */}
            <div className="absolute inset-0 grid grid-cols-3">
                <div className="border-r border-muted/[0.5] h-full"></div>
                <div className="border-r border-muted/[0.5] h-full"></div>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-0 grid grid-rows-[repeat(100,33.333vw)]">
                {[...Array(100)].map((_, i) => (
                    <div key={i} className="border-b border-muted/[0.5]"></div>
                ))}
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center min-h-screen">
                <div className="flex flex-col justify-center items-start space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                        <Sparkles className="w-4 h-4 text-accent-light" />
                        <span className="text-sm text-muted-foreground">AI-Powered Future</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Innovating Technology, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-dark">
                            Empowering Your Future
                        </span>
                    </h1>
                    
                    <p className="text-lg text-muted-foreground max-w-xl">
                        We empower innovation with AI, data intelligence, and strategic partnerships to drive the future of business and technology.
                    </p>
                    <Button
                        variant="expandIcon"
                        Icon={ArrowRightIcon}
                        iconPlacement="right"
                        // onClick={() => scrollToSection("contact")}
                        className='bg-transparent rounded-md hover:bg-transparent text-primary bg-gradient-to-br from-accent-light/80 to-muted-accent-light/60 border-accent-light border'
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
