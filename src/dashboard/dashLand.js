import { Fragment, useEffect, useState } from "react";
import { apiEndpoints } from "../config";

export default function DashHome() {
  const [stats, setStats] = useState([
    {
      name: "Evidences",
      value: 0,
    },
    {
      name: "CasesWithEvidence",
      value: 0,
    },
    {
      name: "CasesWithSuspects",
      value: 0,
    },
    {
      name: "Officers",
      value: 0,
    },
  ]);
  useEffect(() => {
    // Fetch officer details from the API
    fetch(apiEndpoints.getStats)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const temp = [
          {
            name: "Evidences",
            value: data.evidences,
          },
          {
            name: "CasesWithEvidence",
            value: data.casesWithEvidence,
          },
          {
            name: "CasesWithSuspects",
            value: data.casesWithSuspects,
          },
          {
            name: "Officers",
            value: data.officers,
          },
        ];
        setStats(temp);
      })
      .catch((error) =>
        console.error("Error fetching officer details:", error)
      );
  }, []);
  return (
    <>
      <div className=" rounded-2xl py-10 sm:py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <img
              src={require("../assert/dna.jpg")}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Forensic Stats
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Unlocking Insights in DNA: Exploring the Nexus of Genomic Data
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white/90 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
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
              GenomeSync-Nexus
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Forensic Stats
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Unlocking Insights in DNA: Exploring the Nexus of Genomic Data
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
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
      </div> */}

      <div className="overflow-hidden mt-10 rounded-xl bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Forensic Statistics <br />
                <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  at a Glance
                </span>
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Empowering Law Enforcement: Uniting Precision DNA Matching,
                Criminal Record Integration, and Swift Suspect Identification
                through GenomeSync Nexus
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Discover the Next Level of DNA Analysis: Decode STRs for
                Powerful Investigations. Elevate Forensic Precision with an
                Intuitive Dashboard for Seamless Integration
              </p>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started! <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://wallpaperaccess.com/full/1561052.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/68/62/81/360_F_568628192_n6MP1wdWGOZN63VzYxnJSHMJLHJYFUrf.jpg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://t3.ftcdn.net/jpg/06/20/46/52/360_F_620465238_IllrTj4qnSFFAsR5JJorvFCFYLQ0JW48.jpg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/022/705/586/small/generative-ai-illustration-of-dna-molecule-composition-double-helix-of-dna-human-genome-cell-genetic-biotechnology-study-genetic-engineering-research-and-analysis-in-science-laboratories-photo.jpg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
