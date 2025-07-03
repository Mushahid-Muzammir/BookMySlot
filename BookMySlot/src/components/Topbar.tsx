
export const Topbar = () => {
  return (
<div className="bg-white  border-b-3 border-gray-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3 justify-start p-2">
                <button className='rounded-full border border-grey m-3 mx-5 p-1'>
                    <img  alt="" className='h-6 w-8 text-fontcolor' />
                </button>
                <div className="h-11 w-2 mt-2 border-l-2 border-gray- mx-auto"></div>
                <div className="">
                    <img  alt="logo" className="h-10 w-10 mt-2 mx-4 " />                
                </div>
                <div className="font-normal text-fontcolor mt-3.5">SkyClouds</div>
            </div>
            <div className="flex flex-row gap-3 justify-end">
                <div className="flex rounded-xl text-fontcolor bg-bgcolor justify-center items-center m-5 p-2 px-3 gap-3">
                   <div className="">10:53:00</div>  
                   <div className="">26/02/2023</div>
                </div>
                <div className="justify-center items-center flex m-3 mt-2 ml-1">
                    <img  alt="profile" className="w-12 h-12 rounded-full object-cover" />
                </div>
            </div>
            
        </div>
    </div>  )
}
