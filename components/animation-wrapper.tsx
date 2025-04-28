"use client"

import { type ReactNode, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimationWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "none"
}

export default function AnimationWrapper({
  children,
  delay = 0,
  className = "",
  animation = "fadeUp",
}: AnimationWrapperProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay * 0.2,
        },
      },
    },
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay * 0.2,
        },
      },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: delay * 0.2,
        },
      },
    },
    fadeRight: {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: delay * 0.2,
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: delay * 0.2,
        },
      },
    },
    none: {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    },
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={selectedAnimation} className={className}>
      {children}
    </motion.div>
  )
}
