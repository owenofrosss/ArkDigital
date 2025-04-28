"use client"

import { Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import AnimationWrapper from "./animation-wrapper"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses just getting started",
      features: [
        "1-3 page custom website",
        "Mobile-friendly design",
        "Fast loading optimization",
        "SEO-ready structure",
        "Contact form integration",
        "Social media links",
        "Google Maps integration",
        "Basic analytics setup",
        "1 revision round",
        "Video handover tutorial",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$999",
      description: "For businesses ready to grow their online presence",
      features: [
        "Everything in Starter",
        "Shopify store setup (up to 10 products)",
        "Payment/shipping/tax setup",
        "Mailchimp integration",
        "Automated welcome email",
        "Newsletter signup form",
        "Basic abandoned cart automation",
        "Custom domain setup",
        "2 revision rounds",
        "Priority launch support",
      ],
      isPopular: true,
    },
    {
      name: "Growth",
      price: "$1,499+",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Pro",
        "Advanced automations",
        "Multi-step email flows",
        "Zapier integrations",
        "Blog/content section",
        "First month ongoing support",
        "Up to 25 products",
        "Custom landing pages",
        "Retargeting pixel setup",
        "Monthly analytics report",
      ],
      isPopular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "20%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
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
        <AnimationWrapper>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ark%20copy.jpg-GDWobTygW3Ugm2xPcEVPOeuaeVMhEA.jpeg"
                alt="ARK Logo"
                width={120}
                height={42}
                className="h-10 w-auto"
              />
            </div>
            <h2 className="text-purple-900 text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Choose the perfect plan for your business needs</p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {plans.map((plan, index) => (
            <AnimationWrapper key={index} delay={index * 0.2 + 0.5}>
              <motion.div
                className={`rounded-2xl overflow-hidden ${
                  plan.isPopular
                    ? "border-2 border-purple-500 shadow-xl relative transform-gpu"
                    : "border border-gray-200 shadow-lg"
                } bg-white`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.3 }}
                    >
                      <Star className="h-3 w-3 mr-1 fill-white" /> RECOMMENDED
                    </motion.div>
                  </div>
                )}
                <div className={`p-8 ${plan.isPopular ? "bg-gradient-to-br from-purple-50 to-cyan-50" : ""}`}>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{plan.name}</h3>
                  <div className="mb-4 flex items-end">
                    <span className="text-4xl font-bold text-purple-900">{plan.price}</span>
                    {!plan.price.includes("+") && <span className="text-gray-500 ml-1">one-time</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      asChild
                      className={`w-full ${
                        plan.isPopular
                          ? "bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white"
                          : "bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                      }`}
                      size="lg"
                    >
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </motion.div>

                  <div className="border-t border-gray-200 mt-8 pt-8">
                    <p className="font-medium text-purple-900 mb-4">What's included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <Check
                            className={`h-5 w-5 ${plan.isPopular ? "text-purple-500" : "text-cyan-500"} mr-2 shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
