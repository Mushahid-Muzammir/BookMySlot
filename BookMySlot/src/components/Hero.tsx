import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div id="heroSection" className="w-full py-24 px-6 bg-gradient-to-r from-[#EFFFFB] to-[#50D890]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-6xl font-extrabold text-black leading-tight">
                The platform <span className="text-[#111317]">we wish we had,</span>
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-3xl md:text-6xl font-extrabold text-black leading-tight">
                so we <span className="text-[#111317]">built it for you</span>
            </motion.h1>

            <motion.hr
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-32 border-t-4 border-[#[#272727] mt-6"
            style={{ transformOrigin: "left" }}/>

            <motion.p className="text-lg md:text-2xl text-center text-black max-w-7xl mx-auto mt-4 font-semibold"
                initial={{opacity:0, y: 40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:"backInOut", delay: 0.2}}
                viewport={{ once: true, amount: 0.7 }}>
                <span className="md:text-4xl font-semibold px-2">BookMySlot</span>  
                 helps you book facilities near you in just few clicks. 
                <p className="w-full md:text-4xl text-[#[#272727]] font-black">No more long calls or last-minute availability issues</p>
            </motion.p>
        </div>
    </div>
  )
}

export default Hero