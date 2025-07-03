
const MyBookings = () => {
  return (
    <div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-200">

                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800"> booking.service_name </h3>
                    <span className="text-sm font-medium px-2 py-1 rounded bg-blue-100 text-blue-600">
                        booking.app_status
                    </span>
                </div>

                <p className="text-sm text-gray-600 mb-1">
                    <i className="fas fa-calendar-alt mr-1"></i>
                    <strong>Date:</strong>  booking.date | date:'mediumDate'
                </p>

                <p className="text-sm text-gray-600 mb-1">
                    <i className="fas fa-clock mr-1"></i>
                    <strong>Time:</strong>  booking.start_time - booking.end_time
                </p>

                <p className="text-sm text-gray-600 mb-1">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    <strong>Branch:</strong>  booking.branch_name
                </p>

                <p className="text-sm text-gray-600">
                    <i className="fas fa-user mr-1"></i>
                    <strong>Staff:</strong> booking.name
                </p>

                <div className="mt-4 flex justify-end gap-2">
                    <button className="bg-red-500 text-white text-xs px-4 py-2 rounded hover:bg-red-600">
                        Cancel
                    </button>

                    <button className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600">
                        Reschedule
                    </button>
                </div>
            </div>
        </div>

        <div className="text-center p-10">
            <p className="text-gray-500 text-lg">You don�t have any bookings yet.</p>
        </div>

</div>  
)
}

export default MyBookings