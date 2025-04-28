"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import AnimationWrapper from "./animation-wrapper"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Local Bakery Website",
      category: "Small Business Website",
      description: "Custom website with online ordering system and location finder",
      image: "https://images2.imgbox.com/e4/69/EUrPLXf8_o.png",
    },
    {
      title: "Fitness Trainer Portfolio",
      category: "Personal Brand Website",
      description: "Mobile-first design with class booking and testimonials",
      image: "https://images2.imgbox.com/78/0c/PBwB0j35_o.png",
    },
    {
      title: "Boutique Shop",
      category: "E-commerce Website",
      description: "Shopify integration with custom product photography",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/472752787_1120106873151907_7307972401437499042_n.jpg-r3Ii5K1dWRoQkgrPDObAhOhiWp3ZQZ.jpeg",
    },
    {
      title: "Professional Consultant",
      category: "Service Business Website",
      description: "Lead generation focused with appointment scheduling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/472486318_1120090713153523_4630732905203305149_n.jpg-dmg5xoHJA7Q9cMLwY9IfbaLXZrkqUC.jpeg",
    },
    {
      title: "Educational Platform",
      category: "Membership Website",
      description: "Course delivery platform with member login and progress tracking",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/472596825_1120308883131706_1161536187400575006_n.jpg-IWPoijMOKXRGh0VBB7HVanuuxePoZ4.jpeg",
    },
    {
      title: "Event Landing Page",
      category: "Conversion-Focused Website",
      description: "High-converting landing page with registration and countdown",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/472922434_1120072063155388_1116357516605983577_n.jpg-6dLC2ScIWk2FG6yXt9gJd3liMQSzeS.jpeg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-purple-900 text-4xl md:text-5xl font-bold mb-4">Our Website Portfolio</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Websites created by our expert team in just 24 hours - no AI, just pure human expertise
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <AnimationWrapper key={index} delay={index * 0.1 + 0.3}>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white shadow-md"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className={
                      `object-cover transition-transform duration-500 group-hover:scale-110 ` +
                      (item.title === "Educational Platform"
                        ? "scale-125"
                        : ["Event Landing Page", "Professional Consultant"].includes(item.title)
                        ? "scale-110"
                        : "")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-cyan-300 text-sm mb-2 block">{item.category}</span>
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimationWrapper delay={0.8}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-700"
                size="lg"
              >
                <Link href="#contact">
                  <span className="font-bold">Get Your Free Website</span>
                </Link>
              </Button>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
