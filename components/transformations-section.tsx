"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function TransformationsSection() {
  const transformations = [
    {
      title: "Local Restaurant",
      before: "/placeholder.svg?height=200&width=350&text=Before",
      after: "/placeholder.svg?height=200&width=350&text=After",
      description: "Increased online reservations by 78% in the first month",
    },
    {
      title: "Law Firm",
      before: "/placeholder.svg?height=200&width=350&text=Before",
      after: "/placeholder.svg?height=200&width=350&text=After",
      description: "Doubled monthly lead generation within 2 weeks",
    },
    {
      title: "Fitness Studio",
      before: "/placeholder.svg?height=200&width=350&text=Before",
      after: "/placeholder.svg?height=200&width=350&text=After",
      description: "Membership inquiries increased by 65% after website launch",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">
              Before/After Website Transformations
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              See the dramatic difference our 24-hour website service makes
            </p>
          </div>
        </AnimationWrapper>

        <div className="space-y-16 max-w-5xl mx-auto">
          {transformations.map((item, index) => (
            <AnimationWrapper key={index} delay={index * 0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">{item.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider text-center">Before</p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={item.before || "/placeholder.svg"}
                        alt={`${item.title} before transformation`}
                        width={350}
                        height={200}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider text-center">After</p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="border border-purple-200 rounded-lg overflow-hidden shadow-md"
                    >
                      <Image
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} after transformation`}
                        width={350}
                        height={200}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </div>
                <p className="text-center mt-4 text-purple-700 font-medium">{item.description}</p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
