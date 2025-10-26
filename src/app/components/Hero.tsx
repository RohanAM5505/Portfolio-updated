'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-r from-[#f8faff] via-[#eef1ff] to-[#f4f7ff] text-gray-900">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-[#3d2cff] font-[Titanium]"
        >
          Hi, I&apos;m <span className="text-[rgb(55,16,224)]">Rohan A M</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-3xl text-gray-700 font-[Poppins]"
        >
          <Typewriter
            words={['Full Stack Developer', 'Tech Enthusiast', 'UI/UX Explorer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5b47ff] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#4a3ae6] transition font-medium"
          >
            Get in Touch
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#5b47ff] px-6 py-3 rounded-full border border-[#5b47ff] hover:bg-[#f3f0ff] transition font-medium"
          >
            View My Work
          </motion.a>
        </div>

        <p className="pt-4 text-gray-600 text-sm md:text-base">
          B. TECH IN Computer Science at SRM IST
        </p>
      </div>

      {/* Image Section */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={1000}
        className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
      >
        <Image
          src="/images/rohan.jpeg"
          alt="Profile Picture"
          width={320}
          height={320}
          className="rounded-full shadow-2xl border-4 border-[#ebeaff]"
        />
      </Tilt>
    </section>
  )
}

export default Hero
