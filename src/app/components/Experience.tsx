'use client'

import { motion } from 'framer-motion'
import { FaSmile, FaProjectDiagram, FaHeadset, FaAward } from 'react-icons/fa'

const facts = [
 
  { title: 'Projects', value: '9+', icon: <FaProjectDiagram /> },
  { title: 'Projects deployed', value: '2+', icon: <FaProjectDiagram /> },
   { title: 'Happy Users', value: '50+', icon: <FaSmile /> },
]

const Facts = () => {
  return (
    <section
      id="facts"
      className="w-screen min-h-screen bg-gray-50 dark:bg-black py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Here are some highlights of my journey so far.
        </p>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Circle Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl shadow-lg mb-6">
                {fact.icon}
              </div>
              {/* Number */}
              <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                {fact.value}
              </h3>
              {/* Title */}
              <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
                {fact.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Facts
