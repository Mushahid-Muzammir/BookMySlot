import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import type { Sport } from "../../dataType";
import { getAllSports } from "../../services/sportService";
import bestSellers from "../../data/bestSoldProducts.json";
import shoe from "../../assets/shoe.jpg";
import racket from "../../assets/racket.jpg";
import boot from "../../assets/boot.jpg";
import { useNavigate } from "react-router-dom";
import testimonials from "../../data/testimonials.json";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import hero from '../../assets/hero.jpg';


const Home = () => {
    const [sports, setSport] = useState<Sport[]>([]);
    const [imgLoaded, setImgLoaded] = useState(false);

    const scrollToSection = () => {
        const section = document.getElementById('sportSection');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    useEffect(() => {
        getAllSports()
        .then(setSport)
        .catch((error) => {
            console.error("Error fetching sports:", error);
        });
    }, []);

    const navigate = useNavigate();
    const handleNavigate = (path : string) => {
        navigate(path);
    };

    const productImages: Record<string, string> = {
        shoe,
        racket,
        boot,
    };

  return (
        <div className="w-full h-[auto] " >
            <motion.div
            className=" w-full h-screen flex-col items-center justify-center bg-cover ">
                <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}>
                <Header />
                </motion.div>
                <div className="w-full h-screen flex items-center justify-between px-8">
                    <div className="flex-1 flex-col space-y-8 md:px-12">
                        <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}>
                            <h1 className="text-4xl md:text-5xl font-black text-[#272727]">Get Instant</h1>
                            <h1 className="text-4xl md:text-5xl font-black text-[#272727]">Indoor Experience Around You</h1>
                            <p className="text-lg italic md:text-xl text-[#272727] mt-2">
                                Book your favorite indoor sports facilities with ease and convenience.
                            </p>
                        </motion.div>
                        <motion.button
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="w-[35%] mt-4 py-5 px-12 bg-[#4F98CA] text-white border border-white  font-bold cursor-pointer text-lg transition-colors duration-300"
                        onClick={scrollToSection}>
                        Book Your Slot
                        </motion.button>
                    </div>
                    <div className='max-w-xl overflow-hidden'>
                        <img src={hero} alt="Hero" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </motion.div>

            <div>
                <Hero/>
            </div>

            <div id="sportSection" className="w-full h-auto my-6 px-6">
                <div className="w-full h-[120px] py-9">
                     <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                        <h1 className="text-xl md:text-5xl text-black font-bold leading-relaxed text-center">
                        Enjoy variety of indoor sports at venues around you. 
                        </h1> 
                    </motion.p>                
                </div>

                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {sports.map((sport, index) => {
                            return (
                                <motion.a
                                key={index}
                                onClick={() => handleNavigate(`/selectCourt?sportId=${sport.sportId}`)}
                                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer border border-gray-200 shadow-md bg-black/30"
                                initial={{ opacity: 0, y: -30  }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                >
                                <div className="w-full h-full relative">
                                    {!imgLoaded && (
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
                                    )}

                                    <img
                                    src={
                                        sport.imageUrl.startsWith("http")
                                        ? sport.imageUrl
                                        : `${sport.imageUrl}`
                                    }
                                    alt={sport.name}
                                    className={`w-full h-full object-cover transition-opacity duration-700 ${
                                        imgLoaded ? "opacity-100" : "opacity-0"
                                    }`}
                                    onLoad={() => setImgLoaded(true)}
                                    />

                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition duration-300 z-10" />

                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <h3 className="text-white group-hover:text-white text-3xl font-extrabold tracking-wide text-center px-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {sport.name}
                                    </h3>
                                    </div>
                                </div>
                                </motion.a>
                            );
                            })}
                    </div>
                </div>
            </div>

            <div className="w-full h-auto relative mt-24 py-6">
                <div className="flex flex-col gap-3">
                    <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-5xl text-center font-bold text-[#272727]">
                        Our Finest Selection of Sport Items
                    </motion.p>
                </div>
                <p className="w-[100%] text-2xl italic mt-8 font-semibold text-center text-[#272727]">
                    Some of our best sellers for you
                </p>

                <div id="products"  className="flex flex-row justify-center gap-8 mt-16 flex-wrap">
                    {bestSellers.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-[350px] h-auto overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer text-center p-3">
                        <img src={productImages[product.imageUrl]} className="self-stretch rounded-[50%] h-[300px] object-cover" />
                        <p className="pt-2 px-2 text-xl font-semibold  text-[#272727]">
                           {product.name}
                        </p>
                        <p className="px-2 py-2 text-xsm italic text-[#272727]"> {product.description} </p>
                        <p className="py-2 px-2 text-xl font-black text-[#272727]">
                            LKR {product.selling_price}.00
                        </p>
                        <button className="px-6 py-3 border border-[#272727] text-[#272727] font-semibold rounded-full cursor-pointer hover:scale-101 transition-transform duration-300">
                            Add to Cart
                        </button>
                    </div>
                    ))}
                </div>


                <div className="w-full flex justify-center mt-12">
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-16 py-5 bg-[#4F98CA] text-[20px] font-bold text-white  cursor-pointer">
                    SHOP NOW
                    </motion.button>
                </div>
            </div>

            <div className="w-full h-auto mt-24 px-6 flex justify-center items-center">
                <Testimonials data={testimonials} />
            </div>

        <Footer />
        </div>
  )
}

export default Home