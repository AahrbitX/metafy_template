const statisticsData = [
  { value: "$20k", title: "Saved $20,000 annually and 20 hours a week" },
  {
    value: "$40k",
    title: "Saved $40,000 annually with performance management",
  },
  { value: "20%", title: "benefits from improved employee engagement" },
];

export default function StatisticsSection() {
  return (
    <section className="w-full py-20 bg-notwhite">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center max-w-240 mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-dmsans font-bold heading-gradient">
              customers save <br /> HR costs 40%
            </h2>
          </div>
          <div className="text-center lg:text-right">
            <p className="max-w-sm text-notblack/80 mx-auto lg:ml-auto lg:mr-0">
              Discover how our platform has transformed development workflows
              and empowered teams worldwide through these key metrics.
            </p>
          </div>
        </div>

        <dl className=" flex items-center flex-wrap justify-evenly gap-4">
          {statisticsData.map((item) => (
            <StatisticsCard key={item.value} {...item} />
          ))}
        </dl>
      </div>
    </section>
  );
}

const StatisticsCard = ({ value, title }: { value: string; title: string }) => {
  return (
    <div className="bg-primary-light space-y-4 rounded-2xl inline-block w-[300px] h-[200px] p-5">
      <dd className="text-[52px] font-dmsans font-bold">{value}</dd>
      <dt className="text-base text-neutral-600">{title}</dt>
    </div>
  );
};
