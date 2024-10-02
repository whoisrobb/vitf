import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { scrollToSection, sections } from '@/lib/utils'


const DesktopNav = () => {
  return (
    <div className='w-full md:flex items-center justify-between col-span-2 hidden'>
        <div className="">
            {sections.map((section, index) => (
                <Button
                    variant={'linkHover2'}
                    className='capitalize'
                    key={index}
                    onClick={() => scrollToSection(section)}
                >
                    {section}
                </Button>
            ))}
        </div>

        <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            onClick={() => scrollToSection("contact")}
            className='rounded-full bg-transparent hover:bg-transparent text-primary bg-gradient-to-br from-accent-light/80 to-muted-accent-light/60 border-accent-light border'
        >
            Contact
        </Button>
    </div>
  )
}

export default DesktopNav
