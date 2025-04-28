"use client"

import HeroSection from "@/components/hero-section"
import ProcessSection from "@/components/process-section"
import SocialProofSection from "@/components/social-proof-section"
import PortfolioSection from "@/components/portfolio-section"
import AdvantageSection from "@/components/advantage-section"
import FreeOffersSection from "@/components/free-offers-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import StatisticsSection from "@/components/statistics-section"
import PaymentInfoSection from "@/components/payment-info-section"
import Image from "next/image"
import Header from "@/components/header"
import { useRef } from "react"
import { CalendlyFormRefContext } from "@/components/contact-section"
import CalendlyPreload from "@/components/CalendlyPreload"

export default function Home() {
  const calendlyRef = useRef<HTMLDivElement | null>(null)
  return (
    <CalendlyFormRefContext.Provider value={calendlyRef}>
      <main className="flex min-h-screen flex-col">
        <Header />
        <CalendlyPreload />
        <HeroSection />
        <AdvantageSection />
        <ProcessSection />
        <PaymentInfoSection />
        <StatisticsSection />
        <SocialProofSection />
        <PortfolioSection />
        <FreeOffersSection />
        <FaqSection />
        <ContactSection calendlyRef={calendlyRef} />
        <Footer />
      </main>
    </CalendlyFormRefContext.Provider>
  )
}
