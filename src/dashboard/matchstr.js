import React, { useState } from "react";
import { apiEndpoints } from "../config";

export default function MatchStr() {
  const [formData, setFormData] = useState({
    D3S1358_1: "",
    D3S1358_2: "",
    D7S820_1: "",
    D7S820_2: "",
    D8S1179_1: "",
    D8S1179_2: "",
    D16S539_1: "",
    D16S539_2: "",
    D18S51_1: "",
    D18S51_2: "",
    D21S11_1: "",
    D21S11_2: "",
    FGA_1: "",
    FGA_2: "",
    VWA_1: "",
    VWA_2: "",
  });
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancelClick = () => {
    setFormData({
      D3S1358_1: "",
      D3S1358_2: "",
      D7S820_1: "",
      D7S820_2: "",
      D8S1179_1: "",
      D8S1179_2: "",
      D16S539_1: "",
      D16S539_2: "",
      D18S51_1: "",
      D18S51_2: "",
      D21S11_1: "",
      D21S11_2: "",
      FGA_1: "",
      FGA_2: "",
      VWA_1: "",
      VWA_2: "",
    });
  };

  const handleFindMatchClick = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!allFieldsFilled) {
      alert("Please fill in all fields before finding a match.");
      return;
    }

    // Make API call using the formData
    fetch(apiEndpoints.matchStr, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        console.log(data); // Example: log the response data
        setUsers(data);
      })
      .catch((error) => {
        // Handle error
        console.error("An error occurred:", error);
      });
  };

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              STR Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Enter the details of str repeat
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-5">
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "TCTA"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="D3S1358_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D3S1358_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D3S1358_1"
                    id="D3S1358_1"
                    value={formData.D3S1358_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="D3S1358_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D3S1358_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D3S1358_2"
                    id="D3S1358_2"
                    value={formData.D3S1358_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "GATA"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="D7S820_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D7S820_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D7S820_1"
                    id="D7S820_1"
                    value={formData.D7S820_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="D7S820_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D7S820_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D7S820_2"
                    id="D7S820_2"
                    value={formData.D7S820_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "TCTA"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="D8S1179_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D8S1179_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D8S1179_1"
                    id="D8S1179_1"
                    value={formData.D8S1179_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="D8S1179_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D8S1179_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D8S1179_2"
                    id="D8S1179_2"
                    value={formData.D8S1179_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "GATA"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="D16S539_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D16S539_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D16S539_1"
                    id="D16S539_1"
                    value={formData.D16S539_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="D16S539_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D16S539_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D16S539_2"
                    id="D16S539_2"
                    value={formData.D16S539_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "AGAA"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="D18S51_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D18S51_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D18S51_1"
                    id="D18S51_1"
                    value={formData.D18S51_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="D18S51_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D18S51_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D18S51_2"
                    id="D18S51_2"
                    value={formData.D18S51_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "TCTA"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="D21S11_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D21S11_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D21S11_1"
                    id="D21S11_1"
                    value={formData.D21S11_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="D21S11_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  D21S11_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="D21S11_2"
                    id="D21S11_2"
                    value={formData.D21S11_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "AGAT"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="FGA_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  FGA_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="FGA_1"
                    id="FGA_1"
                    value={formData.FGA_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="FGA_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  FGA_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="FGA_2"
                    id="FGA_2"
                    value={formData.FGA_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Repeating sequence at this locus is "GTCT"
              </p>
              <div className="sm:col-span-2">
                <label
                  htmlFor="VWA_1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  VWA_1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="VWA_1"
                    id="VWA_1"
                    value={formData.VWA_1}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="VWA_2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  VWA_2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="VWA_2"
                    id="VWA_2"
                    value={formData.VWA_2}
                    onChange={handleInputChange}
                    placeholder="22"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => handleFindMatchClick(e)}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Find Match
            </button>
          </div>
        </div>
      </form>

      {users.length !== 0 ? (
        <div className="mt-20">
          <p className="mt-1 text-lg leading-6 text-gray-600">
            Matched Profiles
          </p>

          <div className="rounded-md mt-5 pt-5 px-10 bg-gray-900">
            <ul role="list" className="divide-y divide-gray-800">
              {users.map((usr) => (
                <>
                  <li
                    key={usr.User._id}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-800"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-white">
                          {usr.User.Name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                          {usr.User.Contact_Email}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-white">
                        {usr.User.Occupation}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-400">
                        DOB{" "}
                        <time dateTime={usr.User.Date_of_Birth}>
                          {usr.User.Date_of_Birth}
                        </time>
                      </p>
                    </div>
                  </li>
                  <div className="py-10 flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-white">
                        Str Id:<span className="pl-10">{usr.STR._id}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D3S1358_1:
                        <span className="pl-10">{usr.STR.D3S1358_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D3S1358_2:
                        <span className="pl-10">{usr.STR.D3S1358_2}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D7S820_1:
                        <span className="pl-10">{usr.STR.D7S820_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D7S820_2:
                        <span className="pl-10">{usr.STR.D7S820_2}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D8S1179_1:
                        <span className="pl-10">{usr.STR.D8S1179_1}</span>
                      </p>

                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D8S1179_2:
                        <span className="pl-10">{usr.STR.D8S1179_2}</span>
                      </p>

                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D16S539_1:
                        <span className="pl-10">{usr.STR.D16S539_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D16S539_2:
                        <span className="pl-10">{usr.STR.D16S539_2}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D18S51_1:
                        <span className="pl-10">{usr.STR.D18S51_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D18S51_2:
                        <span className="pl-10">{usr.STR.D18S51_2}</span>
                      </p>

                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D21S11_1:
                        <span className="pl-10">{usr.STR.D21S11_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        D21S11_2:
                        <span className="pl-10">{usr.STR.D21S11_2}</span>
                      </p>

                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        FGA_1:<span className="pl-10">{usr.STR.FGA_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        FGA_2:<span className="pl-10">{usr.STR.FGA_2}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        VWA_1:<span className="pl-10">{usr.STR.VWA_1}</span>
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                        VWA_2:<span className="pl-10">{usr.STR.VWA_2}</span>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="mt-10 text-sm leading-6 text-gray-600">
          Try Entering STR/No Matching Profiles Found!!!
        </p>
      )}
    </>
  );
}
