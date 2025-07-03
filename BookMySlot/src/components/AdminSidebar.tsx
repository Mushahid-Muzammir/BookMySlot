import { useNavigate, useLocation } from 'react-router-dom';


const AdminSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path : any) => {
        navigate(path);
    };
  return (
    <div className="flex flex-col gap-3 p-4 -mt-1 bg-white w-[7%] min-w-[100px] h-screen shadow-lg ">
                
        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/home' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/home')}>
            <i className={`bx bxs-dashboard text-2xl ${location.pathname === '/home' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/home' ? 'text-white' : 'text-gray-600'}`}>Dashboard</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/sales' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/sales')}>
            <i className={`bx bx-bar-chart-alt text-2xl ${location.pathname === '/sales' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/sales' ? 'text-white' : 'text-gray-600'}`}>Sales</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/inventory' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/inventory')}>
            <i className={`bx bxs-shopping-bags text-2xl ${location.pathname === '/inventory' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/inventory' ? 'text-white' : 'text-gray-600'}`}>Inventory</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/customers' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/customers')}>
            <i className={`bx bxs-user text-2xl ${location.pathname === '/customers' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/customers' ? 'text-white' : 'text-gray-600'}`}>Customers</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/reports' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/reports')}>
            <i className={`bx bx-line-chart text-2xl ${location.pathname === '/reports' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/reports' ? 'text-white' : 'text-gray-600'}`}>Reports</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/expenses' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/expenses')}>
            <i className={`bx bx-dollar-circle text-2xl ${location.pathname === '/expenses' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/expenses' ? 'text-white' : 'text-gray-600'}`}>Expense</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/categories' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/categories')}>
            <i className={`bx bx-list-check text-2xl ${location.pathname === '/categories' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/categories' ? 'text-white' : 'text-gray-600'}`}>Categories</div>
        </div>

        <div className={`flex flex-col h-[65px] w-[70px] mt-1 items-center pt-3 rounded-md cursor-pointer ${location.pathname === '/settings' ? 'bg-primary' : ''}`}
            onClick={() => handleNavigation('/settings')}>
            <i className={`bx bx-cog text-2xl ${location.pathname === '/settings' ? 'text-white' : 'text-greylight'}`}></i>
            <div className={`text-xs ${location.pathname === '/settings' ? 'text-white' : 'text-gray-600'}`}>Settings</div>
        </div>
                
    </div>  
    )
}

export default AdminSidebar