import { HTMLAttributes } from "react";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Link
        href={'/'}
        onClick={() => scrollToSection('home')}
    >
        <Image
            src="/vitfusion-logo.png"
            alt="vitfusion logo"
            height={100}
            width={200}
            className={cn("", className)}
        />
    </Link>
  )
}

export default Logo