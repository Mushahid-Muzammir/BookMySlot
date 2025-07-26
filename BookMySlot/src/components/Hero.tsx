import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div id="heroSection" className="w-full py-24 px-6 ">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-6xl font-extrabold text-white leading-tight">
                The platform <span className="text-blue-400">we wish we had,</span>
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-3xl md:text-6xl font-extrabold text-white leading-tight">
                so we <span className="underline decoration-blue-400 decoration-4 underline-offset-4">built it for you</span>
            </motion.h1>

            <motion.hr
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-24 border-t-4 border-blue-400 mt-6"
            style={{ transformOrigin: "left" }}/>

            <motion.p className="text-lg md:text-xl text-center text-white max-w-3xl mx-auto mt-4"
                initial={{opacity:0, y: 40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:"backInOut", delay: 0.2}}>
                <span className="md:text-3xl font-semibold px-2">BookMySlot</span> is built to make indoor sports effortless. 
                We help you experience the best courts and facilities near you — all in a few clicks. 
                <p className="md:text-2xl text-blue-400 font-semibold">No more long calls, confusion, or last-minute availability issues</p>
            </motion.p>
        </div>
    </div>
  )
}

export default Hero