import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "Tourist Visa",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const visaTypes = ["Tourist Visa", "Student Visa", "Official Visa"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedDocuments = checked
        ? [...prevData.requiredDocuments, value]
        : prevData.requiredDocuments.filter((doc) => doc !== value);
      return { ...prevData, requiredDocuments: updatedDocuments };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allVisaData = { ...formData, email: user.email };
    fetch("https://visa-navigator-portal-server-chi.vercel.app/allVisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allVisaData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Successfully added visa!",
          icon: "success",
          confirmButtonColor: "#FFA500", // Orange color for the alert button
        });

        setFormData({
          countryImage: "",
          countryName: "",
          visaType: "Tourist Visa",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: "",
          fee: "",
          validity: "",
          applicationMethod: "",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg rounded-lg">
        <Helmet>
              <title>Add Visa | Visa Navigator Portal </title>
          </Helmet>
      <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-8">
        Add Visa Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700">
              Country Image URL
            </label>
            <input
              type="text"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Country Name
            </label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter country name"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Visa Type</label>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {visaTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Processing Time
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter processing time"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">
            Required Documents
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {documentOptions.map((doc) => (
              <div key={doc} className="flex items-center">
                <input
                  type="checkbox"
                  id={doc}
                  value={doc}
                  onChange={handleCheckboxChange}
                  checked={formData.requiredDocuments.includes(doc)}
                  className="mr-2"
                />
                <label htmlFor={doc} className="text-gray-600">
                  {doc}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter description"
            rows="4"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block font-semibold text-gray-700">
              Age Restriction
            </label>
            <input
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter age restriction"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Fee</label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter fee"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Validity</label>
            <input
              type="text"
              name="validity"
              value={formData.validity}
              onChange={handleChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter validity"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">
            Application Method
          </label>
          <input
            type="text"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter application method"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-md shadow-md hover:from-orange-600 hover:to-orange-700 transition duration-200"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;
