
export const Topbar = () => {
  return (
<div className="bg-white w-full border-b-3 border-gray-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex flex-row justify-between">
            <div></div>
            <div className="flex flex-row gap-3 justify-end">
                <div className="flex rounded-xl text-fontcolor bg-bgcolor justify-center items-center m-5 p-2 px-3 gap-3">
                   <div className="">{}</div>  
                   <div className="">{}</div>
                </div>
                <div className="justify-center items-center flex mt-2 ml-1">
                    <img  alt="profile" className="w-12 h-12 rounded-full object-cover" />
                </div>
            </div>           
        </div>
    </div>  )
}
