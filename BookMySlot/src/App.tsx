import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Login from './pages/customer/Login';
import Register from './pages/customer/Register';
import SelectCourt from './pages/customer/SelectCourt';
import SelectDate from './pages/customer/SelectDate';
import SelectSport from './pages/customer/SelectSport';
import Home from './pages/customer/Home';
import MyBookings from './pages/customer/MyBookings';

function App() {

  return (
    <>
    <Toaster richColors position="top-center" closeButton={false} />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectCourt" element={<SelectCourt />} />
        <Route path="/selectDate" element={<SelectDate />} />
        <Route path="/selectSport" element={<SelectSport />} />
        <Route path="/home" element={<Home />} />
        <Route path="/seeBookings" element={<MyBookings />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
