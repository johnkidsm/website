import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useRef, useEffect } from "react";
import { VolumeX, Volume2 } from 'lucide-react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const toggleMute = () => setIsMuted(!isMuted);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
        <div>
          <h1 className="text-white text-[28px] sm:text-[40px] lg:text-[50px] flex flex-wrap items-start gap-x-2">
            <span className='text-[#915EFF]'>We are VirtualAI China & International: Innovating AI Software for the Future.</span>
          </h1>
          <p className={`text-[18px] mt-2 text-white-100 max-w-3xl`}>
            In a world increasingly driven by technology, <br className="hidden sm:block" />
            VirtualAI China & International emerges as a visionary company at the forefront <br className="hidden sm:block" />
            of "virtual intelligence": artificial intelligence, virtual reality, augmented reality, <br className="hidden sm:block" />
            robotic simulation and games (AI + XR + Sim-to-Real + Games).
          </p>
        </div>
        
        <motion.div
          ref={containerRef}
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="w-full h-[300px] sm:h-[400px] mt-4 sm:mt-10 relative rounded-lg overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/logo-with-voice.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-opacity"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

