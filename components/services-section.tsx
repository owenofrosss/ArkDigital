import { BarChart3, PenTool, Smartphone, Zap, Camera, Video, Users, LineChart } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <LineChart className="h-10 w-10 text-purple-400" />,
      title: "Marketing Strategy",
      description: "Comprehensive marketing plans tailored to your business goals and target audience.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-purple-400" />,
      title: "Digital Marketing",
      description: "Data-driven campaigns across search, display, email, and content marketing channels.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-400" />,
      title: "Social Media Marketing",
      description: "Engaging content and community management across all major social platforms.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-purple-400" />,
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand message effectively.",
    },
    {
      icon: <Video className="h-10 w-10 text-purple-400" />,
      title: "Video Creation",
      description: "Professional video production from concept to final edit for all marketing needs.",
    },
    {
      icon: <Camera className="h-10 w-10 text-purple-400" />,
      title: "Photography",
      description: "High-quality product and brand photography that showcases your offerings.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-400" />,
      title: "Logo Design & Branding",
      description: "Distinctive brand identities that make lasting impressions and build recognition.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-400" />,
      title: "Marketing Consultancy",
      description: "Expert advice and guidance to optimize your marketing efforts and ROI.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-purple-900 text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-purple-900 text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
