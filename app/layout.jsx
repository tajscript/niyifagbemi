"use client"

import './globals.css'
import Loader from './loader'
import { useState, useEffect } from 'react'

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])

  return (
    <html lang="en">
      <body>
        {isLoading ? <Loader/> : <>{children}</>}
      </body>
    </html>
  )
}
