
const Footer = () => {
  return (
<div className="w-[100%] flex flex-row h-[400px] gap-24 px-20  py-20 relative bg-[#304146] mt-20">

    <div className="relative">  
      <p className=" text-[35px] uppercase text-white">BookMySlot</p>
    </div>
        
    <div className=" w-1/2 flex flex-col gap-4 h-auto relative overflow-hidden">
      <p className="w-full relative text-[18px] font-semibold text-left text-white">
        Ready to get started?
      </p>
      <button className=" w-[90%] py-4 rounded-lg bg-[#6482ad] relative text-[17px] font-bold text-white">
        Get started
      </button>
    </div>

    <div className="flex flex-col gap-5  w-1/4 relative">
      <p className="text-[17px] font-bold text-white">
        Services
      </p>
     <div className="flex flex-col gap-4">
      <p className="w-[157.53px] relative ] text-[15px] text-white">
        Email Marketing
      </p>
      <p className="w-[114.43px] relative text-[15px] text-white">
        Campaigns
      </p>
      <p className="w-[89.17px] relative text-[15px] text-white">
        Branding
      </p>
      <p className="w-[66.88px] relative text-[15px] text-white">
        Offline
      </p>
     </div>
    </div>

    <div className=" flex flex-col gap-5 w-1/4  relative">
      <p className="text-[17px] font-bold text-white">About</p>
      <div className="flex flex-col gap-4">
        <p className=" text-[15px] text-white">
          Our Story
        </p>
        <p className="text-[15px] text-white">
          Benefits
        </p>
        <p className="text-[15px] text-white">
          Team
        </p>
        <p className="text-[15px] text-white">
          Careers
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-start items-start gap-5 w-1/4">
      <p className="text-[17px] font-bold text-white">Help</p>
      <div className="flex flex-col gap-4">
        <p className=" text-[15px] text-white">
          FAQs
        </p>
        <p className=" text-[15px] text-white">
          Contact Us
        </p>
      </div>
    </div>
   
    <div className="flex flex-col gap-5 w-1/4 ">
      <p className="text-[15px] font-bold text-white">
        Terms &#x26; Conditions
      </p>
      <p className="text-[15px] text-white">
        Privacy Policy
      </p>         
    </div>

  </div>  )
}

export default Footer