import GradientButton from "@/components/ui/GradientButton";
import Content from "./content";
import AboutSection from "./wrapper";

export default function Section1() {
  return (
    <AboutSection>
      <Content />
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h2 className="heading-gradient text-4xl lg:text-5xl font-bold">
          Streamline Your HR & <br />
          Payroll Operations
        </h2>
        <p className="text-neutral-500 text-lg">
          Experience seamless HR and payroll management with our comprehensive
          solution. From automated payroll processing to employee data
          management, we&apos;ve got you covered.
        </p>
        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <GradientButton>Learn More</GradientButton>
        </div>
      </div>
    </AboutSection>
  );
}
