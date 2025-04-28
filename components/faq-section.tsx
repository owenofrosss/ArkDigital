"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AnimationWrapper from "./animation-wrapper"

export default function FaqSection() {
  const faqs = [
    {
      question: "How can you build a website so quickly?",
      answer:
        "Our experienced team of designers and developers works around the clock in shifts to deliver websites in record time. We've also streamlined our process with proven frameworks that allow us to work efficiently without sacrificing quality.",
    },
    {
      question: "What's the catch with the 'free website' offer?",
      answer:
        "There's no catch! We create your website completely free of charge and show it to you first. If you love it and want to use it, then you pay. If you don't like it, you don't pay a penny. We're that confident in our work.",
    },
    {
      question: "What payment options do you offer?",
      answer:
        "We offer both one-time payments and flexible monthly installment plans. Our monthly plans make it easy for small businesses to get a professional website without a large upfront investment. We'll discuss all payment options during our discovery call.",
    },
    {
      question: "Do I need technical knowledge to maintain my website?",
      answer:
        "Not at all! We build your site with an easy-to-use content management system. We also provide a 30-minute training session to show you how to make basic updates. For more complex changes, our support packages have you covered.",
    },
    {
      question: "Do you help with domain names and hosting?",
      answer:
        "Yes! We can help you secure a domain name if you don't already have one. All our websites include the first year of hosting at no additional cost. After the first year, hosting is just $15/month.",
    },
    {
      question: "What information do you need from me to get started?",
      answer:
        "To begin, we'll need your business information, any existing branding materials (logo, colors, etc.), and content for your pages (though we can help with writing if needed). We'll guide you through exactly what's required during our initial consultation.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-purple-900 text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Everything you need to know about our website services
            </p>
          </div>
        </AnimationWrapper>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <motion.div whileHover={{ backgroundColor: "#f9f5ff" }} transition={{ duration: 0.2 }}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-purple-900 px-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              </AnimationWrapper>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
