
const Home = () => {
  return (
        <div className="max-w-full h-[auto] relative bg-gradient-to-r from-[#F8F9FA] to-[#E3F2FD]">

            <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center">
                <div className="w-full h-screen flex items-center justify-center bg-black/50">
                    <div className="text-center space-y-4 px-6 md:px-12">
                        <p className="text-5xl md:text-7xl font-bold text-white"> content.title </p>
                        <p className="text-lg md:text-3xl font-medium text-[#FFD89B]"> content.description </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto my-12">
                <div className="w-full h-[120px] py-9">
                    <p className="text-5xl text-center font-bold text-[#176B87]">
                        Redefining Confidence Through Beauty Expertise
                    </p>
                </div>

                <div id="hero" className="flex flex-row justify-center gap-12 my-12 ">
                    <div className="w-1/3">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <img src="images/advert1.png" className="w-[211px] h-auto" />
                                <img src="images/advert5.jpg" className="w-[211px] h-auto" />
                            </div>
                            <div className="flex flex-col">
                                <img src="images/advert2.png" className="w-[180px]" />
                                <img src="images/advert3.png" className="w-[240px] h-auto" />
                            </div>
                            <div className="flex flex-col">
                                <img src="images/advert7.jpg" className="w-[240px] h-auto" />
                                <img src="images/advert6.jpg" className="w-[211px] h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className=" w-1/2 flex flex-col justify-start space-y-12">
                        <p className=" w-[80%] text-xl text-[#565656] mt-4">
                            Indulge in expert services tailored for both men and women. our skilled professionals ensure you step out feeling confident, refreshed, and radiant.
                            Elevate your grooming routine with us.
                        </p>
                        <button className="w-[60%] text-[20px] font-bold bg-[#22577E] text-white py-4 px-10 hover:bg-[#546c90]">
                            Book Your Session
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full py-12 px-12 my-12 rounded-lg">
                <div className=" mx-auto flex flex-col lg:flex-row items-center gap-12">

                    <div id="sp_text" className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold text-[#176B87] leading-tight">
                            Make Your Special Day Unforgettable
                        </h1>
                        <p className="text-lg text-[#565656] mt-4">
                            From stunning bridal makeovers to glamorous party styling, our expert stylists create your perfect look.
                            Let us make your wedding, engagement, or special event truly magical!
                        </p>
                        <div className="mt-12">
                            <button className="bg-[#176B87] text-white px-12 py-5 text-lg font-semibold ">
                                Make a Special Booking
                            </button>
                        </div>
                    </div>

                    <div id="sp_image" className="w-full lg:w-1/2">
                        <img src="images/hero2.png" alt="Bridal Beauty" className="w-full h-auto object-cover"/>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto relative mt-24 py-6">
                <div className="flex flex-col gap-3">
                    <p className="text-3xl text-center font-semibold text-black">
                    </p>
                    <p className="text-5xl text-center font-bold text-[#176B87]">
                        Our Finest Selection of
                        Beauty Products
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
            
        </div>
  )
}

export default Home