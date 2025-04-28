"use client"

import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function StatisticsSection() {
  const statistics = [
    {
      value: "+47%",
      label: "Average Increase in Leads",
      description: "Our clients see an immediate boost in lead generation after launching their new website",
    },
    {
      value: "2X",
      label: "More Online Presence",
      description: "Double your online visibility with our SEO-optimized website structure",
    },
    {
      value: "5X",
      label: "Lead Value",
      description: "Higher quality leads that convert to paying customers at 5x the industry average",
    },
    {
      value: "+63%",
      label: "Mobile Conversions",
      description: "Significant increase in conversions from mobile visitors with our responsive designs",
    },
    {
      value: "3X",
      label: "Faster Loading",
      description: "Our websites load 3x faster than the industry average, reducing bounce rates",
    },
    {
      value: "+85%",
      label: "Customer Satisfaction",
      description: "Our clients report higher customer satisfaction with their online experience",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">
              These Local Businesses Already Grabbed Their Unfair Advantage
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Real results from real businesses just like yours</p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {statistics.map((stat, index) => (
            <AnimationWrapper key={index} delay={index * 0.1 + 0.3}>
              <motion.div
                className="bg-gray-50 p-8 rounded-lg border border-gray-100 text-center"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="text-5xl font-bold text-purple-600 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
