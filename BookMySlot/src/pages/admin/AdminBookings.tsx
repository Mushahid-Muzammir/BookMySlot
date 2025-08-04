import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';
import type { Booking } from '../../dataType';
import { getAllBookingsByCourt } from '../../services/bookingService';



const AdminBookings = () => {

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 8;
    const totalPages = Math.ceil(bookings.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentPageData = bookings.slice(indexOfFirstRow, indexOfLastRow);
    const {user} = useUser();
        
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    
    const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'NAME', accessor: 'name' },
  { header: 'PHONE', accessor: 'phone' },
  { header: 'DATE', accessor: 'date' },
  { header: 'START', accessor: 'totalVisit' },
  { header: 'END', accessor: 'lastVisit' },
  { header: 'SPORT', accessor: 'loyaltyPoints' },
  { header: 'ACTION', accessor: 'action',  Cell: () => (
      <button
        onClick={() => handleCustomer()}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        View Customer
      </button>
      ) }];

    useEffect( () => {
      const fetchBookings = async () => {
        try{
          if (user) {
            const response = await getAllBookingsByCourt(user.userId);
            if(response) {
              setBookings(response);
            }
          }
        }catch(error){
          console.error("Error fetching today's bookings", error);
        }
      }
    fetchBookings();
    }, [user]);
                  
    const handleCustomer = () => {}
      return (
        <div className="flex flex-row">
                <AdminSidebar />
                <div className="flex flex-col w-screen h-screen ">
                    <Topbar />
                    <div className="flex flex-col w-full h-full px-3 py-3 bg-gray-100">
                        <div className='flex flex-col h-auto bg-white p-4'>
                          <table className="w-full bg-white">
                          <thead className='w-full px-3 bg-gray-200'>
                            <tr>
                              {columns.map((col, idx) => (
                                <th key={idx} className="py-2 text-md font-semibold">{col.header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {currentPageData.map((customer, idx) => (
                              <tr key={idx} className="hover:bg-gray-100 text-sm">
                                  <td className="py-4 px-8 border-b border-gray-200 ">
                                  {customer.bookingId}
                                  </td>
                                  <td className="py-4 px-8 border-b border-gray-200">
                                  {customer.name}
                                  </td>
                                  <td className="py-4 px-8 border-b border-gray-200">
                                  {customer.contact}
                                  </td>
                                  <td className="py-4 px-8 border-b border-gray-200">
                                  {customer.date}
                                  </td>
                                  <td className="py-4 px-8 border-b border-gray-200">
                                  {customer.startTime}
                                  </td>
                                  <td className="py-4 px-8 border-b border-gray-200">
                                  {customer.endTime}
                                  </td>
                                  <td className="py-4 px-8 border-b border-gray-200">
                                  {customer.sport}
                                  </td>
                                  {/* <td className="py-4 px-12 border-b border-gray-200">
                                  {customer.action}
                                  </td>*/}
                              </tr>
                            ))}
                          </tbody>
                            </table>
                            <div className="flex justify-end items-center space-x-2 mt-4">
                            <button className="px-3 py-1 text-sm rounded-full text-gray-700 hover:bg-blue-500 hover:text-white"
                              onClick={handlePrev}
                              disabled={currentPage === 1}>
                              &lt;
                            </button>
                            {[...Array(totalPages)].map((_, idx) => (
                              <button
                                key={idx}
                                className={`px-3 py-1 text-sm rounded-full border ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'text-gray-700'} hover:bg-blue-500 hover:text-white`}
                                onClick={() => setCurrentPage(idx + 1)}>
                                {idx + 1}
                              </button>
                            ))}

                            <button
                              className="px-3 py-1 text-sm rounded-full text-gray-700 hover:bg-blue-500 hover:text-white"
                              onClick={handleNext}
                              disabled={currentPage === totalPages}>
                              &gt;
                            </button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
      )
}

export default AdminBookings