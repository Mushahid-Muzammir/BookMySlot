import { useState, useEffect } from 'react';
import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { getTodayBookings, getBookingCountByDate } from '../../services/bookingService';
import type { Booking, BookingCountByDate } from '../../dataType';
import { useUser } from '../../context/UserContext';

const AdminDashboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [todayBookings, setTodayBookings] = useState<Booking[]>([]);
  const [revenue, setRevenue] = useState(0);
  const [bookingCountWithDate, setBookingCountWithDate] = useState<BookingCountByDate[]>([]);
  const rowsPerPage = 3;
  const totalPages = Math.ceil(todayBookings.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentPageData = todayBookings.slice(indexOfFirstRow, indexOfLastRow);
  const {user} = useUser();

  useEffect( () => {
    const fetchTodayBookings = async () => {
      try{
        if (user) {
          const response = await getTodayBookings(user.userId);
          if(response) {
            setTodayBookings(response);
            setRevenue(response.reduce((acc : number, booking : any) => acc + booking.price, 0));
            console.log("Today's revenue: ", revenue);
            console.log("Today's Bookings: ", response);
          }
        }
      }catch(error){
        console.error("Error fetching today's bookings", error);
      }
    }
    const fetchBookingCountByDate = async () => {
      try{
        if (user) {
          const response = await getBookingCountByDate(user.userId);
          if(response) {
            setBookingCountWithDate(response);
            console.log("Booking count by date: ", response);    
          }
        }
      }catch(error){
        console.error("Error fetching booking count by date", error);
      }
    }
    fetchBookingCountByDate();
    fetchTodayBookings();
  }, [user]);
  
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'CUSTOMER', accessor: 'name' },
  { header: 'PHONE', accessor: 'phone' },
  { header: 'START', accessor: 'totalVisit' },
  { header: 'END', accessor: 'lastVisit' },
  ];
                
  return (
    <>
        <div className="flex flex-row">
            <AdminSidebar />
            <div className="flex flex-col w-screen h-auto bg-gray-100">
                <Topbar />

                <div className="flex flex-col w-full h-full px-6 bg-gray-100">
                    <div className='w-full gap-2 flex flex-row justify-between px-3 py-5'>
                        <div className="flex flex-col w-3/12 h-auto bg-white p-3 rounded-xl border border-gray-200 ">
                            <div className='flex flex-row items-center'>
                                <img src="/assets/bookings.svg" className='w-16 h-16 p-2 border-3 border-blue-400 rounded-[100%] bg-gray-200' />
                                <h2 className="text-md font-medium px-2 text-gray-400">Today Bookings</h2>
                            </div>
                            <p className="text-2xl font-bold mt-4 ml-4">{todayBookings.length }</p>
                        </div>
                        <div className="flex flex-col w-3/12 h-auto bg-white p-4 rounded-xl border border-gray-200 ">
                            <div className='flex flex-row items-center'>
                                <img src="/assets/price.svg" className='w-16 h-16 p-2 border-3 border-blue-400 rounded-[100%] bg-gray-200' />
                                <h2 className="text-md font-medium px-2 text-gray-400">Today Revenue</h2>
                            </div>
                            <p className="text-2xl font-bold mt-4 ml-4">Rs. {revenue}</p>
                        </div>
                        <div className="flex flex-col w-3/12 h-auto bg-white p-4 rounded-xl border border-gray-200 ">
                            <div className='flex flex-row items-center'>
                                <img src="/assets/expense.svg" className='w-16 h-16 p-2 border-3 border-blue-400 rounded-[100%] bg-gray-200' />
                                <h2 className="text-md font-medium px-2 text-gray-400">Today Expense</h2>
                            </div>
                            <p className="text-2xl font-bold mt-4 ml-4">Rs. 5000</p>
                        </div>
                        <div className="flex flex-col w-3/12 h-auto bg-white p-3 rounded-xl border border-gray-200 ">
                            <div className='flex flex-row items-center'>
                                <img src="/assets/customers.svg" className='w-16 h-16 p-2 border-3 border-blue-400 rounded-[100%] bg-gray-200' />
                                <h2 className="text-md font-medium px-2 text-gray-400">Total Users</h2>
                            </div>
                            <p className="text-2xl font-bold mt-4 ml-4">115</p>
                        </div>
                    </div>
                    <div className='flex w-[95%] h-auto mt-6'>
                      <div className='flex flex-col w-[90%] h-[80%] mx-5 bg-white rounded-lg border border-gray-200 '>
                          <table className="w-full bg-white">
                            <thead className='w-full px-5'>
                              <tr>
                                {columns.map((col, idx) => (
                                  <th key={idx} className="py-4 font-medium text-gray-400">{col.header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                                {currentPageData.map((booking, idx) => (
                                    <tr key={idx} className="hover:bg-gray-100">
                                        <td className="py-4 px-7 text-sm border-b border-gray-200">
                                        {booking.bookingId}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {booking.name}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {booking.contact}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {booking.startTime}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {booking.endTime}
                                        </td>
                                                                      
                                    </tr>
                                ))}
                            </tbody>
                          </table>
                          <div className="flex justify-end items-center space-x-2 mt-3">
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

                     <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={bookingCountWithDate}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis
                          dataKey="date"
                          tick={{ fill: '#000', fontSize: 12 }}
                          label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
                        />
                        <YAxis
                          tick={{ fill: '#000', fontSize: 12 }}
                          label={{
                            value: 'Bookings',
                            angle: -90,
                            position: 'insideLeft',
                            fill: '#000',
                            fontSize: 12,
                          }}
                        />
                        <Tooltip />
                        <Bar dataKey="bookingCount" fill="#296dd9" barSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    </>  
    )
}

export default AdminDashboard