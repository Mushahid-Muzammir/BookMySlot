import { useState } from 'react';
import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const AdminDashboard = () => {

         const customers = [
            { id: 24, name: 'John Doe', phone: '123-456-7890',  startTime: '10.00', endTime: '11.00', sport: 'Futsal', action: 'View' },
            { id: 22, name: 'Jane Smith', phone: '987-654-3210',  startTime: '12.00', endTime: '13.00', sport: 'Cricket', action: 'View' },
        ];

        const bookingDataByDay = [
          {
            "bookingCount": 12,
            "day": "July 24"
          },
          {
            "bookingCount": 14,
            "day": "July 25"
          },
          {
            "bookingCount": 17,
            "day": "July 26"
          },
          {
            "bookingCount": 13,
            "day": "July 27"
          },
          {
            "bookingCount": 10,
            "day": "July 28"
          },
          {
            "bookingCount": 13,
            "day": "July 29"
          },
          {
            "bookingCount": 8,
            "day": "July 30"
          }
        ];
        const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 3;
        const totalPages = Math.ceil(customers.length / rowsPerPage);
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentPageData = customers.slice(indexOfFirstRow, indexOfLastRow);
        
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
        { header: 'SPORT', accessor: 'loyaltyPoints' },
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
                            <p className="text-2xl font-bold mt-4 ml-4">15</p>
                        </div>
                        <div className="flex flex-col w-3/12 h-auto bg-white p-4 rounded-xl border border-gray-200 ">
                            <div className='flex flex-row items-center'>
                                <img src="/assets/price.svg" className='w-16 h-16 p-2 border-3 border-blue-400 rounded-[100%] bg-gray-200' />
                                <h2 className="text-md font-medium px-2 text-gray-400">Today Revenue</h2>
                            </div>
                            <p className="text-2xl font-bold mt-4 ml-4">Rs. 7500</p>
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
                    <div className='flex w-[95%] h-auto'>
                      <div className='flex flex-col w-[70%] h-auto mx-3 bg-white rounded-lg border border-gray-200 '>
                          <table className="w-full bg-white">
                            <caption className="text-xl font-semibold text-gray-800 p-4">Todays' Bookings</caption>
                            <thead className='w-full px-5'>
                              <tr>
                                {columns.map((col, idx) => (
                                  <th key={idx} className="py-4 font-medium text-gray-400">{col.header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                                {currentPageData.map((customer, idx) => (
                                    <tr key={idx} className="hover:bg-gray-100">
                                        <td className="py-4 px-7 text-sm border-b border-gray-200">
                                        {customer.id}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {customer.name}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {customer.phone}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {customer.startTime}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {customer.endTime}
                                        </td>
                                        <td className="py-4 px-5 text-sm border-b border-gray-200">
                                        {customer.sport}
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

                      <ResponsiveContainer width={"50%"} height={300}>
                        <BarChart
                          title='Bookings by Day'
                          data={bookingDataByDay}
                          width={500}
                          height={300}
                          style={{marginTop : '20px', marginLeft: '20px'}}>
                          <XAxis name="Day" dataKey="day" fontSize={12} color='#000000'/>
                          <YAxis name="Booking Count" fill='#000000' fontSize={12} />
                          <Tooltip />
                          <Bar
                            dataKey="bookingCount"
                            stroke="none"
                            fill="#296dd9"
                            barSize={40}
                          />
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