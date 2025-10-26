'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCertificate } from 'react-icons/fa'

const certifications = [
  {
    title: 'HackRush 2.0 36 hrs Hackathon',
    issuer: 'Particapted in HackRush 2.0 conducted by Qwiklabs Developer Club SRM ',
    year: '2025',
    image: '/images/HackRush.jpg', // 🔹 replace with your image path
  },
  {
    title: 'Lazarus Mission',
    issuer: 'Hackathon conducted by IEEE NITK',
    year: '2024',
    image: '/images/IEEE.jpg',
  
  },
  {
    title: 'Code Red : Mission Impossible',
    issuer: 'Competition conducted by IEEE NITK',
    year: '2025',
    image: '/images/CODERED.jpg',
    
  },
  {
    title: 'Call2Code',
    issuer: 'Participated in Call2Code Hackathon by Manipal University',
    year: '2025',
    image: '/images/hsck.jpg',
    link: '',
  },
  {
    title: 'Python Course Completion',
    issuer: 'Issued by Hackerrank',
    year: '2024',
    image: '/images/Python.jpg',
    
  },
  {
    title: 'Java Course Completion',
    issuer: 'Issued by Hackerrank',
    year: '2025',
    image: '/images/Java.jpg',
  
  },
  {
    title: 'E Curricula',
    issuer: 'Solved problems on E Curricula',
    year: '2025',
    image: '/images/ECURRICULA.jpg',
  },
  {
    title: 'Coding batlle organised by Unstop',
    issuer: 'Certificate of Excellence',
    year: '2025',
    image: '/images/excellence.jpg',
    
  },
  
 
]

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="w-screen min-h-screen bg-gray-100 dark:bg-black py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{cert.year}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline flex items-center gap-1"
              >
                
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
