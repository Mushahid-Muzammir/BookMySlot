import {useState} from 'react'

const AdminCustomers = () => {

     const customers = [
        { id: 1, name: 'John Doe', phone: '123-456-7890',  totalVisit: 10, lastVisit: '2023-10-01', loyaltyPoints: 100, action: 'View' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210',  totalVisit: 8, lastVisit: '2023-09-15', loyaltyPoints: 50, action: 'View' },
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
    { header: 'Id', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Total Visits', accessor: 'totalVisit' },
    { header: 'Last Visit', accessor: 'lastVisit' },
    { header: 'Loyalty Points', accessor: 'loyaltyPoints' },
    { header: 'Action', accessor: 'action',  Cell: () => (
            <button
                onClick={() => handleCustomer()}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Customer
            </button>
            ) }];
    const handleCustomer = () => {}

   
  return (
<div>
      <table className="w-full mt-6 rounded-[30px] bg-white">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="py-4 font-semibold border-b">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {currentPageData.map((customer, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                    <td className="py-4 px-2 border-b">
                    {customer.id}
                    </td>
                    <td className="py-4 px-2 border-b">
                    {customer.name}
                    </td>
                    <td className="py-4 px-2 border-b">
                    {customer.phone}
                    </td>
                    <td className="py-4 px-2 border-b">
                    {customer.totalVisit}
                    </td>
                    <td className="py-4 px-2 border-b">
                    {customer.totalVisit}
                    </td>
                    <td className="py-4 px-2 border-b">
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
    </div>   )
}

export default AdminCustomers