import React, { useState } from "react";
import { apiEndpoints } from "../config";

const initialFormData = {
  Name: "",
  Date_of_Birth: "",
  Place_of_Birth: "",
  Nationality: "",
  Occupation: "",
  Contact_Email: "",
  Medical_History: "",
  str: {
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

export default function AddUser() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send API request here using formData
      const response = await fetch(apiEndpoints.createUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      // Handle API error
      console.error("API Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("_")) {
      const [strKey, strIndex] = name.split("_");
      setFormData((prevData) => ({
        ...prevData,
        str: {
          ...prevData.str,
          [strKey]: {
            ...prevData.str[strKey],
            [strIndex]: value,
          },
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        {/* User Details */}
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <div className="mb-4">
          <label htmlFor="Name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.user.Name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Date_of_Birth" className="block text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            id="Date_of_Birth"
            name="Date_of_Birth"
            value={formData.user.Date_of_Birth}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Place_of_Birth" className="block text-sm font-medium">
            Place of Birth
          </label>
          <input
            type="text"
            id="Place_of_Birth"
            name="Place_of_Birth"
            value={formData.user.Place_of_Birth}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Nationality" className="block text-sm font-medium">
            Nationality
          </label>
          <input
            type="text"
            id="Nationality"
            name="Nationality"
            value={formData.user.Nationality}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Occupation" className="block text-sm font-medium">
            Occupation
          </label>
          <input
            type="text"
            id="Occupation"
            name="Occupation"
            value={formData.user.Occupation}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Contact_Email" className="block text-sm font-medium">
            Contact Email
          </label>
          <input
            type="email"
            id="Contact_Email"
            name="Contact_Email"
            value={formData.user.Contact_Email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Medical_History"
            className="block text-sm font-medium"
          >
            Medical History
          </label>
          <textarea
            id="Medical_History"
            name="Medical_History"
            value={formData.user.Medical_History}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* STR Details */}
        <h2 className="text-2xl font-semibold mt-6 mb-4">STR Details</h2>
        {/* Example input for STR D3S1358_1 */}
        <div className="mb-4">
          <label htmlFor="D3S1358_1" className="block text-sm font-medium">
            D3S1358_1
          </label>
          <input
            type="number"
            id="D3S1358_1"
            name="D3S1358_1"
            value={formData.str.D3S1358_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D3S1358_2" className="block text-sm font-medium">
            D3S1358_2
          </label>
          <input
            type="number"
            id="D3S1358_2"
            name="D3S1358_2"
            value={formData.str.D3S1358_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D7S820_1" className="block text-sm font-medium">
            D7S820_1
          </label>
          <input
            type="number"
            id="D7S820_1"
            name="D7S820_1"
            value={formData.str.D7S820_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D7S820_2" className="block text-sm font-medium">
            D7S820_2
          </label>
          <input
            type="number"
            id="D7S820_2"
            name="D7S820_2"
            value={formData.str.D7S820_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D8S1179_1" className="block text-sm font-medium">
            D8S1179_1
          </label>
          <input
            type="number"
            id="D8S1179_1"
            name="D8S1179_1"
            value={formData.str.D8S1179_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D8S1179_2" className="block text-sm font-medium">
            D8S1179_2
          </label>
          <input
            type="number"
            id="D8S1179_2"
            name="D8S1179_2"
            value={formData.str.D8S1179_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D16S539_1" className="block text-sm font-medium">
            D16S539_1
          </label>
          <input
            type="number"
            id="D16S539_1"
            name="D16S539_1"
            value={formData.str.D16S539_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D16S539_2" className="block text-sm font-medium">
            D16S539_2
          </label>
          <input
            type="number"
            id="D16S539_2"
            name="D16S539_2"
            value={formData.str.D16S539_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D18S51_1" className="block text-sm font-medium">
            D18S51_1
          </label>
          <input
            type="number"
            id="D18S51_1"
            name="D18S51_1"
            value={formData.str.D18S51_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D18S51_2" className="block text-sm font-medium">
            D18S51_2
          </label>
          <input
            type="number"
            id="D18S51_2"
            name="D18S51_2"
            value={formData.str.D18S51_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D21S11_1" className="block text-sm font-medium">
            D21S11_1
          </label>
          <input
            type="number"
            id="D21S11_1"
            name="D21S11_1"
            value={formData.str.D21S11_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D21S11_2" className="block text-sm font-medium">
            D21S11_2
          </label>
          <input
            type="number"
            id="D21S11_2"
            name="D21S11_2"
            value={formData.str.D21S11_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="FGA_1" className="block text-sm font-medium">
            FGA_1
          </label>
          <input
            type="number"
            id="FGA_1"
            name="FGA_1"
            value={formData.str.FGA_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="FGA_2" className="block text-sm font-medium">
            FGA_2
          </label>
          <input
            type="number"
            id="FGA_2"
            name="FGA_2"
            value={formData.str.FGA_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="VWA_1" className="block text-sm font-medium">
            VWA_1
          </label>
          <input
            type="number"
            id="VWA_1"
            name="VWA_1"
            value={formData.str.VWA_1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="VWA_2" className="block text-sm font-medium">
            VWA_2
          </label>
          <input
            type="number"
            id="VWA_2"
            name="VWA_2"
            value={formData.str.VWA_2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {/* ... Other STR detail input fields ... */}

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="bg-blue-500 text-white py-2 px-4 rounded-full mt-6 hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
