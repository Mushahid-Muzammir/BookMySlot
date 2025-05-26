import Header from "../components/Header";
import Footer from "../components/Footer";
import Bg from "../assets/bg1.jpg";


const Home = () => {
  return (
        <div className="w-full h-[auto]  bg-gradient-to-r from-[#F8F9FA] to-[#E3F2FD]">
            <div className="bg-[url('./assets/bg3.jpg')] w-full h-screen flex-col items-center justify-center bg-cover">
                        <Header />

                <div className="w-full h-screen flex items-center justify-center">
                    <div className="text-center space-y-4 px-6 md:px-12">
                        <p className="text-5xl md:text-6xl font-bold text-white"> Book Your Game Now! </p>
                        <p className="text-lg md:text-3xl font-semibold text-[#DDEB9D]"> Instantly book courts and enjoy the best indoor sports experiences around you. </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto my-12 px-6">
                <div className="w-full h-[120px] py-9">
                    <p className="text-5xl text-center font-bold text-[#176B87]">
                        Get Your Game Session Now
                     </p>
                </div>

                <div id="hero" className="flex flex-row justify-center gap-12 my-12">
                    <div className="w-1/2">                          
                            <div className="flex flex-col">
                                <img src={Bg} className="w-full h-auto rounded-lg" />
                            </div>
                    </div>

                    <div className=" w-1/2 flex flex-col justify-start space-y-12">
                        <p className=" w-[80%] text-xl text-[#565656] mt-4">
                            We makes it easy to find and book the perfect court for your needs.
                            Say goodbye to phone calls and waiting lines — with just a few clicks, your game is on!
                        </p>
                        <button className="w-[60%] text-[20px] font-bold bg-[#22577E] text-white py-4 px-10 hover:bg-[#546c90]">
                            Book Your Session
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto relative mt-24 py-6">
                <div className="flex flex-col gap-3">
                    <p className="text-3xl text-center font-semibold text-black">
                    </p>
                    <p className="text-5xl text-center font-bold text-[#176B87]">
                        Our Finest Selection of Sport Items
                    </p>
                </div>
                <p className="w-[100%] text-2xl mt-8 font-semibold text-center text-[#565656]">
                    Some of our best sellers for you
                </p>

                <div id="products"  className="flex flex-row justify-center gap-8 mt-6 ">

                    <div className="flex flex-col w-[330px] h-auto overflow-hidden border border-black/[0.24]">
                        <img 
                            className="self-stretch h-[300px] object-cover" />
                        <p className="pt-2 px-2 text-xl font-semibold text-gray-800">
                            product.product_name
                        </p>
                        <p className="p-2 text-sm text-gray-600"> product.description </p>
                        <p className="pb-2 px-2 text-lg font-bold text-gray-800">
                            LKR product.selling_price
                        </p>
                    </div>
            </div>

            <div className="w-full flex justify-center mt-12">
                <button className="px-16 py-5 bg-[#22577E] text-[20px] font-bold text-white">
                    SHOP NOW
                </button>
            </div>

            <div className="mt-12">
                <div className="w-full py-12">
                    <p className="text-5xl text-center font-bold text-[#176B87]">
                        What Our Clients Say About Us
                    </p>
                </div>

            
                        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
                            {/* <!--<img [src]="content.image_url" className="w-[200px] h-[200px] object-cover rounded-[50%]" />--> */}
                            <div className="w-full max-w-2xl h-[350px] flex flex-col items-center justify-center rounded-[50%] bg-[#6482ad]/30 px-16">
                                <p className="text-[22px] text-center text-black leading-relaxed">
                                    " content.text"
                                </p>
                                <p className="text-[22px] font-bold text-center text-black">
                                    -content.name
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        <Footer />
        </div>
  )
}

export default Home