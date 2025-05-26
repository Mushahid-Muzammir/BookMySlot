
const Header = () => {
  return (
  <div className="flex flex-row items-center justify-between w-full h-[80px] px-6 z-10 bg-gradient-to-r from-[#F8F9FA] to-[#E3F2FD]">
  
  <div className="ml-[30px]">
    <img alt="Glamora Logo" className="w-14 h-full object-cover"/>
  </div>

  <div className="flex justify-end items-center space-x-10">
    <a className="text-base font-semibold text-black hover:text-blue-600">HOME</a>
    <a className="text-base font-semibold text-black hover:text-blue-600">ABOUT US</a>
    <a className="text-base font-semibold text-black hover:text-blue-600">CONTACT</a>
    <a className="text-base font-semibold text-black hover:text-blue-600">SHOP</a>

    <div className="flex items-center space-x-16">
        <button className="text-[15px] font-bold mx-8 px-[53px] py-[12px] text-white bg-[#22577E]">
            Login
        </button>

        <button className="text-base font-semibold text-black hover:text-blue-600">
            MY BOOKINGS
        </button>

        <a className="text-[15px] font-bold mx-8 px-[53px] py-[12px] hover:bg-[#6482ad] border border-black">
            LogOut
        </a>

    </div>
  </div>
</div>
  )
}

export default Header