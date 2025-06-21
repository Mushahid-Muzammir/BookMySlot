
const Footer = () => {
  return (
<div className="w-[100%] flex flex-row h-[400px] gap-24 px-20  py-20 relative bg-[#C1C7C6] mt-20">

    <div className="relative">  
      <p className=" text-[35px] uppercase text-black">BookMySlot</p>
    </div>
        
    <div className=" w-1/2 flex flex-col gap-4 h-auto relative overflow-hidden">
      <p className="w-full relative text-[18px] font-semibold text-left text-black">
        Ready to get started?
      </p>
      <button className=" w-[90%] py-4 rounded-lg bg-[#111317] relative text-[17px] font-semibold text-white">
        Get started
      </button>
    </div>

    <div className="flex flex-col gap-5  w-1/4 relative">
      <p className="text-[17px] font-bold text-black">
        Services
      </p>
     <div className="flex flex-col gap-4">
      <p className="w-[157.53px] relative ] text-[15px] text-black">
        Email Marketing
      </p>
      <p className="w-[114.43px] relative text-[15px] text-black">
        Campaigns
      </p>
      <p className="w-[89.17px] relative text-[15px] text-black">
        Branding
      </p>
      <p className="w-[66.88px] relative text-[15px] text-black">
        Offline
      </p>
     </div>
    </div>

    <div className=" flex flex-col gap-5 w-1/4  relative">
      <p className="text-[17px] font-bold text-black">About</p>
      <div className="flex flex-col gap-4">
        <p className=" text-[15px] text-black">
          Our Story
        </p>
        <p className="text-[15px] text-black">
          Benefits
        </p>
        <p className="text-[15px] text-black">
          Team
        </p>
        <p className="text-[15px] text-black">
          Careers
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-start items-start gap-5 w-1/4">
      <p className="text-[17px] font-bold text-black">Help</p>
      <div className="flex flex-col gap-4">
        <p className=" text-[15px] text-black">
          FAQs
        </p>
        <p className=" text-[15px] text-black">
          Contact Us
        </p>
      </div>
    </div>
   
    <div className="flex flex-col gap-5 w-1/4 ">
      <p className="text-[15px] font-bold text-black">
        Terms &#x26; Conditions
      </p>
      <p className="text-[15px] text-black">
        Privacy Policy
      </p>         
    </div>

  </div>  )
}

export default Footer