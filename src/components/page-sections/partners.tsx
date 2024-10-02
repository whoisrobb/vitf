"use client";

import React, { useRef } from 'react';
import data from "@/lib/partners.json";
import PartnerCard from '../elements/partner-card';
import SectionShell from '../elements/section-shell';

const Partners = () => {
    const partnersRef = useRef<HTMLDivElement>(null);
  return (
    <div
        className=""
        ref={partnersRef}
        id='partners'
    >
        <SectionShell
            shimmerText='Strategic partnerships'
            title='Revolutionizing industries with AI-driven solutions. Empowering communities through the Internet of Value.'
        >
            <div>
                {data.map((partner) => (
                    <PartnerCard
                        title={partner.title}
                        description={partner.description}
                        color={partner.color}
                        link={partner.link}
                        src={partner.src}
                        key={partner.title}
                    />
                ))}
            </div>
        </SectionShell>
    </div>
  )
}

export default Partners
