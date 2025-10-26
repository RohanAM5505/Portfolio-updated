'use client'

import { motion } from 'framer-motion'
import { FiUser, FiCode, FiTarget, FiCpu } from 'react-icons/fi'

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white text-gray-900 py-20 px-6 md:px-20 flex flex-col items-center relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8E8FF]/60 via-white to-[#CFF4FF]/60 blur-3xl opacity-40"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-12 font-[Poppins] text-center z-10"
      >
        <span className="text-[#635BFF]">About</span> Me
      </motion.h2>

      {/* Content */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-700 leading-relaxed"
        >
          <p className="text-lg">
            Hey there!  I’m <span className="text-black font-semibold">Rohan A M</span>, a
            passionate
            <span className="text-[#635BFF] font-semibold"> Full-Stack Developer</span> and
            <span className="text-[#3535ff] font-semibold"> AI Enthusiast</span> who loves crafting
            intelligent, modern, and efficient digital products.
          </p>

          <p className="text-lg">
            I specialize in building scalable web applications using
            <span className="text-black font-medium"> React.js, Next.js, FastAPI, and Python</span>.
            My goal is to merge clean design with powerful technology to create meaningful user
            experiences.
          </p>

          <p className="text-lg">
            Beyond coding, I’m constantly exploring
            <span className="text-black font-medium"> AI, automation, and data-driven systems</span> —
            bridging the gap between innovation and usability.
            My career goal is to become an innovative software engineer who builds scalable applications and contributes to impactful, real-world solutions in the fields of Web Development.
          </p>

        
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { icon: <FiCode />, title: 'Frontend', desc: 'React.js • Next.js • Tailwind CSS' },
            { icon: <FiCpu />, title: 'Backend', desc: 'FastAPI • Node.js • MongoDB' },
            { icon: <FiUser />, title: 'AI & ML', desc: 'TensorFlow' },
            { icon: <FiTarget />, title: 'Focus', desc: 'Clean UI • Smart UX • High Performance' },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(99,91,255,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/70 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 flex flex-col items-start space-y-3 hover:bg-[#F7F8FF] transition-all duration-300"
            >
              <div className="text-3xl text-[#635BFF]">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-snug">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
