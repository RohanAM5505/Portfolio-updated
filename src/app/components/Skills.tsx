'use client'

import { motion } from 'framer-motion'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiFastapi, SiMongodb, SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const skills = [
  { name: 'Python', icon: <FaPython className="text-green-400" />, level: 95, color: 'bg-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 90, color: 'bg-green-500' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200" />, level: 60, color: 'bg-orange-400' },
  { name: 'React.js', icon: <FaReact className="text-blue-400" />, level: 72, color: 'bg-purple-500' },
  { name: 'FastAPI', icon: <SiFastapi className="text-pink-400" />, level: 65, color: 'bg-pink-500' },

]

const additionalSkills = [
  'TypeScript',  'OpenCV', 
  'Node.js',  'PyTorch', 'MongoDB',
  'Git', 'Github',  'Tailwind CSS',
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16 font-[Poppins] text-center"
      >
        <span className="text-[#635BFF]"></span>Skills
      </motion.h2>

      {/* Main Skill Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-lg font-medium">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span className="text-gray-400 text-sm">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className={`h-2 rounded-full ${skill.color}`}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 w-full max-w-5xl bg-[#0f0f13] border border-gray-800 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Additional Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-700 rounded-xl py-3 text-center text-gray-200 hover:bg-[#1a1a1d] transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
