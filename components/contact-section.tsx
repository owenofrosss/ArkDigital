"use client"

import type React from "react"
import { useEffect, useRef, createContext, useContext } from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimationWrapper from "./animation-wrapper"

// Create a context to share the calendly ref
export const CalendlyFormRefContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null)

export default function ContactSection({ calendlyRef }: { calendlyRef: React.RefObject<HTMLDivElement | null> }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBusinessTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, businessType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="pt-20 pb-4 gradient-bg text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ bottom: "10%", right: "5%" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Claim Your Free Custom Website</h2>
              <p className="text-cyan-200 text-xl max-w-3xl mx-auto">
                We'll create it for free. You only pay if you love it. Monthly payment options available.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex flex-col items-center justify-center gap-2 mb-6">
              <a href="mailto:hello@getarkdigital.com" className="text-cyan-200 hover:text-white text-base font-medium">hello@getarkdigital.com</a>
              <a href="tel:8164504500" className="text-cyan-200 hover:text-white text-base font-medium">816-450-4500</a>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.3}>
            <div className="w-full mb-4">
              <div className="bg-purple-900/90 border-2 border-yellow-400 rounded-xl p-3 sm:p-6 text-center shadow-lg animate-pulse-slow">
                <div className="text-yellow-400 font-bold text-lg mb-2 flex items-center justify-center gap-2">
                  <span>WARNING: TIME-SENSITIVE OPPORTUNITY</span> <span role="img" aria-label="warning">⚠️</span>
                </div>
                <div className="text-white text-xl font-bold mb-2">ONLY 2 SPOTS REMAIN THIS WEEK!</div>
                <div className="text-cyan-200 mb-4">
                  When these last 2 spots are claimed, this offer disappears.<br />
                  <span className="font-semibold">Don't miss your chance to get a FREE professional website that actually WORKS for your business.</span>
                </div>
                <button
                  className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:from-cyan-500 hover:to-purple-700 transition-all text-lg mb-2"
                  onClick={() => calendlyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  CLAIM MY FREE WEBSITE NOW
                </button>
                <div className="text-xs text-yellow-200 mt-2 opacity-80">
                  *Limited to serious local business owners only. Must be available for a 15-minute discovery call within 48 hours of claiming your spot.
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.3}>
            <div className="flex flex-col items-center justify-center w-full" ref={calendlyRef}>
              {/* Calendly inline widget begin */}
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/getarkdigital/discovery-call?primary_color=8a2be2&background_color=0f172a&text_color=ffffff"
                style={{ minWidth: 0, width: '100%', height: 700, maxWidth: '100vw' }}
              ></div>
              {/* Calendly inline widget end */}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
