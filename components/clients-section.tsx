import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=60&width=120&text=Client+1" },
    { name: "Client 2", logo: "/placeholder.svg?height=60&width=120&text=Client+2" },
    { name: "Client 3", logo: "/placeholder.svg?height=60&width=120&text=Client+3" },
    { name: "Client 4", logo: "/placeholder.svg?height=60&width=120&text=Client+4" },
    { name: "Client 5", logo: "/placeholder.svg?height=60&width=120&text=Client+5" },
    { name: "Client 6", logo: "/placeholder.svg?height=60&width=120&text=Client+6" },
    { name: "Client 7", logo: "/placeholder.svg?height=60&width=120&text=Client+7" },
    { name: "Client 8", logo: "/placeholder.svg?height=60&width=120&text=Client+8" },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-purple-900 text-3xl font-bold mb-4">Trusted By Leading Brands</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
