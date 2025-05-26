
const SelectSport = () => {
  return (
    <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E3F2FD]">
        <div className="w-full h-auto">      
            <div className="w-full py-6">
                <p className="text-4xl text-center font-bold text-[#176B87]">
                Choose a location  
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-4">
                <div className="w-[400px] h-auto rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                    <img alt="branch.branch_name" className="w-full h-48 object-cover"/>
            
                    <div className="p-4 text-center">
                        <p className="text-xl font-semibold text-gray-900"> branch.branch_name </p>
                        <p className="text-sm text-gray-600"> branch.address</p>
                        <p className="text-sm font-medium text-gray-700 mt-1">
                        🕒  branch.open_time | slice:0:5  -  branch.close_time | slice:0:5
                        </p>
                    </div>
            
                    <div className="w-full flex justify-center pb-4">
                        <button 
                        className ="w-[80%] py-2 rounded-lg bg-blue-600 text-white text-lg font-semibold transition-all duration-300 hover:bg-blue-700">                
                        Select Branch
                        </button>
                    </div>         
                </div>                  
            </div>            
        </div>
    </div>
  )
}

export default SelectSport