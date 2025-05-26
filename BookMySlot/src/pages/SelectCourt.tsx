
const SelectCourt = () => {
  return (
    <div className="w-full h-auto min-h-screen">
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-6">
                <div>
                    <p className="text-lg font-semibold pt-3 pl-6">Please Select Your Gender</p>
                    <div className="flex gap-6 bg-white p-6">
                        <button className="px-6 py-3 rounded-full text-lg font-semibold transition-all">
                        👨 Male
                        </button>
                        <button className="px-6 py-3 rounded-full text-lg font-semibold transition-all">
                        👩 Female
                        </button>
                    </div>
                </div>
                <div className="w-full py-8">
                    <p className="text-3xl text-center font-bold text-[#176B87] animate-fade-in">
                    Select Your Preferred Services
                    </p>
                </div>

                <div className="relative w-full mt-6 px-6">   
                    <div className="mt-8 px-6">
                        <div className="w-full flex justify-center mb-6">
                            <input className="w-3/5 h-12 rounded-lg bg-white border border-gray-300 px-6 outline-none shadow-sm focus:border-blue-500 transition-all"
                                    placeholder="Search for a service..."/>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                            <div className="p-4">
                                <div className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-lg p-6 shadow-md transition-all hover:shadow-lg hover:scale-105">
                                    <p className="text-lg font-semibold text-black"> service.service_name </p>
                                    <p className="text-sm text-gray-600"> service.description </p>
                                    <p className="text-sm text-gray-600 mb-1">⏳ service.duration  min</p>
                                    <p className="text-medium font-semibold text-black">💰 Rs.  service.price </p>
                                </div>
                            </div>
                        </div>

                        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                            <div className="p-4">
                                <a  className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden hover:shadow-xl p-4 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                    <img alt="Employee"
                                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"/>
                                    <div className="text-center mt-3">
                                        <h6 className="text-sm text-gray-600">Select Employee Per Service</h6>
                                    </div>
                                </a>
                            </div>
                            <div className="p-4">
                                <a  className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden hover:shadow-xl p-4 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                    <img alt="Employee" className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"/>
                                    <div className="text-center mt-3">
                                        <h5 className="text-lg font-semibold text-gray-800"> employee.name </h5>
                                        <h6 className="text-sm text-gray-600"> employee.title </h6>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="w-full flex justify-center my-8">
                            <button className="px-12 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-lg font-bold text-white shadow-md">
                                Confirm Selection
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
                    <p className="text-lg font-semibold text-black">branch.branch_name</p>
                    <p className="text-sm text-gray-600">branch.address</p>
                    <p className="text-sm text-gray-600">📞 +94 branch.contact</p>
                </div>
                </div>
                <hr className="mt-4"/>

                <div className="p-4">
                <div className="flex justify-between">
                    <p className="font-semibold text-gray-600">👤 Stylist</p>
                    <p className="font-semibold text-black">selectedEmployee.name</p>
                </div>
                <hr className="my-3"/>
                <div className="flex justify-between">
                    <p>service.service_name</p>
                    <p>💵 LKR service.price</p>
                </div>
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