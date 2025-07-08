import { Topbar } from '../../components/Topbar';
import AdminSidebar from '../../components/AdminSidebar';

const AdminDashboard = () => {

  return (
    <>
        <div className="flex flex-row">
            <AdminSidebar />
            <div className="flex flex-col w-screen h-screen ">
                <Topbar />
                <div className="flex flex-col w-[75%] mt-1 ml-1">
                    
                </div>
            </div>
        </div>
    </>  )
}

export default AdminDashboard