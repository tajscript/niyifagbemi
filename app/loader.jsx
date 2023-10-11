"use client"

import LoaderStyles from "../app/styles/loader.module.css"
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"

const loader = () => {

  const loaderRef = useRef()
  const loaderTextRef = useRef()

  useLayoutEffect(() => {

    let loading = gsap.context(() => {
        gsap.to(loaderRef.current, { yPercent: -100, delay: 1, duration: 1.5, ease: "power3.in"})

        gsap.to(loaderTextRef.current, {delay: 0.5, duration: 1, opacity: 1, ease: "sine"})
    })

    return () => {
        loading.revert();
    }

    }, [])

  return (
    <div className={LoaderStyles.loader} ref={loaderRef}>
        <div className={LoaderStyles.loader__wrapper}>
        <h2 className={LoaderStyles.loader__text} ref={loaderTextRef}>NIYI FAGBEMI</h2>
        </div>
    </div>
  )
}

export default loader