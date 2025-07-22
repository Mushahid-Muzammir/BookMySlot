import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { Court } from "../../dataType";
import Header from "../../components/Header";
import courtsImage from "../../assets/football2.jpg";
import { getCourtBySportId } from "../../services/courtService";
import Select from "react-select";


const SelectCourt = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();
  const sportId = parseInt(searchParams.get("sportId") || "0", 10);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderRadius: "15px",
      padding: "5px",
      fontSize: "13px",
      fontWeight: "bold",
      boxShadow: "none",
      width: "250px",
      color: "#ffffff",
      
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

    const cities = [
    { value: "kurunegala", label: "Kurunegala" },
    { value: "matara", label: "Matara" },
    { value: "jaffna", label: "Jaffna" },
    { value: "galle", label: "Galle" },
    { value: "colombo", label: "Colombo" },
    { value: "matale", label: "Matale" },
    { value: "kandy", label: "Kandy" },
    { value: "ampara", label: "Ampara" },
  ];

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

  const filteredCourts = useMemo( () => {
    let filtered = courts;

    filtered = filtered
  .filter(item =>
    !searchTerm || item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(item =>
    !selectedCity || item.location?.toLowerCase().includes(selectedCity.toLowerCase())
  );
    return filtered;
  }, [courts, searchTerm, selectedCity]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#111327] to-[#000000] pb-6">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-left mt-8 mb-6">
          <p className="text-white text-[18px]">
            Filter by location, rating, and price to find the perfect court for your game.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center md:justify-between gap-6 mb-8">
          <div className="relative w-[50%]">
            <input
              type="text"
              className="w-full px-12 py-3 rounded-[15px] border border-[#6C6A61] focus:outline-none text-white placeholder:text-white"
              placeholder="Search a court..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
            <img
              src="/assets/search.svg"
              alt="Search"
              className="absolute left-3 top-1/2 w-5 h-5 transform -translate-y-1/2 border-none text-white invert"/>
          </div>
          <div className="flex flex-col gap-2">
            <Select<{ value: string; label: string }, false>
              styles={customStyles}
              options={cities}
              value={cities.find(city => city.value === selectedCity) || null}
              onChange={(usercity) => setSelectedCity(usercity ? usercity.value : "")}
              isClearable
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select placeholder="Price Range" styles={customStyles} options={filterOptions}  />
          </div>
        </div>

        <div>
          {loading ? (
            <div className="flex items-center justify-center h-30">
              <p className="text-[#111317]">Loading courts...</p>
            </div>
          ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourts.length > 0 ? filteredCourts.map((court, index) => (
                <div
                  key={index}
                  onClick={() =>
                    navigate(`/selectDate?courtId=${court.courtId}`, {
                      state: { sportId: sportId, courtPrice: court.price },
                    })
                  }
                  className="bg-[#000111] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    src={courtsImage}
                    alt={court.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="flex flex-col justify-between p-4">
                      <h3 className="text-xl font-semibold text-white">{court.name}</h3>
                    <div className="flex items-center gap-2">
                      {/* <img src="/assets/location.svg" alt="icon" className="w-5 h-5" /> */}
                      <p className="text-blue-400 text-sm">{court.location}</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-white font-semibold mt-2">
                        Rs. {court.price} /hr
                      </p>
                    </div>
                  </div>
                </div>
              )) :(
                <div>
                  <p className="font-semibold text-white text-center">No courts found.</p>
                </div>
              ) }
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCourt;
