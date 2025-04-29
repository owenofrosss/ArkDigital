"use client"

import Image from "next/image"
import { Star } from "lucide-react"

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
        <div className="text-center mb-16">
          <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Join over 50 satisfied small business owners who transformed their online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center"
            >
              <div className="mb-6 text-center">
                <h3 className="text-purple-900 font-bold">{testimonial.author}</h3>
                <p className="text-gray-500 text-sm">{testimonial.business}</p>
              </div>
              <p className="text-gray-700 italic text-center">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
