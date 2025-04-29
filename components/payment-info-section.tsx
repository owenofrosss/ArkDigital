"use client"

import { CreditCard, Calendar, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"
import { useContext } from "react"
import { CalendlyFormRefContext } from "@/components/contact-section"

export default function PaymentInfoSection() {
  const paymentOptions = [
    {
      icon: <CheckCircle className="h-10 w-10 text-cyan-500" />,
      title: "Free First, Pay Later",
      description: "We create your entire website for free. You only pay if you're 100% satisfied with the result.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-purple-500" />,
      title: "Flexible Payment Options",
      description: "Choose between a one-time payment or convenient monthly installments that fit your budget.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-cyan-500" />,
      title: "Full Ownership Transfer",
      description: "Once payment is complete, you get 100% ownership of your website and all its assets.",
    },
  ]

  const calendlyRef = useContext(CalendlyFormRefContext)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">How Our Payment Works</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              No risk, no obligation, and flexible payment options
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {paymentOptions.map((option, index) => (
            <AnimationWrapper key={index} delay={index * 0.2 + 0.3}>
              <motion.div
                className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 text-center"
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
                  {option.icon}
                </motion.div>
                <h3 className="text-purple-900 text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:from-cyan-500 hover:to-purple-700 transition-all text-lg"
            onClick={() => calendlyRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
