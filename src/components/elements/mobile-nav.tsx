"use client";

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { scrollToSection, sections } from '@/lib/utils'
import { Button } from '../ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
  

const MobileNav = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="block md:hidden">
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'icon'} onClick={() => setOpen((open) => !open)}>
                    <HamburgerMenuIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='z-[1000]' side='left' align='start'>
                {sections.map((section, index) => (
                    <div
                        className=""
                        key={index}
                    >
                        <DropdownMenuLabel
                            onClick={() => {scrollToSection(section); setOpen(false);}}
                        >
                            {section}
                        </DropdownMenuLabel>
                    </div>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {scrollToSection('contact'); setOpen(false);}}
                >
                    Contact
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default MobileNav