import Image from "next/image"
import { openCalendlyPopup } from "@/utils/openCalendlyPopup"

export default function Header() {
  return (
    <header className="w-full bg-neutral-900/95 shadow-md py-1 px-0 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Image
          src="/arklogo.png"
          alt="ARK Logo"
          width={110}
          height={36}
          className="h-9 w-auto cursor-pointer"
          priority
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <button
          className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-1.5 px-4 rounded-lg shadow-md hover:from-cyan-500 hover:to-purple-700 transition-all text-sm"
          onClick={openCalendlyPopup}
        >
          Claim My Free Website
        </button>
      </div>
    </header>
  )
} 