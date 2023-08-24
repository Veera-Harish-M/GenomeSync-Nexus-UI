import React, { useState, useEffect } from "react";
import { apiEndpoints } from "../config";

const initialEvidence = {
  name: "",
  type: "",
  description: "",
  collectedDate: "",
  collectedBy: "",
  strDetails: {
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
  },
};

const initialSuspect = {
  name: "",
  age: "",
  gender: "",
};

const initialFormState = {
  caseNumber: "",
  description: "",
  date: "",
  location: "",
  officerId: "",
  evidenceDetails: [initialEvidence],
  suspectDetails: [initialSuspect],
};

const AddCases = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [officerOptions, setOfficerOptions] = useState([]);

  useEffect(() => {
    // Fetch officer details from the API
    fetch(apiEndpoints.officerDetails)
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((officer) => ({
          label: officer.name, // Use the appropriate property for the officer's name
          value: officer._id, // Use the appropriate property for the officer's ID
        }));
        setOfficerOptions(options);
      })
      .catch((error) =>
        console.error("Error fetching officer details:", error)
      );
  }, []);

  const handleInputChange = (e, section, index, field) => {
    const value = e.target.value;

    if (section === "evidenceDetails" || section === "suspectDetails") {
      const updatedSection = [...formData[section]];
      updatedSection[index][field] = value;
      setFormData({
        ...formData,
        [section]: updatedSection,
      });
    } else if (section === "evidence" && field.startsWith("strDetails")) {
      const updatedEvidence = [...formData.evidenceDetails];
      const [key, subField] = field.split(".");
      const evidenceIndex = parseInt(index);

      if (!updatedEvidence[evidenceIndex].strDetails) {
        updatedEvidence[evidenceIndex].strDetails = {};
      }

      updatedEvidence[evidenceIndex].strDetails = {
        ...updatedEvidence[evidenceIndex].strDetails,
        [subField]: value,
      };

      setFormData({
        ...formData,
        evidenceDetails: updatedEvidence,
      });
    } else if (field === "officerId") {
      setFormData({
        ...formData,
        officerId: value,
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = (e) => {
    // Check if all fields are populated
    e.preventDefault();
    const isFormValid =
      formData.evidenceDetails.every(
        (evidence) =>
          evidence.name &&
          evidence.type &&
          evidence.description &&
          evidence.collectedDate &&
          evidence.collectedBy &&
          Object.values(evidence.strDetails).every((value) => value !== "")
      ) &&
      formData.suspectDetails.every(
        (suspect) => suspect.name && suspect.age && suspect.gender
      );

    if (!isFormValid) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // If form is valid, perform the API call
    fetch(apiEndpoints.createCase, {
      method: "POST", // or 'GET' or 'PUT' depending on your API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        // You can handle the API response data here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the API call
      });
  };

  const handleAddEvidence = () => {
    setFormData({
      ...formData,
      evidenceDetails: [...formData.evidenceDetails, { ...initialEvidence }],
    });
  };

  const handleAddSuspect = () => {
    setFormData({
      ...formData,
      suspectDetails: [...formData.suspectDetails, { ...initialSuspect }],
    });
  };

  return (
    <div className="p-4">
      <form className="space-y-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Case Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the details of the Case
          </p>
          <div>
            <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
              Case Number
            </label>
            <input
              type="text"
              name="caseNumber"
              value={formData.caseNumber}
              onChange={(e) => handleInputChange(e, "", "", "caseNumber")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={(e) => handleInputChange(e, "", "", "description")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => handleInputChange(e, "", "", "date")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={(e) => handleInputChange(e, "", "", "location")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
              Officer ID
            </label>
            <select
              name="officerId"
              value={formData.officerId}
              onChange={(e) =>
                handleInputChange(e, "officerId", 0, "officerId")
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select Officer</option>
              {officerOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Evidence Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the details of the Gathered Evidence
          </p>
          {formData.evidenceDetails.map((evidence, evidenceIndex) => (
            <div
              className="mt-10 border-b border-gray-900/10 pb-12"
              key={evidenceIndex}
            >
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Evidence Name
              </label>
              <input
                type="text"
                name={`evidenceName_${evidenceIndex}`}
                value={evidence.name}
                onChange={(e) =>
                  handleInputChange(e, "evidenceDetails", evidenceIndex, "name")
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Evidence Type
              </label>
              <input
                type="text"
                name={`evidenceDetails[${evidenceIndex}].type`}
                value={evidence.type}
                onChange={(e) =>
                  handleInputChange(e, "evidenceDetails", evidenceIndex, "type")
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Evidence Description
              </label>
              <input
                type="text"
                name={`evidenceDetails[${evidenceIndex}].description`}
                value={evidence.description}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    "evidenceDetails",
                    evidenceIndex,
                    "description"
                  )
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Collected Date
              </label>
              <input
                type="date"
                name={`evidenceDetails[${evidenceIndex}].collectedDate`}
                value={evidence.collectedDate}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    "evidenceDetails",
                    evidenceIndex,
                    "collectedDate"
                  )
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Collected By
              </label>
              <select
                name={`evidenceDetails[${evidenceIndex}].collectedBy`}
                value={evidence.collectedBy}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    "evidenceDetails",
                    evidenceIndex,
                    "collectedBy"
                  )
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select Collected By</option>
                {officerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Str Details
              </label>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(evidence.strDetails).map((strKey, strIndex) => (
                  <div key={strIndex}>
                    <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                      {strKey}
                    </label>
                    <input
                      type="text"
                      name={`evidenceDetails[${evidenceIndex}].strDetails.${strKey}`}
                      value={evidence.strDetails[strKey]}
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          "evidence",
                          evidenceIndex,
                          `strDetails.${strKey}`
                        )
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddEvidence}
            className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            + Add Evidence
          </button>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Suspect Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the details of the Suspects
          </p>
          {formData.suspectDetails.map((suspect, suspectIndex) => (
            <div
              className="mt-10 border-b border-gray-900/10 pb-12"
              key={suspectIndex}
            >
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Suspect Name
              </label>
              <input
                type="text"
                name={`suspectName_${suspectIndex}`}
                value={suspect.name}
                onChange={(e) =>
                  handleInputChange(e, "suspectDetails", suspectIndex, "name")
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Suspect Age
              </label>
              <input
                type="number"
                name={`suspectDetails[${suspectIndex}].age`}
                value={suspect.age}
                onChange={(e) =>
                  handleInputChange(e, "suspectDetails", suspectIndex, "age")
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <label className="mt-5 block text-sm font-medium leading-6 text-gray-900">
                Suspect Gender
              </label>
              <input
                type="text"
                name={`suspectDetails[${suspectIndex}].gender`}
                value={suspect.gender}
                onChange={(e) =>
                  handleInputChange(e, "suspectDetails", suspectIndex, "gender")
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSuspect}
            className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            + Add Suspect
          </button>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCases;
