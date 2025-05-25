"use client";

import { useState } from "react";
import GradientButton from "../../../components/ui/GradientButton";
import { featuresData } from "./featuresData";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>("Large Scale");

  return (
    <section className="w-full py-10 bg-notwhite">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-dmsans font-bold mb-4 heading-gradient">
            Every Business Size <br /> Comprehensive Features
          </h2>
          <p className="text-base text-notblack/80 max-w-2xl mx-auto">
            Whether you&apos;re a startup, growing business, or enterprise, our
            platform adapts to your needs. Explore our tailored solutions for
            different team sizes and workflows.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(featuresData).map((feature) => (
            <GradientButton
              key={feature}
              glow={false}
              active={activeFeature === feature}
              onClick={() => setActiveFeature(feature)}
            >
              {feature}
            </GradientButton>
          ))}
        </div>

        <div className="container transition-all duration-300 ease-in-out flex items-center justify-center gap-4 flex-wrap">
          {featuresData[activeFeature].map((feature, index) => (
            <div
              key={feature.title}
              className={`group max-w-sm h-[200px] mx-auto p-5 rounded-2xl bg-opacity-40 flex flex-col gap-12 cursor-pointer ${
                index % 3 === 0
                  ? "bg-primary-light"
                  : index % 3 === 1
                  ? "bg-secondary-light"
                  : "bg-tertiary-light"
              }`}
            >
              <h3 className="text-2xl font-dmsans font-bold flex items-center justify-between">
                {feature.title}{" "}
                <span className="bg-white/80 group-hover:-rotate-45 transition-all duration-300 ease-in-out p-2 rounded-full">
                  <ArrowRight size={18} />
                </span>
              </h3>
              <p className="text-sm grow text-neutral-700 w-4/5">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
