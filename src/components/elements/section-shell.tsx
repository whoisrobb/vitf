import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import AnimatedShinyText from "../ui/animated-shiny-text";

type SectionShellProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    subtitle?: string;
    shimmerText: string;
    children: ReactNode;
}

const SectionShell = ({ className, children, title, subtitle, shimmerText }: SectionShellProps) => {
  return (
    <div className={cn("lg:px-8 md:px-4 px-2 w-full space-y-8", className)}>
        <div className="w-full relative grid place-items-center text-center space-y-2">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 border border-accent-light/70 rounded-full">
                <span>{shimmerText}</span>
            </AnimatedShinyText>

            <h1 className="text-3xl font-bold uppercase">{title}</h1>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
    </div>
  )
}

export default SectionShell