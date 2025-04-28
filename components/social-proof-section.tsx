"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function SocialProofSection() {
  const testimonials = [
    {
      quote:
        "They built my restaurant website in just 3 days and it looks amazing. We've seen a 40% increase in online reservations since launch.",
      author: "Sarah Johnson",
      business: "Taste of Home Restaurant",
      avatar: "/SrahJohnson.jpg",
    },
    {
      quote:
        "As a small law firm, we needed a professional online presence. ARK delivered a site that perfectly represents our brand and values.",
      author: "Michael Chen",
      business: "Chen Legal Services",
      avatar: "/MicahelChen.jpg",
    },
    {
      quote:
        "The process was so easy! I was worried about the technical aspects, but they handled everything. My online store is now thriving.",
      author: "David Miller",
      business: "Miller Auto Repair",
      avatar: "/DavidMiller.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i, type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Join over 50 satisfied small business owners who transformed their online presence
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} delay={index * 0.2 + 0.5}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 object-cover aspect-square"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-purple-900 font-bold">{testimonial.author}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.business}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
