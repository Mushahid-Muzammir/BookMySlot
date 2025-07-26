import { motion } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Testimonial } from '../dataType';

type TestimonialProps = {
  data: Testimonial[];
}

const Testimonials : React.FC<TestimonialProps> = ({ data }) => {
  return (
     <section className="w-full py-20 px-6">
        <div className=" mx-auto text-center">
            <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            What Our Clients Say
            </motion.h2>

            <motion.p
            className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            Hear from the people who’ve experienced the convenience of BookMySlot.
            </motion.p>

                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                className="w-full max-w-6xl mx-auto">                       
                {data.map((t, index) => (
                <SwiperSlide
                    key={index}
                    className="bg-[#1d1f21] rounded-lg p-6 shadow-lg border border-white text-left">
                    <div className="flex items-center gap-4 mb-4">
                    <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                        <h4 className="text-white font-semibold">{t.name}</h4>
                        <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">"{t.text}"</p>
                </SwiperSlide>
                ))}
            </Swiper>

        </div>
    </section>
  )
}

export default Testimonials