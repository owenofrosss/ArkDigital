"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useContext } from "react"

import { Button } from "@/components/ui/button"
import AnimationWrapper from "./animation-wrapper"
import { CalendlyFormRefContext } from "@/components/contact-section"

export default function HeroSection() {
  const calendlyRef = useContext(CalendlyFormRefContext)

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/tech-pattern.png" alt="Tech Pattern Background" fill className="object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 z-0 gradient-bg opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "30%", right: "10%" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimationWrapper animation="fadeIn">
            <div className="inline-block bg-purple-900/50 text-cyan-300 px-4 py-1 rounded-full text-sm md:text-base font-medium mb-6 mt-10">
              The 24-Hour Website Loophole
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Helping Small Businesses <span className="text-cyan-300">Outrank Their Competition Online</span>
            </h1>
          </AnimationWrapper>

          <AnimationWrapper delay={0.4}>
            <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              We create your website for FREE and show it to you first. If you love it, you pay. If not, you don't spend
              a penny.
            </p>
          </AnimationWrapper>

          <AnimationWrapper delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-700 text-lg px-8 py-6 h-auto transform transition-transform duration-300 hover:scale-105"
                onClick={() => calendlyRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <span className="flex items-center">
                  Claim My Free Custom Website <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-6 h-auto font-medium transform transition-transform duration-300 hover:scale-105"
              >
                <Link href="#process">See How It Works</Link>
              </Button>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.8} animation="fadeUp">
            <div className="bg-black/30 p-4 rounded-lg inline-block backdrop-blur-sm w-full max-w-2xl mx-auto">
              <p className="text-white/80 text-sm mb-2">Trusted by local businesses like yours</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex items-center">
                  <div className="text-3xl text-cyan-300 font-bold">97%</div>
                  <div className="text-white text-xs ml-2 text-left">
                    Conversion<br />Rate
                  </div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-white/20"></div>
                <div className="flex items-center">
                  <div className="text-3xl text-cyan-300 font-bold">24h</div>
                  <div className="text-white text-xs ml-2 text-left">
                    Delivery<br />Time
                  </div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-white/20"></div>
                <div className="flex items-center">
                  <div className="text-3xl text-cyan-300 font-bold">100%</div>
                  <div className="text-white text-xs ml-2 text-left">
                    Satisfaction<br />Guarantee
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
