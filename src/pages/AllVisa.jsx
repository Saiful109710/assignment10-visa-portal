import React, { useContext, useEffect, useState } from "react";
import VisaCard from "../components/VisaCard";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AllVisa = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisaType,setSelectedVisaType] = useState("")
  const [filteredVisas,setFilteredVisas] = useState([])
// State for selected visa type

  // Fetch visas data from the server
  useEffect(() => {
    document.title = "All Visa - Visa Navigator"; // Set page title
    setLoading(true);
    fetch("https://visa-navigator-portal-server-chi.vercel.app/allVisa")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch visas.");
        }
        return res.json();
      })
      .then((data) => {
        setVisas(data);
        setFilteredVisas(data); // Initially show all visas
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching visas:", error);
        setLoading(false);
      });
  }, [setLoading]);

  // Filter visas by selected type
const handleVisaTypeChange = (e)=>{
        const selectedVisa = e.target.value
        setSelectedVisaType(selectedVisa);

        if(selectedVisa===""){
          setFilteredVisas(visas)
        }else{
          const filtered = visas.filter(visa=>visa.visaType===selectedVisa);
          setFilteredVisas(filtered)
        }
}

  return (
    <section className="py-10 bg-gray-50">
        <Helmet>
              <title>All Visa | Visa Navigator Portal </title>
          </Helmet>
      <div className="max-w-6xl mx-auto mb-6">
        <label htmlFor="visaType" className="block text-gray-700 font-semibold mb-2">
          Filter by Visa Type
        </label>
        <select
          id="visaType"
          value={selectedVisaType}
          onChange={handleVisaTypeChange}
          className="w-full sm:w-64 p-2 border rounded-md focus:outline-none"
        >
          <option value="">All Visa Types</option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Official Visa">Official Visa</option>
        </select>
      </div>

      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Latest Visa
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : filteredVisas.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filteredVisas.map((visa) => (
            <VisaCard key={visa._id} visa={visa} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-700 font-semibold">
            No visas available for the selected type. Please check back later.
          </p>
        </div>
      )}
    </section>
  );
};

export default AllVisa;
