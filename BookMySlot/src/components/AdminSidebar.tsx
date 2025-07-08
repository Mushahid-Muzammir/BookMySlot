import { createContext, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type SideBarContextType = { expanded: boolean };
const SideBarContext = createContext<SideBarContextType>({ expanded: false });
const AdminSidebar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <aside className= {`flex flex-col gap-3 py-3 mt-1 bg-white h-screen shadow-lg transition-all duration-300 ${expanded ? 'w-[15%]' : 'w-[5%]'}`}>
        <nav className="h-full flex flex-col bg-white shadow-sm">
         <div className="flex justify-between px-2 items-center mb-15">         
            <svg className={`overflow-hidden transition-all ${expanded ? "w-full" : "w-0"}`} id="logo-70" width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" className="ccustom mt-5" fill="#394149"></path> <path d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z" className="ccustom mt-5" fill="#394149"></path> </svg>
            <button onClick={() => setExpanded((curr) => !curr)} className=""><img src='/assets/menu.svg' className='w-8 h-8 p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'/></button>
        </div> 
        <SideBarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 gap-4 flex flex-col overflow-y-auto">
                {children}
                <SideBarItem icon="/assets/dashboard.svg" label="Dashboard" path="/admin/dashboard" />
                <SideBarItem icon="/assets/bookings.svg" label="Bookings" path="/admin/bookings" />
                <SideBarItem icon="/assets/customers.svg" label="Customers" path="/admin/customers" />
                <SideBarItem icon="/assets/reports.svg" label="Reports" path="/admin/reports" />
                <SideBarItem icon="/assets/expense.svg" label="Expense" path="/admin/expenses" />
                <SideBarItem icon="/assets/settings.svg" label="Settings" path="/admin/settings" />
             </ul>
        </SideBarContext.Provider>
        </nav>              
    </aside>  
    )
}

export default AdminSidebar


type SideBarItemProps = {
    icon?: string;
    label?: string;
    path: string;
};

export function SideBarItem({ icon, label, path }: SideBarItemProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const {expanded} = useContext(SideBarContext);

    return (
        <li
            onClick={() => navigate(path)}
            className={`relative flex flex-row items-center gap-3 px-4 py-2 cursor-pointer rounded-md transition-colors group ${
            location.pathname === path ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
        }`}
        >
        {icon && <img src={icon} alt={label} className="w-6 h-6" />}
        <span
            className={`transition-all duration-300 ${
            expanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
            } overflow-hidden whitespace-nowrap`}
        >
            {label}
        </span>
        </li>

    );
}
