import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import VisaApplicationForm from '../components/VisaApplicationForm';
import { Helmet } from 'react-helmet';

const VisaDetails = () => {
  const { id } = useParams();
  const visa = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  const { visaType, countryName, processingTime, fee, validity } = visa;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
        <Helmet>
              <title>Visa Details | Visa Navigator Portal </title>
          </Helmet>
      <div className="max-w-3xl w-full">
        <h2 className="text-center font-extrabold text-4xl text-orange-600 mb-6">
          Visa Details
        </h2>
        <div className="p-8 rounded-xl bg-white shadow-xl border-t-4 border-orange-500">
          <div className="space-y-6">
            <p className="text-xl text-gray-700">
              <strong className="font-semibold text-orange-500">Visa Type:</strong> {visaType}
            </p>
            <p className="text-xl text-gray-700">
              <strong className="font-semibold text-orange-500">Country Name:</strong> {countryName}
            </p>
            <p className="text-xl text-gray-700">
              <strong className="font-semibold text-orange-500">Processing Time:</strong> {processingTime}
            </p>
            <p className="text-xl text-gray-700">
              <strong className="font-semibold text-orange-500">Fee:</strong> ${fee}
            </p>
            <p className="text-xl text-gray-700">
              <strong className="font-semibold text-orange-500">Visa Validity:</strong> {validity}
            </p>
          </div>
          <div className="text-center mt-8">
            <button
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-300 transition duration-300"
              onClick={() => setShowModal(true)}
            >
              Apply for Visa
            </button>
          </div>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <VisaApplicationForm onClose={() => setShowModal(false)} visa={visa} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default VisaDetails;
