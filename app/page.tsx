import HeroSection from "./_components/HeroSection";
import IllustrationSection from "./_components/IllustrationSection";
import Section1 from "./_components/AboutSection/section1";
import Section2 from "./_components/AboutSection/section2";
import FeaturesSection from "./_components/FeaturesSection";
import StatisticsSection from "./_components/StatisticsSection";
import PricingSection from "./_components/PricingSection";
import FAQSection from "./_components/FAQsection";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Metafy - Modern Project Template",
  description:
    "A versatile and modern project template for your next web application",
  keywords: ["Next.js", "React", "Web Development", "Template", "Metafy"],
  openGraph: {
    title: "Metafy - Modern Project Template",
    description:
      "A versatile and modern project template for your next web application",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <IllustrationSection />
      <Section1 />
      <FeaturesSection />
      <Section2 />
      <StatisticsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  );
}
