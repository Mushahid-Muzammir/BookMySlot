
const SelectCourt = () => {
  return (
    <div className="w-full h-auto min-h-screen">
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-6">
                <div className="w-full py-8">
                    <p className="text-3xl text-center font-bold text-[#176B87] animate-fade-in">
                    Select Your Preferred Court
                    </p>
                </div>

                <div className="relative w-full px-6">   
                        <div className="w-full flex justify-center mb-6">
                            <input className="w-3/5 h-12 rounded-lg bg-white border border-gray-300 px-6 outline-none shadow-sm focus:border-blue-500 transition-all"
                                placeholder="Search for a court..."/>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                                <div className="flex flex-col items-left text-left bg-white border border-gray-300 rounded-lg p-3 shadow-md transition-all hover:shadow-lg hover:scale-105">
                                    <img alt="Employee" className="w-[full] h-28 object-cover border-1 border-gray-200"/>
                                    <p className="text-medium font-semibold text-black"> court.court_name </p>
                                    <p className="text-sm text-gray-600"> court.description </p>
                                    <p className="text-medium font-semibold text-black">💰 Rs.  court.price </p>
                                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
                                        Select Court
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="w-full md:w-1/3 p-6">
            <div className="w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200 sticky top-6 max-h-[80vh] overflow-hidden">
                <div className="flex flex-row items-center gap-4">
                <img className="w-20 h-20 rounded-lg object-cover"/>
                <div>
                    <p className="text-lg font-semibold text-black">court.court_name</p>
                    <p className="text-sm text-gray-600">court.address</p>
                    <p className="text-sm text-gray-600">📞 +94 court.contact</p>
                </div>
                </div>
                <hr className="mt-4"/>

                <div className="p-4">
                <hr className="my-3"/>
                <div className="flex justify-between text-lg font-semibold">
                    <p>Total</p>
                    <p>💰 LKR totalPrice</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SelectCourt