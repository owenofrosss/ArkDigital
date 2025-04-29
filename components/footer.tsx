"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: <Facebook size={20} />, name: "Facebook" },
            { icon: <Instagram size={20} />, name: "Instagram" },
            { icon: <Twitter size={20} />, name: "Twitter" },
            { icon: <Linkedin size={20} />, name: "LinkedIn" },
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="#" className="hover:text-cyan-300 transition-colors">
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2 mb-4">
          <a href="mailto:hello@getarkdigital.com" className="text-white/90 hover:text-cyan-300 transition-colors text-sm font-medium">hello@getarkdigital.com</a>
          <a href="tel:8164504500" className="text-white/90 hover:text-cyan-300 transition-colors text-sm font-medium">816-450-4500</a>
        </div>
        <p className="text-sm text-white/70">© {new Date().getFullYear()} ARK Creative. All rights reserved.</p>
      </div>
    </footer>
  )
}
