"use client"

import { Gift, Palette, FileText, Search, Zap, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function FreeOffersSection() {
  const freeOffers = [
    {
      icon: <Palette className="h-6 w-6 text-purple-500" />,
      title: "Free Logo Creation",
      description: "Get a professional logo designed for your business - yours to keep whether you pay or not",
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      title: "Free Content Writing",
      description: "We'll write your homepage content to showcase your business in the best light",
    },
    {
      icon: <Search className="h-6 w-6 text-purple-500" />,
      title: "Free SEO Audit",
      description: "Discover how to improve your search rankings with our complimentary SEO analysis",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      title: "Free Speed Optimization",
      description: "We'll ensure your website loads lightning-fast on all devices",
    },
    {
      icon: <Gift className="h-6 w-6 text-purple-500" />,
      title: "Free Social Media Setup",
      description: "Get your business profiles set up on key social platforms at no extra cost",
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-500" />,
      title: "Free Analytics Setup",
      description: "Track your website performance with professional analytics installation",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-purple-900 text-3xl font-bold mb-4">Free Bonuses With Every Website</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Created by our expert team - yours to keep even if you don't pay
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {freeOffers.map((offer, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
                whileHover={{
                  y: -5,
                  backgroundColor: "#f9f5ff",
                  borderColor: "#d8b4fe",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {offer.icon}
                </motion.div>
                <h3 className="text-purple-900 text-lg font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
