import Image from "next/image"
import { useContext } from "react"
import { CalendlyFormRefContext } from "@/components/contact-section"

export default function Header() {
  const calendlyRef = useContext(CalendlyFormRefContext)
  return (
    <header className="w-full bg-neutral-900/95 shadow-md py-3 px-0 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Image
          src="/arklogo.png"
          alt="ARK Logo"
          width={180}
          height={60}
          className="h-16 w-auto cursor-pointer"
          priority
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <button
          className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:from-cyan-500 hover:to-purple-700 transition-all text-base"
          onClick={() => calendlyRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          Claim My Free Website
        </button>
      </div>
    </header>
  )
} 