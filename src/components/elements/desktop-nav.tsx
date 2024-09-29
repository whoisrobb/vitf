import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

/*
about
partners
why choose us

contact
*/
const sections = [
    "about",
    "partners",
    "why choose us"
]

const DesktopNav = () => {
  return (
    <div className='w-full flex items-center justify-between col-span-2'>
        <div className="">
            {sections.map((section, index) => (
                <Button
                    variant={'linkHover2'}
                    className='capitalize'
                    key={index}
                >
                    {section}
                </Button>
            ))}
        </div>

        <Button
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
            className='rounded-full bg-transparent hover:bg-transparent text-white bg-gradient-to-br from-accent-light/80 to-muted-accent-light/60 border-accent-light border'
        >
            Contact
        </Button>
    </div>
  )
}

export default DesktopNav
