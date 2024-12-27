'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
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
            // Play video when it comes into view
            videoRef.current?.play();
          } else {
            // Pause video when it goes out of view
            videoRef.current?.pause();
          }
        });
      },
      {
        // Configure the observer to trigger when video is 50% visible
        threshold: 0.5
      }
    );

    // Start observing the video container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5 w-full
      `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="text-white text-[28px] flex flex-wrap items-start gap-x-2">
            <span className="relative">
              We are VirtualAI China 
              <sup className="absolute -top-0 -right-4 text-[24px]">™</sup>
            </span> : Innovating AI Software for the Future.
          </h1>
          <p className={`text-[18px] mt-2 text-white-100`}>
            In a world increasingly driven by technology, <br />
            VirtualAI China emerges as a visionary company at the forefront <br />
            of "virtual intelligence": artificial intelligence, virtual reality, augmented reality, <br />
            robotic simulation and games (AI + XR + Sim-to-Real + Games).
          </p>
          
          <motion.div
      ref={containerRef}
      variants={fadeIn("up", "spring", 0.5, 1)}
      className="w-full h-[400px] mt-10 mb-10 relative rounded-lg overflow-hidden"
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