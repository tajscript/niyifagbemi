"use client"

import LoaderStyles from "../app/styles/loader.module.css"
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"

const loader = () => {

  const loaderRef = useRef()
  const loaderTextRef = useRef()

  useLayoutEffect(() => {

    let loading = gsap.context(() => {
        gsap.to(loaderRef.current, { y: -1000, delay: 1, duration: 1.5, ease: "power3.in"})
    })

    return () => {
        loading.revert();
    }

    }, [])

  return (
    <div className={LoaderStyles.loader} ref={loaderRef}>
        <div className={LoaderStyles.loader__wrapper}>
        <h2 className={LoaderStyles.loader__text} ref={loaderTextRef}>NIYI <br /> FAGBEMI</h2>
        <h4 className={LoaderStyles.loader__counter}>Loading...</h4>
        </div>
    </div>
  )
}

export default loader