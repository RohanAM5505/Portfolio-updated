import Hero from './components/Hero'

import About from './components/About'
import Projects from './components/Projects'
import { ReactElement } from 'react'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Timeline from './components/Timeline'



export default function Home(): ReactElement {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Timeline />
      <Contact />
      
    
      
    </main>
  )
}
