import { useState } from 'react';
import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';


const AdminBookings = () => {

   const customers = [
              { id: 24, name: 'John Doe', phone: '123-456-7890',  startTime: '10.00', endTime: '11.00', sport: 'Futsal', action: 'View' },
              { id: 22, name: 'Jane Smith', phone: '987-654-3210',  startTime: '12.00', endTime: '13.00', sport: 'Cricket', action: 'View' },
          ];
          const [currentPage, setCurrentPage] = useState(1);
          const rowsPerPage = 5;
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
          { header: 'NAME', accessor: 'name' },
          { header: 'PHONE', accessor: 'phone' },
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
                  
          const handleCustomer = () => {}
            return (
              <div className="flex flex-row">
                      <AdminSidebar />
                      <div className="flex flex-col w-screen h-screen ">
                          <Topbar />
                          <div className="flex flex-col w-full h-full px-6 py-3 bg-gray-100">
                              <div className='flex flex-col w-[95%] h-auto bg-white p-4 mx-9 rounded-xl'>
                                <table className="w-full mt-3 bg-white">
                                <thead className='w-full px-5 bg-gray-200'>
                                  <tr>
                                    {columns.map((col, idx) => (
                                      <th key={idx} className="py-3 text-md font-semibold">{col.header}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {currentPageData.map((customer, idx) => (
                                    <tr key={idx} className="hover:bg-gray-100">
                                        <td className="py-4 px-12 border-b border-gray-200 ">
                                        {customer.id}
                                        </td>
                                        <td className="py-4 px-12 border-b border-gray-200">
                                        {customer.name}
                                        </td>
                                        <td className="py-4 px-12 border-b border-gray-200">
                                        {customer.phone}
                                        </td>
                                        <td className="py-4 px-12 border-b border-gray-200">
                                        {customer.startTime}
                                        </td>
                                        <td className="py-4 px-12 border-b border-gray-200">
                                        {customer.endTime}
                                        </td>
                                        <td className="py-4 px-12 border-b border-gray-200">
                                        {customer.sport}
                                        </td>
                                        <td className="py-4 px-12 border-b border-gray-200">
                                        {customer.action}
                                        </td>                                  
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