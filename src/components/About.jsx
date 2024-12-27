import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

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
    <>
      <motion.div variants={textVariant()} className="pt-16 sm:pt-0">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Our mission is to harness the power of AI to create immersive, intelligent, and transformative experiences that empower individuals and revolutionize industries.
At the core of our philosophy lies a commitment to Humanity-Centered Innovation. We believe that AI should be a tool to enhance human potential, not replace it. Our focus is on developing AI solutions that foster creativity, solve complex problems, and improve quality of life.
      </motion.p>
      <motion.div
      ref={containerRef}
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="w-full h-[400px] mt-10 mb-10 relative rounded-lg overflow-hidden"
      >
        <video
        ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/headquarter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
