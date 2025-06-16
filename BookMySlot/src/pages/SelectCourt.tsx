import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { Court } from "../dataType";
import Header from "../components/Header";
import courtsImage from "../assets/football2.jpg";
import { getCourtBySportId } from "../services/courtService";
import Select from "react-select";
import { components } from "react-select";


const SelectCourt = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sportId = parseInt(searchParams.get("sportId") || "0", 10);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#F5F5F5",
      borderRadius: "15px",
      padding: "5px",
      fontSize: "15px",
      boxShadow: "none",
      width: "250px",
      textColor: "black"
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: "10px",
    }),
  };

  const filterOptions = [
    { value: "daily", label: "Daily" },
    { value: "month", label: "Current" },
    { value: "last+month", label: "Last Month" },
    { value: "year", label: "Current Year" },
  ];

  const ImagePlaceholder = (props: any) => (
    <components.Placeholder {...props}>
      <div className="flex items-center gap-2 text-gray-500">
        <img src="/assets/location.svg" alt="icon" className="w-5 h-5" />
        <span>{props.children}</span>
      </div>
    </components.Placeholder>
  );

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    if (sportId) {
      getCourtBySportId(sportId)
        .then((res) => {
          setCourts(res);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching courts by sport ID:", error);
          setLoading(false);
        });
    }
  }, [sportId]);

  return (
    <div className="w-full min-h-screen bg-white py-4">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Hero Text */}
        <div className="text-left mt-8 mb-6">
          <h1 className="text-4xl font-bold text-black mb-3">Choose Your Court</h1>
          <p className="text-gray-600 text-lg">
            Filter by location, rating, and price to find the perfect court for your game.
          </p>
        </div>

        {/* Filter Section */}
        <div className="w-full flex flex-wrap justify-center md:justify-between gap-6 ">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Location</label>
            <Select placeholder="Select Location" styles={customStyles} options={filterOptions}   components={{ Placeholder: ImagePlaceholder }}
 />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Price</label>
            <Select placeholder="Price/hr" styles={customStyles} options={filterOptions} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Rating</label>
            <Select placeholder="Rating" styles={customStyles} options={filterOptions} />
          </div>
        </div>

        <div className="relative w-full my-4">
        <input
          type="text"
          className="w-full px-12 py-2 rounded-[15px] border border-gray-300 focus:outline-none"
          placeholder="Search a court..."
        />
        <img
          src="/assets/search.svg"
          alt="Search"
          className="absolute left-3 top-1/2 w-5 h-5 transform -translate-y-1/2 opacity-60"
        />
      </div>


        {/* Courts Section */}
        <div>
          {loading ? (
            <div className="flex items-center justify-center h-30">
              <p className="text-gray-500">Loading courts...</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {courts.map((court, index) => (
                <div
                  key={index}
                  onClick={() => handleNavigation(`/selectDate?courtId=${court.courtId}`)}
                  className="h-auto flex flex-row justify-between bg-[#F5F5F5] rounded-[25px] shadow-md hover:shadow-lg hover:scale-[1.01] transition-all overflow-hidden cursor-pointer"
                >
                  <div className="p-4 flex flex-col justify-center">
                    <p className="text-sm text-gray-600">{court.location}</p>
                    <p className="text-lg font-semibold text-black">{court.name}</p>
                    <p className="text-sm text-gray-500 mt-1">. 112 Reviews</p>
                    <p className="text-md font-semibold text-black mt-1">Rs. {court.price} /hr</p>
                  </div>
                  <img
                    src={courtsImage}
                    alt={court.name}
                    className="w-1/6 object-cover rounded-r-xl"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCourt;
