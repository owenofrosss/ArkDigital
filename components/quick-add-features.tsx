"use client"

import { motion } from "framer-motion"
import { BarChart3, MessageSquare, Calendar, HelpCircle, Video, Users, Search, Activity } from "lucide-react"
import AnimationWrapper from "./animation-wrapper"

export default function QuickAddFeatures() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
      title: "Google Analytics",
      description: "Track website performance and visitor behavior",
    },
    {
      icon: <Activity className="h-6 w-6 text-purple-500" />,
      title: "Facebook Pixel",
      description: "Optimize ad campaigns and track conversions",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Testimonials",
      description: "Showcase customer reviews and success stories",
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-purple-500" />,
      title: "FAQ Section",
      description: "Answer common questions to build trust",
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
      title: "Booking Integration",
      description: "Let customers schedule appointments online",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-500" />,
      title: "Live Chat",
      description: "Provide instant support to website visitors",
    },
    {
      icon: <Search className="h-6 w-6 text-purple-500" />,
      title: "Basic SEO",
      description: "Optimize your site for search engines",
    },
    {
      icon: <Video className="h-6 w-6 text-purple-500" />,
      title: "Video Walkthrough",
      description: "Guided tour of your website's features",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-purple-900 text-3xl font-bold mb-4">Quick-Add Features</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Enhance your website with these popular add-ons</p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <motion.div
                className="bg-gray-50 p-6 rounded-lg border border-gray-100"
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
                  {feature.icon}
                </motion.div>
                <h3 className="text-purple-900 text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
