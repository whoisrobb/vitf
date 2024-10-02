"use client";

import React, { useRef } from 'react'
import ContactForm from '../elements/contact-form'
import SectionShell from '../elements/section-shell'

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
return (
  <div
      className=""
      ref={contactRef}
      id='contact'
  >
    <SectionShell
        shimmerText='Contact'
        title='Reach out to us'
        subtitle="Have questions or need assistance? Reach out to our team and let's transform your vision together."
    >
        <div className="min-h-screen flex items-center justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="space-y-4">
                <h1 className="font-bold text-6xl">Ready to Transform Your Business?</h1>
                <p className="text-muted-foreground">Contact Us Today to Learn How VITF Can Help You Leverage the Power of Technology.</p>
                </div>
                <ContactForm />
            </div>
        </div>
    </SectionShell>
  </div>
  )
}

export default Contact
