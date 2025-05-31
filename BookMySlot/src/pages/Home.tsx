import Header from "../components/Header";
import Footer from "../components/Footer";
import sports from "../data/sports.json";
import bestSellers from "../data/bestSoldProducts.json";
import cricket1 from "../assets/cricket1.jpg";
import football1 from "../assets/football1.jpg";
import tt1 from "../assets/tt1.jpg";
import basketball1 from "../assets/basketball1.jpg";
import volleyball1 from "../assets/volleyball1.jpg";
import shoe from "../assets/shoe.jpg";
import racket from "../assets/racket.jpg";
import boot from "../assets/boot.jpg";


const Home = () => {

const sportImages: Record<string, string> = {
  cricket1,
  football1,
  tt1,
  basketball1,
  volleyball1,
};

const productImages: Record<string, string> = {
  shoe,
    racket,
    boot,
};
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
                    <p className="text-5xl text-center font-bold text-[#22577E]">
                        Book Your Slot Now Itself!
                    </p>
                     <p className="text-medium md:text-md text-gray-700 font-medium leading-relaxed mt-4 text-center">
                        Discover a wide variety of indoor sports you can enjoy at top-class venues near you. Pick your game and book your court in seconds. Simple, fast, and hassle-free.
                    </p>
                </div>

                <div id="sports" className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sports.map((sport, index) => (
                    <div
                        key={index}
                        className="relative h-64 rounded-lg overflow-hidden group cursor-pointer hover:scale-110 transition-transform duration-300"
                        style={{
                        backgroundImage: `url(${sportImages[sport.image]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                        }}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white text-3xl font-extrabold tracking-wide text-center px-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {sport.name}
                            </h3>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            </div>

            <div className="w-full h-auto relative mt-24 py-6">
                <div className="flex flex-col gap-3">
                    <p className="text-5xl text-center font-bold text-[#22577E]">
                        Our Finest Selection of Sport Items
                    </p>
                </div>
                <p className="w-[100%] text-2xl mt-8 font-semibold text-center text-[#565656]">
                Some of our best sellers for you
                </p>

                <div id="products"  className="flex flex-row justify-center gap-8 mt-6 ">
                    {bestSellers.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-[330px] h-auto overflow-hidden border border-black/[0.24]">
                        <img src={productImages[product.imageUrl]} className="self-stretch h-[300px] object-cover" />
                        <p className="pt-2 px-2 text-xl font-semibold text-gray-800">
                           {product.name}
                        </p>
                        <p className="p-2 text-sm text-gray-600"> {product.description} </p>
                        <p className="pb-2 px-2 text-lg font-bold text-gray-800">
                            LKR {product.selling_price}
                        </p>
                    </div>
                    ))}
                </div>


                <div className="w-full flex justify-center mt-12">
                    <button className="px-16 py-5 bg-[#22577E] text-[20px] font-bold text-white">
                        SHOP NOW
                    </button>
                </div>
            </div>

            {/* <div className="mt-12">
                <div className="w-full py-12">
                    <p className="text-5xl text-center font-bold text-[#176B87]">
                        What Our Clients Say About Us
                    </p>
                </div>
        
                <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
                     <img className="w-[200px] h-[200px] object-cover rounded-[50%]" />
                    <div className="w-full max-w-2xl h-[350px] flex flex-col items-center justify-center rounded-[50%] bg-[#6482ad]/30 px-16">
                        <p className="text-[22px] text-center text-black leading-relaxed">
                            " content.text"
                        </p>
                        <p className="text-[22px] font-bold text-center text-black">
                            -content.name
                        </p>
                    </div>
                </div>
            </div> */}
        <Footer />
        </div>
  )
}

export default Home