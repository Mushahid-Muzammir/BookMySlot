
const SelectDate = () => {
  return (
    <div className="w-full h-auto min-h-screen">
        <div className="flex flex-row">
            <div className="flex-1 px-6">
                <div className="w-full py-8">
                    <p className="text-3xl text-center font-bold text-[#176B87] animate-fade-in">
                    Select Date and Time for Your Appointment
                    </p>
                </div>
            
                <div className="flex flex-col items-center">
                    <input type="date"  className="border border-gray-400 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-lg"/>
                </div>
            
                <div className="w-auto h-auto p-6">
                    <h2 className="text-2xl font-bold text-center mb-6 animate-slide-in">Select a Time Slot</h2>
            
                    <div className="flex justify-center mb-4">
                        <p className="text-lg font-medium">Available slots for 
                            <span className="font-bold text-blue-700">selectedDate</span>:
                        </p>
                    </div>
            
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
                        <button 
                            className="px-6 py-3 rounded-lg border text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm">
                            slot.start_time  -  slot.end_time 
                        </button>
                    </div>

                    <div  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-center mb-4">Confirm Your Booking</h2>
                        
                            <div className="border p-4 rounded-lg space-y-3">
                                <div className="flex justify-between">
                                    <p className="font-semibold">📍 Branch:</p>
                                    <p className="text-black"> branch.branch_name </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">👤 Stylist:</p>
                                    <p className="text-black"> selectedEmployee.name </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">📅 Date:</p>
                                    <p className="text-black"> selectedDate </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">⏰ Time:</p>
                                    <p className="text-black"> selectedSlot.start_time  -  selectedSlot.end_time </p>
                                </div>
                                <hr/>
                            
                                <div className="flex justify-between">
                                    <p> service.service_name </p>
                                    <p>💵 LKR service.price </p>
                                </div>
                                <hr/>
                            
                                <div className="flex justify-between text-lg font-semibold">
                                    <p>Total</p>
                                    <p>💰 LKR totalPrice </p>
                                </div>
                            </div>
                        
                            <div className="flex justify-between mt-4">
                                <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500">Cancel</button>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Confirm</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="mt-6 text-center">
                        <p className="text-lg font-medium text-blue-600">
                            Appointment will be scheduled for <span className="font-bold">selectedDate</span> at <span className="font-bold"> selectedSlot.start_time  -  selectedSlot.end_time </span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-1/3 p-6">
                <div className="w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200 sticky top-6 max-h-[80vh] overflow-hidden">
                    <div className="flex flex-row items-center gap-6 mb-6">
                        <img className="w-20 h-20 rounded-lg object-cover"/>
                        <div>
                            <p className="text-lg font-semibold text-black">branch.branch_name</p>
                            <p className="text-sm text-gray-600">branch.address</p>
                            <p className="text-sm text-gray-600">📞 +94 branch.contact</p>
                        </div>
                    </div>
                    <hr className="mt-4 mb-6"/>    
                    <div className="p-4">
                        <div className="flex justify-between mb-4">
                            <p  className="font-semibold text-gray-600">👤 Stylist</p>
                            <p  className="font-semibold text-black">selectedEmployee.name</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p  className="font-semibold text-gray-600">📅 Date</p>
                            <p  className="font-semibold text-black">selectedDate</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p  className="font-semibold text-gray-600">⏰ Time</p>
                            <p  className="font-semibold text-black">selectedSlot.start_time - selectedSlot.end_time</p>
                        </div>
                        <hr className="my-6"/>
                        <div className="flex justify-between mb-4">
                            <p>service.service_name</p>
                            <p>💵 LKR service.price</p>
                        </div>
                        <hr className="my-6"/>
                        <div className="flex justify-between text-lg font-semibold">
                            <p>Total</p>
                            <p>💰 LKR totalPrice</p>
                        </div>
                        <div className="w-full flex justify-center mt-6">
                            <button className="px-12 py-4 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SelectDate