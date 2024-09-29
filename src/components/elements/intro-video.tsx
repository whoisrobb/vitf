import SectionShell from "./section-shell"
import VideoComponent from "./video-component"

const IntroVideo = () => {
  return (
    <SectionShell
        shimmerText="About us"
        title="Revolutionizing industries with AI-driven solutions. Empowering communities through the Internet of Value."
    >
        <div className="h-screen rounded-lg overflow-hidden">
            <VideoComponent source="61aa8e5a-524c-4c6d-ab9a-532baaa40a7f-sbbjr4.mp4" />
        </div>
    </SectionShell>
  )
}

export default IntroVideo