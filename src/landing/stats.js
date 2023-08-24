const stats = [
  { id: 1, name: "DNA profiles", value: "Over 1 million" },
  { id: 2, name: "Genetic data", value: "Around 5 terabytes" },
  { id: 3, name: "Crime Scenes Analyzed", value: "8,000+" },
  { id: 4, name: "Matches Found", value: "5000+" },
];

export default function Stats() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={require("../assert/dna.jpg")}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true"
        >
          <div
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-indigo-400">
            our track records
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unlocking Clues, Solving Crimes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            With GenomeSync Nexus, law enforcement gains a powerful tool to
            perform precise STR matching, criminal record integration, and
            suspect identification, all in a streamlined dashboard.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <dt className="text-sm leading-6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
