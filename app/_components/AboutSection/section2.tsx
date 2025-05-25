import GradientButton from "@/components/ui/GradientButton";
import Content from "./content";
import AboutSection from "./wrapper";

export default function Section2() {
  return (
    <AboutSection>
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h2 className="heading-gradient text-4xl lg:text-5xl font-bold">
          Focus on Growth, <br />
          Not Paperwork
        </h2>
        <p className="text-neutral-500 text-lg">
          Let us handle the complexities of HR administration while you focus on
          what matters most - growing your business and nurturing your team.
        </p>
        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <GradientButton>Get Started</GradientButton>
        </div>
      </div>
      <Content />
    </AboutSection>
  );
}
