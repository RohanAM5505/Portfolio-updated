'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const allProjects = [
  {
    title: ' Lostective — Smart Lost & Found System',
    description:
      'Lostective is a fully functional, AI-powered Lost & Found web application that helps users report, browse, and claim lost or found items using intelligent matching algorithms and real-time communication support Built by  Rohan.',
    image: '/images/ll.jpg',
    link: 'https://github.com/RohanAM2006/Lostective_APP-Project',
  },
  {
    title: 'HealSense',
    description:
      'Smart health monitoring and analytics platform that uses AI to transform medical reports into actionable insights.',
    image: '/images/healsense.jpg',
    link: 'https://github.com/RohanAM-286/HealSense',
  },
    {
    title: 'Commit2Team',
    description: `Commit2Team is our hackathon project built in 36 hours.
It uses NLP + ML to analyze team communication in real-time, calculate team scores, and suggest balanced team configurations for maximum productivity.
Our project stands out because it quantifies engagement and performance, going beyond typical messaging apps.`,
    image: '/images/commit.jpg',
    link: 'https://github.com/RohanAM2006/Commit2Team-New-',
  },
{
    title: 'TechTrackr',
    description: `TechTrackr'
  recommends learning paths and role suggestions for students based on their 
current skills, interests, and academic background using ML algorithms.`,
    image: '/images/Tech.jpg',
    link: 'https://github.com/RohanAM2006/CarrerPath-',
  },
  
  {
    title: 'Portfolio Website',
    description:
      'A beautiful, animated personal portfolio built with Next.js and Framer Motion.',
    image: '/images/port.jpg',
    link: '#',
  },
  {
    title: 'Spotify Clone',
    description:
      'A responsive and stylish Spotify Web Player Clone built with HTML, CSS, and JavaScript.',
    image: '/images/SP.jpg',
    link: 'https://github.com/RohanAM-286/Spotify-Clone',
  },
   {
    title: 'Smart Surveillance System',
    description:
      'Developed a smart surveillance system that detects and logs unknown faces in real-time using YOLOv5 and OpenCV',
    image: '/images/smart.jpeg',
    link: 'https://github.com/RohanAM-286/Object-Detection',
  },
   {
    title: 'Moodlify – AI-Powered Mood-Based Music Player',
    description:
      'Moodlify is an intelligent music recommendation system that detects your facial expression in real-time and plays songs matching your current mood. Built using Computer Vision and Emotion Recognition, Moodlify creates a personalized music experience based on how you feel.',
    image: '/images/mood.jpg',
    link: 'https://github.com/RohanAM-286/Moodlify',
  },
   {
    title: 'Spam Classifier',
    description:
      'A simple yet powerful Spam Classifier built using Natural Language Processing (NLP) and Machine Learning. It classifies SMS messages as Spam or Not Spam based on the content using the Naive Bayes algorithm and TF-IDF vectorization.',
    image: '/images/Spam.jpg',
    link: 'https://github.com/RohanAM-286/Spam-Classifier',
  },
   {
    title: 'Object Detection with YOLOv8',
    description:
      'Object-Detection Object detection using OpenCV to identify and track objects in images and videos. Implements various techniques like Haar cascades, deep learning models ( SSD), and contour detection for efficient recognition. Optimized for accuracy and real-time performance',
    image: '/images/obj.jpeg',
    link: 'https://github.com/RohanAM-286/Object-Detection',
  },
 
  
  

]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-indigo-50 px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline font-medium mt-auto"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center mt-12">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          {showAll ? 'Show Less' : 'Explore More'}
        </motion.button>
      </div>
    </section>
  )
}

export default Projects
