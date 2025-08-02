import { motion } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Testimonial } from '../dataType';

type TestimonialProps = {
  data: Testimonial[];
}

const Testimonials : React.FC<TestimonialProps> = ({ data }) => {
  return (
     <section className="max-w-6xl py-20 px-6">
        <div className=" mx-auto text-center">
            <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#272727] mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            What Our Clients Say
            </motion.h2>

            <motion.p
            className="text-[#272727] text-lg md:text-xl mb-12 max-w-3xl mx-auto"
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
                className="w-full max-w-8xl mx-auto">                       
                {data.map((t, index) => (
                <SwiperSlide
                    key={index}
                    className="max-w-6xl rounded-full p-8 shadow-lg border border-[#272727] text-left">
                    <div className="flex justify-center items-center gap-4 mb-4">
                    <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2"
                    />
                    <div>
                        <h4 className="text-[#272727] font-semibold">{t.name}</h4>
                        <p className="text-sm text-[#272727]">{t.role}</p>
                    </div>
                    </div>
                    <p className="text-[#272727] text-center leading-relaxed">"{t.text}"</p>
                </SwiperSlide>
                ))}
            </Swiper>

        </div>
    </section>
  )
}

export default Testimonials