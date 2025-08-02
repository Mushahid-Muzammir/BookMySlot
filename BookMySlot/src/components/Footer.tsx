
const Footer = () => {
  return (
<div className="w-[100%] flex flex-row h-[400px] gap-24 px-20  py-20 relative mt-20 border-t border-white/[0.24] bg-[#50D890]">

    <div className="relative">  
      <p className=" text-[35px] uppercase text-[#272727]">BookMySlot</p>
    </div>
        
    <div className=" w-1/2 flex flex-col gap-4 h-auto relative overflow-hidden">
      <p className="w-full relative text-[18px] font-semibold text-left text-[#[#272727]]">
        Ready to get started?
      </p>
      <button className=" w-[90%] py-4 rounded-lg bg-[#4F98CA] relative text-[17px] font-semibold text-white">
        Get started
      </button>
    </div>

    <div className="flex flex-col gap-5  w-1/4 relative">
      <p className="text-[17px] font-black text-[#272727]">
        Services
      </p>
     <div className="flex flex-col gap-4">
      <p className="w-[157.53px] relative ] text-[15px] text-[#272727]">
        Email Marketing
      </p>
      <p className="w-[114.43px] relative text-[15px] text-[#272727]">
        Campaigns
      </p>
      <p className="w-[89.17px] relative text-[15px] text-[#272727]">
        Branding
      </p>
      <p className="w-[66.88px] relative text-[15px] text-[#272727]">
        Offline
      </p>
     </div>
    </div>

    <div className=" flex flex-col gap-5 w-1/4  relative">
      <p className="text-[17px] font-black text-[#272727]">About</p>
      <div className="flex flex-col gap-4">
        <p className=" text-[15px] text-[#272727]">
          Our Story
        </p>
        <p className="text-[15px] text-[#272727]">
          Benefits
        </p>
        <p className="text-[15px] text-[#272727]">
          Team
        </p>
        <p className="text-[15px] text-[#272727]">
          Careers
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-start items-start gap-5 w-1/4">
      <p className="text-[17px] font-black text-[#272727]">Help</p>
      <div className="flex flex-col gap-4">
        <p className=" text-[15px] text-[#272727]">
          FAQs
        </p>
        <p className=" text-[15px] text-[#272727]">
          Contact Us
        </p>
      </div>
    </div>
   
    <div className="flex flex-col gap-5 w-1/4 ">
      <p className="text-[15px] font-black text-[#272727]">
        Terms &#x26; Conditions
      </p>
      <p className="text-[15px] text-[#272727]">
        Privacy Policy
      </p>         
    </div>

  </div>  )
}

export default Footer