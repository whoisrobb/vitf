import TextReveal from "@/components/ui/text-reveal";

const text = "At Vision Interactive Technology Fusion (VITF), we partner with industry-leading companies to create holistic, value-driven technology solutions for today’s businesses. Through our collaborative approach, we integrate AI, automation, data intelligence, and more into custom business models that drive operational efficiency, enhance customer experiences, and prepare businesses for the future."

const Intro = () => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <TextReveal text={text} />
    </div>
  );
}

export default Intro;
