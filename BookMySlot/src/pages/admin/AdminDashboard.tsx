import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';

const AdminDashboard = () => {

  return (
    <>
        <Topbar />
        <div className="flex flex-row">
            <AdminSidebar />
            <div className="flex flex-row w-screen h-screen ">
                <div className="flex flex-col w-[75%] mt-1 ml-1">
                    <div className="items-start bg-white p-1 text-sm border-b-3 border-gray-300 text-primary font-semibold  h-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">{'Dashboard   >'}</div>              
      
                    <div className="flex items-center">
                        <div className="flex justify-between items-center p-1 ml-4 mt-3 bg-white w-[50%] rounded-lg">
                            <input type="text" className='px-2' placeholder='Search Category or Item' />
                            <i className='bx bx-search text-fontcolor pr-1'></i>
                        </div>
                        <div className="text-red-500 mt-3 ml-3 text-sm font-semibold">8 Items out of stock</div>
                    </div>
                </div>
            </div>
        </div>
    </>  )
}

export default AdminDashboard