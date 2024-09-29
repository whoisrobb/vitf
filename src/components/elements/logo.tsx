import { HTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
        href={'/'}
        onClick={handleScrollToTop}
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