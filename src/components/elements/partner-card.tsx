import { Dispatch, SetStateAction, useRef } from "react";
import AnimSeparator from "./anim-separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSplitText from "@/hooks/useSplitText";
import Image from "next/image";


type PartnerCardProps = {
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
}

const PartnerCard = ({ title, description, link, src }: PartnerCardProps) => {
    const container = useRef(null);
    const paragraph = useSplitText(description, container);
  return (
    <div
        className="hover:opacity-50 transition-all group"
    >
        <AnimSeparator />

        <div className="grid md:grid-cols-3 grid-cols-1 py-8 md:space-y-0 space-y-6">
            <div className="">
                <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold group-hover:transform group-hover:translate-x-[-.5rem] transition-all">
                    {title}
                </h1>
                <Image
                    src={`/${src}`}
                    alt={title}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="hidden md:block" />

            <div className="space-y-4">
                <p
                    className="flex flex-wrap gap-x-1 group-hover:transform group-hover:translate-x-[1rem] transition-all"
                    ref={container}
                >
                    {paragraph}
                </p>

                <Link
                    href={link}
                    target="_blank"
                >
                    <Button variant={"linkHover1"}>Learn more</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}
  
export default PartnerCard