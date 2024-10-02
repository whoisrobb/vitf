import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://utfs.io/f/61aa8e5a-524c-4c6d-ab9a-532baaa40a7f-sbbjr4.mp4"
        thumbnailSrc="https://utfs.io/f/ba0Al6LG58m3AXXTsf7qrOmxRGocMzY2FUd0HTPWgEy3bLjw"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://utfs.io/f/61aa8e5a-524c-4c6d-ab9a-532baaa40a7f-sbbjr4.mp4"
        thumbnailSrc="https://utfs.io/f/ba0Al6LG58m3AXXTsf7qrOmxRGocMzY2FUd0HTPWgEy3bLjw"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
