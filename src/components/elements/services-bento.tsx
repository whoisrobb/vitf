import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "./animated-beam-multiple-outputs";
import AnimatedListComponent from "./animated-list-component";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

// const files = [
//   {
//     name: "bitcoin.pdf",
//     body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
//   },
//   {
//     name: "finances.xlsx",
//     body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
//   },
//   {
//     name: "logo.svg",
//     body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
//   },
//   {
//     name: "keys.gpg",
//     body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
//   },
//   {
//     name: "seed.txt",
//     body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
//   },
// ];

const services = [
    {
      name: "AI-Powered Analytics.pdf",
      body: "Harness advanced AI to analyze large datasets and extract actionable insights for better decision-making in your business.",
    },
    {
      name: "Inventory-Management.xlsx",
      body: "Streamline inventory tracking and control with our scalable platform, designed to optimize stock levels, reduce costs, and improve efficiency.",
    },
    {
      name: "Custom-Integrations.svg",
      body: "Utilize our custom integration services to seamlessly connect your existing systems with modern solutions for enhanced interoperability.",
    },
    {
      name: "Cybersecurity-Solutions.gpg",
      body: "Protect your business with VITFusion's robust cybersecurity solutions, including encryption, secure access management, and data protection.",
    },
    {
      name: "Blockchain-Consulting.txt",
      body: "Leverage VITFusion's expertise in blockchain technology to explore new opportunities in decentralized systems and secure digital transactions.",
    },
];
  
const features = [
  {
    Icon: FileTextIcon,
    name: "Explore VITFusion Services",
    description: "Our platform offers a range of AI, blockchain, and data intelligence services to streamline your business.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {services.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "VITFusion Services",
    description: "Stay updated on the latest VITFusion activities and solutions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListComponent className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description:
        "VITFusion seamlessly integrates with AI, blockchain, CRM, ERP, and other critical business systems to create a unified workflow. Experience enhanced automation and interoperability.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Future-Ready Technology",
    description: "Prepare for tomorrow's challenges with our innovative, future-proof technologies.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
    //   <Calendar
    //     mode="single"
    //     selected={new Date(2022, 4, 11, 0, 0, 0)}
    //     className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
    //   />
        <Image
            src={'/globe.svg'}
            height={300}
            width={300}
            className="absolute right-0 top-0 origin-top"
            alt="globe"
        />
    ),
  },
];

const ServicesBento = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default ServicesBento;
