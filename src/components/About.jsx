import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="about" className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-[#0a192f] to-[#1f2937]">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#64ffda] underline decoration-2 decoration-[#64ffda]">About Me</h2>
          <p className="py-2 text-gray-300">
            As an <span className="text-[#64ffda]">Artificial Intelligence Enthusiast</span> with a passion for <span className="text-[#64ffda]">Machine Learning</span> and <span className="text-[#64ffda]">Quantum Computing</span>, I thrive on exploring cutting-edge technology.
          </p>
          <p className="py-2 text-gray-300">
            My journey has been fueled by curiosity and a drive to push boundaries. Through impactful projects, I’ve developed expertise in both theory and practical applications.
          </p>
          <p className="py-2 text-gray-300">
            I am motivated to leverage my skills in real-world solutions, creating meaningful change while continuously learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 flex justify-center items-center"
        >
          <div className="w-full max-w-md h-[400px] relative animate-float">
            <motion.svg viewBox="0 0 200 200" className="w-full h-full" whileHover={{ scale: 1.05 }}>
              {/* Quantum-inspired design */}
              <rect x="40" y="40" width="120" height="120" fill="none" stroke="#64ffda" strokeWidth="2" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#64ffda" strokeWidth="2" />
              <path d="M60 60 L140 140" stroke="#64ffda" strokeWidth="2" />
              <path d="M60 140 L140 60" stroke="#64ffda" strokeWidth="2" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="#64ffda" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#64ffda" strokeWidth="1" opacity="0.5" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;