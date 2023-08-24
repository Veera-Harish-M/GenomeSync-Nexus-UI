import { useEffect, useState } from "react";
import { apiEndpoints } from "../config";

export default function Case({ addNewCase }) {
  const [casesData, setCases] = useState([]);

  useEffect(() => {
    // Fetch officer details from the API
    fetch(apiEndpoints.getCases)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCases(data);
      })
      .catch((error) => console.error("Error fetching User details:", error));
  }, []);
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Case Details
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Explore through the filed cases!!
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => addNewCase()}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Case
          </button>
        </div>
      </div>
      <ul role="list divide-y ">
        {casesData.map((cs) => (
          <div className=" shadow-md shadow-grey-900 pl-5 pr-10 mt-10 mb-15">
            <li
              key={cs.email}
              className="flex border-b border-gray-900/10 justify-between gap-x-6 py-5 mb-15 "
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={require("../assert/icons/case.jpg")}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {cs.caseNumber}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {cs.description}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{cs.location}</p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={cs.lastSeenDateTime}>{cs.date}</time>
                </p>
              </div>
            </li>
            <p className="ml-14 mt-5 block text-sm font-medium leading-6  text-gray-900">
              Handling Officers
            </p>
            {cs.officers.map((off) => (
              <div className="mt-5 ml-14 mb-7 border-b border-gray-900/10">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={require("../assert/icons/officer.avif")}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {off.name}
                    </p>
                    <p className="mt-1  mb-5 truncate text-xs leading-5 text-gray-500">
                      {off.badgeNumber}
                    </p>
                  </div>

                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className=" mb-5 text-xs leading-5 text-gray-500">
                      {off._id}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <p className="ml-14 mt-5 block text-sm font-medium leading-6  text-gray-900">
              Evidences Found
            </p>
            {cs.evidence.map((evd) => (
              <div className="mt-5 ml-14 mb-7 border-b border-gray-900/10">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={require("../assert/icons/evidence.png")}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {evd.name}
                    </p>
                    <p className="mt-1  mb-5 truncate text-xs leading-5 text-gray-500">
                      {evd.description}
                    </p>
                  </div>

                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      <span className="mt-1 text-xs leading-5 text-gray-500">
                        CollectBy :{" "}
                      </span>
                      {evd.collectedBy}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      <time dateTime={evd.collectedDate}>
                        {evd.collectedDate}
                      </time>
                    </p>
                  </div>
                </div>

                <p className="ml-16 mb-2 text-xs font-semibold leading-6 text-gray-600">
                  Str Info Gathered
                </p>
                {evd.strDetails.map((str, index) => (
                  <>
                    <p className="ml-16 mb-2 text-xs font-semibold leading-6 text-gray-600">
                      Str {index + 1}
                    </p>
                    <div className="ml-16 flex space-x-4 mb-5">
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        D3S1358_1: {str.D3S1358_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        D7S820_1: {str.D7S820_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        D8S1179_1: {str.D8S1179_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        D16S539_1: {str.D16S539_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        D18S51_1: {str.D18S51_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                        D21S11_1: {str.D21S11_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                        FGA_1: {str.FGA_1}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                        VWA_1: {str.VWA_1}
                      </span>
                    </div>

                    <div className="ml-16 flex space-x-4 mb-5">
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        D3S1358_2: {str.D3S1358_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        D7S820_2: {str.D7S820_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        D8S1179_2: {str.D8S1179_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        D16S539_2: {str.D16S539_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        D18S51_2: {str.D18S51_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                        D21S11_2: {str.D21S11_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                        FGA_2: {str.FGA_2}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                        VWA_2: {str.VWA_2}
                      </span>
                    </div>
                  </>
                ))}
              </div>
            ))}

            <p className="ml-14 mt-5 block text-sm font-medium leading-6  text-gray-900">
              Suspects Speculated
            </p>
            {cs.suspects.map((sus) => (
              <div className="mt-5 ml-14 mb-7 border-b border-gray-900/10">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={require("../assert/icons/suspect.jpg")}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {sus.name}
                    </p>
                    <p className="mt-1  mb-5 truncate text-xs leading-5 text-gray-500">
                      {sus.gender}
                    </p>
                  </div>

                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{sus._id}</p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      <span className="mt-1 text-xs leading-5 text-gray-500">
                        Age :{" "}
                      </span>
                      {sus.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </ul>
    </>
  );
}
