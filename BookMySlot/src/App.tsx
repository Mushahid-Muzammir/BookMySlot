import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import SelectCourt from './pages/SelectCourt';
import SelectDate from './pages/SelectDate';
import SelectSport from './pages/SelectSport';
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';

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
