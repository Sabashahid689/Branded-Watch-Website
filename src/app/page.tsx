import React from 'react'
import Hero from '@/components/Hero';
import About from './about/page';
import Watches from './watches/page';
import Contact from './contact/page';
const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Watches/>
      <Contact/>
    </div>
  )
}

export default page