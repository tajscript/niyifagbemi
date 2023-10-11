"use client"

import Hero from './Hero'
import About from './About'
import Work from './Work'
import Footer from './Footer'
import Loader from '../loader'
import { useState, useEffect } from 'react'

const Main = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])


  return (
    <div className="main">
      {isLoading ? <Loader/> : <>
      <Hero />
      <About />
      <Work />
      <Footer />
      </>}
    </div>
  )
}

export default Main