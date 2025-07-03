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

  const navigate = useNavigate();
  const sportId = parseInt(searchParams.get("sportId") || "0", 10);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#FFFFFF",
      borderRadius: "15px",
      padding: "3px",
      fontSize: "13px",
      fontWeight: "semibold",
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

    if(searchTerm){
      filtered = filtered.filter(item =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [courts, searchTerm]);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-left mt-8 mb-6">
          <p className="text-[#111317] text-[18px]">
            Filter by location, rating, and price to find the perfect court for your game.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center md:justify-between gap-6 ">
          <div className="flex flex-col gap-2">
            <Select placeholder="Select Location" styles={customStyles} options={filterOptions}/>
          </div>
          <div className="flex flex-col gap-2">
            <Select placeholder="Price" styles={customStyles} options={filterOptions} />
          </div>
          <div className="flex flex-col gap-2">
            <Select placeholder="Rating" styles={customStyles} options={filterOptions} />
          </div>
        </div>

        <div className="relative w-full my-4">
        <input
          type="text"
          className="w-full px-12 py-2 rounded-[15px] border border-[#6C6A61] focus:outline-none"
          placeholder="Search a court..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="/assets/search.svg"
          alt="Search"
          className="absolute left-3 top-1/2 w-5 h-5 transform -translate-y-1/2 opacity-60"
        />
      </div>


        <div>
          {loading ? (
            <div className="flex items-center justify-center h-30">
              <p className="text-[#111317]">Loading courts...</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {filteredCourts.map((court, index) => (
                <div
                    key={index}
                    onClick={() => navigate(`/selectDate?courtId=${court.courtId}`, {state: { sportId : sportId, courtPrice : court.price } })}
                    className="h-auto flex flex-row justify-between bg-white border border-[#C1C7C6] rounded-[25px] hover:shadow-lg hover:scale-[1.01] transition-all overflow-hidden cursor-pointer">
                    <div className="flex-1 pl-4 flex flex-col justify-center gap-1">
                      <p className="text-lg font-semibold text-black">{court.name}</p>
                      <p className="text-sm text-gray-500">{court.description}</p>
                      <p className="text-sm text-gray-500">• 112 Reviews</p>
                      <div className="flex items-center gap-1">
                        <img src="/assets/location.svg" alt="icon" className="w-4 h-4" />
                        <p className="text-sm text-black">{court.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end p-3">
                      <p className="text-md font-semibold text-black mb-2">Rs. {court.price} /hr</p>
                      <img
                        src={courtsImage}
                        alt={court.name}
                        className="w-32 h-24 object-cover rounded-r-xl"
                      />
                    </div>
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
