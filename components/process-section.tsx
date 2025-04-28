"use client"

import { CheckCircle2, Zap, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function ProcessSection() {
  const steps = [
    {
      icon: <CheckCircle2 className="h-12 w-12 text-cyan-500" />,
      title: "15-Minute Discovery Call",
      description: "Tell us about your business goals and website needs in a quick 15-minute call.",
      number: "1",
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-500" />,
      title: "Our Team Gets to Work",
      description: "Our skilled designers and developers create your custom website within 24 hours.",
      number: "2",
    },
    {
      icon: <Rocket className="h-12 w-12 text-cyan-500" />,
      title: "Free Preview & Approval",
      description: "Review your site for free. Only pay if you love it, then we launch it immediately.",
      number: "3",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">Our Simple 3-Step Process</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Our expert team works around the clock to deliver your website in record time
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <AnimationWrapper key={index} delay={index * 0.2 + 0.5}>
              <motion.div
                className="relative bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.number}
                </motion.div>
                <motion.div
                  className="flex justify-center mb-6 mt-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-purple-900 text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
