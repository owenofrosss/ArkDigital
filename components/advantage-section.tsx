"use client"

import { Zap, Award, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function AdvantageSection() {
  const advantages = [
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "24-Hour Turnaround",
      description:
        "While other agencies are just getting started, our skilled team has already completed your website.",
    },
    {
      icon: <Award className="h-10 w-10 text-purple-500" />,
      title: "Expert Design Team",
      description: "Our professional designers and developers work around the clock to deliver exceptional results.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
      title: "Pay Only If You Love It",
      description: "We create your website for free first. You only pay if you're 100% satisfied with the results.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">The "Unfair Advantage" We Give You</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our skilled team works around the clock while others are just getting started
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <AnimationWrapper key={index} delay={index * 0.2 + 0.3}>
              <motion.div
                className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {advantage.icon}
                </motion.div>
                <h3 className="text-purple-900 text-2xl font-bold mb-3 text-center">{advantage.title}</h3>
                <p className="text-gray-600 text-center">{advantage.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
