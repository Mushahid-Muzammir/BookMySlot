import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Register from './pages/customer/Register';
import Login from './pages/customer/Login';
import SelectCourt from './pages/customer/SelectCourt';
import SelectDate from './pages/customer/SelectDate';
import Home from './pages/customer/Home';
import MyBookings from './pages/customer/MyBookings';
import { AuthLogin } from './pages/AuthLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCustomers from './pages/admin/AdminCustomers'; 
import AdminReports from './pages/admin/AdminReports';
import AdminExpenses from './pages/admin/AdminExpenses';
import AdminBookings from './pages/admin/AdminBookings';


function App() {

  return (
    <>
    <Toaster richColors position="top-center" closeButton={false} />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectCourt" element={<SelectCourt />} />
        <Route path="/selectDate" element={<SelectDate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seeBookings" element={<MyBookings />} />
        <Route path="/admin" element={<AuthLogin />} />
        <Route path="/manager" element={<AuthLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/expenses" element={<AdminExpenses />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
