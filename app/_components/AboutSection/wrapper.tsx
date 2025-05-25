interface AboutSectionProps {
  children: React.ReactNode;
}

export default function AboutSection({ children }: AboutSectionProps) {
  return (
    <section className="container py-6 my-4 md:py-10 md:my-6 lg:py-16 lg:my-8">
      <div className="grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {children}
      </div>
    </section>
  );
}
