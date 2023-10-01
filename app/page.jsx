"use client"

import loader from './loader'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'

export default function Home() {

  const router = useRouter()

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <main className="main">
      {!loading ? (
        <React.Fragment>
          <Hero />
          <About />
          <Work />
          <Footer />
        </React.Fragment>
      ) : (
        <loader />
      )}
    </main>
  )
}
