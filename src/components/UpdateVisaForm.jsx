import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateVisaForm = ({ onClose, selectedVisa,visas,setVisas }) => {
  const [formData, setFormData] = useState(selectedVisa);
  console.log(formData?.requiredDocuments);

  const visaTypes = [
    "Tourist Visa",
    "Business Visa",
    "Official Visa",
    "Student Visa",
  ];

  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const currentDocuments = prevData?.requiredDocuments || [];
      const updatedDocuments = checked
        ? [...currentDocuments, value]
        : currentDocuments.filter((doc) => doc !== value);

      return { ...prevData, requiredDocuments: updatedDocuments };
    });
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(
      `https://visa-navigator-portal-server-chi.vercel.app/allVisa/${selectedVisa._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setVisas(visas)
          Swal.fire({
            icon: "success",
            title: "Visa updated successfully!",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to update visa!",
            text: "Please try again.",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="p-10 shadow-lg rounded-lg bg-white">
      <h2 className="text-center font-bold text-3xl mb-4">Update Visa</h2>
      <form action="" className="space-y-3" onSubmit={handleUpdateForm}>
        <div>
          <label htmlFor="">Country Image URL:</label>
          <input
            type="text"
            name="countryImage"
            value={formData.countryImage}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter Image URL"
            required
          />
        </div>
        {/* Country Name */}
        <div>
          <label htmlFor="">Country Name</label>
          <input
            type="text"
            name="countryName"
            value={formData.countryName}
            onChange={handleChange}
            className="w-full input input-bordered"
            placeholder="Enter Country Name"
            required
          />
        </div>
        {/* Visa Type */}
        <div>
          <label htmlFor="">Visa Type</label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full input input-bordered"
          >
            {visaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* Processing Time */}
        <div>
          <label htmlFor="">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            className="w-full input input-bordered"
            placeholder="Enter Processing Time"
            required
          />
        </div>
        {/* Required Documents */}
        <div>
          <label htmlFor="">Required Documents</label>
          {documentOptions.map((doc) => (
            <div key={doc}>
              <input
                type="checkbox"
                id={doc}
                value={doc}
                onChange={handleCheckboxChange}
                checked={formData?.requiredDocuments?.includes(doc)}
              />
              <label htmlFor={doc} className="ml-2">
                {doc}
              </label>
            </div>
          ))}
        </div>
        {/* Description */}
        <div>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full input input-bordered"
            placeholder="Enter Description"
            rows="4"
          ></textarea>
        </div>
        {/* Age Restriction */}
        <div>
          <label htmlFor="">Age Restriction:</label>
          <input
            type="number"
            name="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleChange}
            className="w-full input input-bordered"
            placeholder="Enter Age Restriction"
            required
          />
        </div>
        {/* Fee */}
        <div>
          <label htmlFor="">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="w-full input input-bordered"
            placeholder="Enter Fee"
            required
          />
        </div>
        {/* Validity */}
        <div>
          <label htmlFor="">Validity</label>
          <input
            type="text"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            className="w-full input input-bordered"
          />
        </div>
        {/* Application Method */}
        <div>
          <label htmlFor="">Application Method</label>
          <select
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            className="w-full input input-bordered"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col  gap-4">
          
          <input
            type="submit"
            value="Update Visa"
            className="btn bg-blue-500 w-full"
          />

            <button
            type="button"
            className="btn bg-gray-400 w-full"
            onClick={onClose}
            >
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateVisaForm;
