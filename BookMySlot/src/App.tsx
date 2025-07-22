import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Register from './pages/customer/Register';
import SelectCourt from './pages/customer/SelectCourt';
import SelectDate from './pages/customer/SelectDate';
import Home from './pages/customer/Home';
import MyBookings from './pages/customer/MyBookings';
import { AuthLogin } from './pages/AuthLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCustomers from './pages/admin/AdminCustomers'; 


function App() {

  return (
    <>
    <Toaster richColors position="top-center" closeButton={false} />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selectCourt" element={<SelectCourt />} />
        <Route path="/selectDate" element={<SelectDate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seeBookings" element={<MyBookings />} />
        <Route path="/admin" element={<AuthLogin />} />
        <Route path="/manager" element={<AuthLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
