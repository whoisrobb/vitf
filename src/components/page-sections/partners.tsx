"use client";

import React, { useRef, useState } from 'react';
import data from "@/lib/partners.json";
import PartnerCard from '../elements/partner-card';
import SectionShell from '../elements/section-shell';
import Modal from '../elements/modal';

const Partners = () => {
    const partnersRef = useRef<HTMLDivElement>(null);
    const [modal, setModal] = useState({ active: false, index: 0 });

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
                {data.map((partner, index) => (
                    <PartnerCard
                        title={partner.title}
                        description={partner.description}
                        color={partner.color}
                        link={partner.link}
                        src={partner.src}
                        key={index}
                        index={index}
                        setModal={setModal}
                    />
                ))}
            </div>

            <Modal
                modal={modal}
                data={data}
            />
        </SectionShell>
    </div>
  )
}

export default Partners
