import { motion } from "framer-motion";
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5
      `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
           <p className={` text-[28px] text-white`}>
           We are VirtualAI located in Shanghai, China.
           </p>
           <p className={`text-[18px] mt-2 text-white-100`}>
           In a world increasingly driven by technology, <br />
           VirtualAI emerges as a visionary company at the forefront <br />
           of artificial intelligence and virtual reality.
           </p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  )
}

export default Hero