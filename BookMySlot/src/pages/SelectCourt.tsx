import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { Court } from "../dataType";
import courtsImage from "../assets/football2.jpg";
import { getCourtBySportId } from "../services/courtService";
import Select from "react-select";

const SelectCourt = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sportId = parseInt(searchParams.get("sportId") || "0", 10);

  useEffect(() => {
    if(sportId){
      setLoading(true);
      getCourtBySportId(sportId)
      .then( res => {
        setCourts(res);
        setLoading(false);
      })
      
      .catch((error) => {
        console.error("Error fetching courts by sport ID:", error);
      });
    }
  }, []);

  const options = [
    { value: 'daily', label: 'Daily' },
    { value: 'month', label: 'Current' },
    { value: 'last+month', label: 'Last Month' },
    { value: 'year', label: 'Current Year' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className="max-w-screen-xl mx-auto">

        <div className="flex flex-wrap gap-4 mb-6">
          <Select className='w-40' placeholder='Location' options={options} />
          <Select className='w-40' placeholder='Price/hr' options={options} />
          <Select className='w-40' placeholder='Rating' options={options} />
          <input
            className="w-80 h-10 rounded-lg bg-white border border-gray-300 px-4 shadow-sm focus:border-blue-500"
            placeholder="Search for a court..."
          />
        </div>

        <div className="flex flex-row gap-8">

          <div className="flex-4">
            <h2 className="text-2xl font-semibold text-[#22577E] mb-4">Checkout These Courts</h2>
            <hr className="border-b border-gray-300 mb-6" />


            {loading && (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">Loading courts...</p>
              </div>
            )}
            <div className="flex flex-col gap-6">
              {courts.map((court, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all overflow-hidden"
                >
                  <img
                    src={courtsImage}
                    alt={court.name}
                    className="w-1/5 h-full object-cover"
                  />
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-lg font-semibold text-black">{court.name}</p>
                        <p className="text-sm text-gray-600 mt-1">📍{court.location}</p>
                      </div>
                      <p className="text-md font-semibold text-black whitespace-nowrap">Rs. {court.price} /hr</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-end">
                      <button
                        className="px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700"
                        onClick={() => handleNavigation("/selectDate")}
                      >
                        Select Court
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-2xl overflow-scroll h-[100vh]">
            <h2 className="text-xl font-semibold text-[#22577E] mb-4">🔥 Popular Courts</h2>
            <hr className="border-b border-gray-300 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3 min-w-max pb-2">
                {courts.map((court, index) => (
                  <div
                    key={index}
                    className="w-[230px] flex-shrink-0 bg-white border border-gray-300 rounded-lg p-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <img
                      src={courtsImage}
                      alt="Court"
                      className="w-full h-25 object-cover border border-gray-200 rounded"
                    />
                    <p className="text-sm font-semibold text-black mt-2">{court.name}</p>
                    <p className="text-sm text-gray-600 mt-1">🪧 {court.location}</p>
                    <p className="text-md font-semibold text-black mt-1">💰 Rs. {court.price} /hr</p>
                    <button
                      className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700"
                      onClick={() => handleNavigation("/selectDate")}
                    >
                      Select Court
                    </button>
                  </div>
                ))}
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SelectCourt;