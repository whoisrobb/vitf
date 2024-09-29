import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react"

type VideoComponentProps = HTMLAttributes<HTMLDivElement> & {
    source: string;
}

const VideoComponent = ({ source, className }: VideoComponentProps) => {
  return (
    <video
        src={`https://utfs.io/f/${source}`}
        className={cn("object-cover h-[100%] w-[100%]", className)}
        // controls
        autoPlay
        loop
        muted
    />
  )
}

export default VideoComponent