import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Modal from "../components/Modal";
import UpdateVisaForm from "../components/UpdateVisaForm";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyAddedVisa = () => {
  const { user, loading, setLoading } = useContext(AuthContext);

  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    // SweetAlert Confirmation
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-portal-server-chi.vercel.app/allVisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = visas.filter((visa) => visa._id !== id);
              setVisas(remaining);

              Swal.fire("Deleted!", "The visa has been deleted.", "success");
            } else {
              Swal.fire("Error!", "Failed to delete the visa.", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };

  useEffect(() => {
    
    fetch(`https://visa-navigator-portal-server-chi.vercel.app/myAddedVisa`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        email: user.email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setLoading(false);
      });
  }, [user.email,visas]);

  return (
    <div className="p-10 ">
        <Helmet>
              <title>My Added Visa | Visa Navigator Portal </title>
          </Helmet>
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
        My Added Visa
      </h2>

      {loading ? (
        <div className="flex justify-center items-center ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div>
          {visas.length === 0 ? (
            <div className=" flex justify-center items-center h-[200px] lg:h-[300px]">
              <h2 className="text-center text-3xl font-bold">No Visa Found</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visas.map((visa) => (
                <div key={visa._id} className="rounded-lg shadow-lg">
                  <img
                    src={visa.countryImage}
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold">
                      <strong>Country:</strong> {visa.countryName}
                    </p>
                    <p className="text-sm">
                      <strong>Visa Type:</strong> {visa.visaType}
                    </p>
                    <p className="text-sm">
                      <strong>Processing Time:</strong> {visa.processingTime}
                    </p>
                    <p className="text-sm">
                      <strong>Fee:</strong> ${visa.fee}
                    </p>
                    <p className="text-sm">
                      <strong>Validity:</strong> {visa.validity}
                    </p>
                    <p className="text-sm">
                      <strong>Application Method:</strong>{" "}
                      {visa.applicationMethod}
                    </p>

                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => {
                          setSelectedVisa(visa);
                          setShowModal(true);
                        }}
                        className="btn bg-blue-600 text-white"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(visa._id)}
                        className="btn bg-red-600 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateVisaForm
                visas={visas}
                setVisas={setVisas}
                onClose={() => setShowModal(false)}
                selectedVisa={selectedVisa}
              ></UpdateVisaForm>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default MyAddedVisa;
