import React from 'react'
import ContactForm from '../elements/contact-form'
import SectionShell from '../elements/section-shell'

const Contact = () => {
  return (
    <SectionShell
        shimmerText='Contact'
        title='Reach out to us'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusantium dignissimos nihil deleniti quaerat sed.'
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
  )
}

export default Contact
