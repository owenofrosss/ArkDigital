import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <main className="flex-1">
        {/* Logo Section */}
        <div className="container flex justify-center pt-8 pb-1">
          <div className="h-12 w-auto relative">
            <Image
              src="/images/arklogo.png"
              alt="ARK Digital Logo"
              width={112}
              height={45}
              className="object-contain"
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl animate-fade-in">
                Grow Your X Audience with AI + Smart Strategy
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                A free, step-by-step guide to growing faster with tools, tactics, and minimal effort
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="group animate-pulse-slow bg-blue-600 hover:bg-blue-700" asChild>
                  <a
                    href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get the FREE Guide Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <p className="text-sm text-blue-700 font-semibold mt-2">Users report making $5,246+ extra monthly!</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">About ARK Digital</h2>
                <p className="text-gray-600 text-lg">
                  We help creators, solopreneurs, and small founders grow their audience organically on X (Twitter)
                  using AI-powered leverage. Our strategies combine cutting-edge AI tools with proven growth tactics to
                  help you build a valuable audience with minimal effort.
                </p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild>
                  <a
                    href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Free Guide ($297 Value)
                  </a>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-50 p-6 border shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-blue-100">
                    <Image src="/images/richard-ross.png" alt="Richard Ross" fill className="object-cover" />
                  </div>
                  <div className="space-y-3 text-center sm:text-left">
                    <h3 className="font-semibold text-xl">CEO and AI Specialist Richard Ross</h3>
                    <p className="text-gray-600 text-sm">
                      Growth strategist and AI enthusiast helping creators leverage technology to build audiences that
                      matter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:hello@getarkdigital.com" className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <span>hello@getarkdigital.com</span>
                        </a>
                      </Button>
                      {/* Update the X profile link in the about section */}
                      <Button variant="outline" size="sm" className="bg-black text-white hover:bg-gray-800 border-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                        <span>Follow @BuildWithRich</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Free Growth Guide</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Follow these proven strategies to grow your X audience with AI tools and smart tactics
              </p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {/* Guide Section 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Optimizing Your X Profile</h3>
                    <p className="text-gray-600">
                      Your profile is your digital storefront. Make it count with these key elements:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          High-quality profile picture that stands out (use{" "}
                          <a
                            href="https://looka.partnerlinks.io/Richard-ARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Looka
                          </a>{" "}
                          for AI-generated avatars)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Clear, benefit-driven bio that explains who you help and how</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Professional link-in-bio page (create one with{" "}
                          <a
                            href="https://go.fiverr.com/visit/?bta=1123100&brand=fiverrmarketplace"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Fiverr
                          </a>{" "}
                          in minutes)
                        </span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a href="https://looka.partnerlinks.io/Richard-ARK" target="_blank" rel="noopener noreferrer">
                            Try Looka
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Section 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Creating High-Performing Content</h3>
                    <p className="text-gray-600">
                      Leverage AI to create engaging content that resonates with your audience:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Use{" "}
                          <a
                            href="https://try.elevenlabs.io/Richard-ARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ElevenLabs
                          </a>{" "}
                          to generate professional voiceovers for your videos
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Create engaging videos with{" "}
                          <a
                            href="https://www.synthesia.io/?via=richard-ross"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Synthesia
                          </a>{" "}
                          and edit them with{" "}
                          <a
                            href="https://capcutaffiliateprogram.pxf.io/Richard-ARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            CapCut
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Generate traffic easily with YouTube/YouTube Shorts and cross-promote on X</span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://capcutaffiliateprogram.pxf.io/Richard-ARK"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Try CapCut
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Section 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Using AI Visuals and Video</h3>
                    <p className="text-gray-600">Stand out with eye-catching visuals that stop the scroll:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Create stunning images with{" "}
                          <a
                            href="https://openai.com/sora"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sora
                          </a>{" "}
                          (free daily generations) or use{" "}
                          <a
                            href="https://chat.openai.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ChatGPT
                          </a>{" "}
                          for free image creation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Design branded graphics using{" "}
                          <a
                            href="https://free-trial.adcreative.ai/Richard-ARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            AdCreative.ai
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Create professional logos with{" "}
                          <a
                            href="https://logomeai.partnerlinks.io/Richard-ARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LogoMe.ai
                          </a>{" "}
                          and secure your brand with{" "}
                          <a
                            href="https://www.ionos.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ionos
                          </a>{" "}
                          $1 domains
                        </span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://free-trial.adcreative.ai/Richard-ARK"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Try AdCreative.ai
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Section 4 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Smart Commenting Strategies</h3>
                    <p className="text-gray-600">Leverage others' audiences through strategic engagement:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Comment early on viral or niche-relevant posts (especially Elon Musk's)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Add genuine value rather than generic responses</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Use{" "}
                          <a
                            href="https://circleboom.com/?via=RichardARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            CircleBloom
                          </a>{" "}
                          to find trending conversations
                        </span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a href="https://circleboom.com/?via=RichardARK" target="_blank" rel="noopener noreferrer">
                            Try CircleBloom
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Section 5 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      5
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Consistency and Niche Clarity</h3>
                    <p className="text-gray-600">Build a recognizable presence through consistency:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Build your email list with{" "}
                          <a
                            href="https://try.getresponsetoday.com/Richard-ARK"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GetResponse
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Stick to 2-3 core topics that define your niche</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Create engagement loops by asking questions and responding to all comments</span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://try.getresponsetoday.com/Richard-ARK"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Try GetResponse
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Section 6 - Grok for X Monetization */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      6
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Leveraging Grok AI on X</h3>
                    <p className="text-gray-600">Maximize your X monetization with Grok's powerful AI capabilities:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Use Grok to analyze trending topics and generate viral content ideas specific to your niche
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Create engaging thread starters by asking Grok to summarize complex topics in your industry
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Leverage Grok's real-time data access to provide timely insights and establish yourself as an
                          authority
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Use Grok to analyze competitor content and identify gaps you can fill with your expertise
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>Generate product ideas based on audience questions that you can later monetize</span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a href="https://grok.x.ai" target="_blank" rel="noopener noreferrer">
                            Try Grok on X
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Section 7 - Website Creation */}
              <div className="bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                      7
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-semibold">Creating Your Online Presence</h3>
                    <p className="text-gray-600">Establish a professional web presence to convert your X audience:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Generate professional websites instantly with{" "}
                          <a
                            href="https://v0.dev"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            v0.dev
                          </a>{" "}
                          (includes free hosting)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Secure your brand with affordable $1 domains from{" "}
                          <a
                            href="https://www.ionos.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ionos.com
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span>
                          Create landing pages that convert your X traffic into email subscribers and customers
                        </span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="text-blue-600" asChild>
                          <a href="https://v0.dev" target="_blank" rel="noopener noreferrer">
                            Try v0.dev
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                        <Button variant="link" size="sm" className="text-blue-600" asChild>
                          <a
                            href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more in our FREE guide
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Recommended Tools</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                These AI-powered tools will help accelerate your growth on X
              </p>
            </div>

            <Tabs defaultValue="content" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="ai-assistants">AI Assistants</TabsTrigger>
              </TabsList>
              <TabsContent value="content" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">ElevenLabs</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                            Content
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Generate realistic AI voiceovers for your videos and podcasts with this powerful
                          text-to-speech platform.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://try.elevenlabs.io/Richard-ARK" target="_blank" rel="noopener noreferrer">
                              Try ElevenLabs
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Synthesia</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                            Content
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Create professional AI videos with virtual presenters - no equipment or filming required.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://www.synthesia.io/?via=richard-ross"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try Synthesia
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">CapCut</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                            Content
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Professional video editing made simple - perfect for creating engaging content for X and
                          YouTube.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://capcutaffiliateprogram.pxf.io/Richard-ARK"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try CapCut
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">ChatGPT</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                            Content
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Free AI assistant with image generation, advanced models, and DeepSearch capabilities.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                              Try ChatGPT
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="branding" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Looka</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                            Branding
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Create professional logos and brand assets with AI-powered design.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://looka.partnerlinks.io/Richard-ARK"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try Looka
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">LogoMe.ai</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                            Branding
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Generate custom logos for your brand with AI technology in minutes.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://logomeai.partnerlinks.io/Richard-ARK"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try LogoMe.ai
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">AdCreative.ai</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                            Branding
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Generate eye-catching visuals and graphics for your X posts.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://free-trial.adcreative.ai/Richard-ARK"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try AdCreative.ai
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="automation" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">GetResponse</h3>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
                            Automation
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Complete email marketing solution to grow your audience and automate your campaigns.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://try.getresponsetoday.com/Richard-ARK"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try GetResponse
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">CircleBloom</h3>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
                            Automation
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Manage and grow your social media presence with powerful analytics and scheduling tools.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://circleboom.com/?via=RichardARK" target="_blank" rel="noopener noreferrer">
                              Try CircleBloom
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Fiverr</h3>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 hover:bg-orange-50">
                            Services
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Hire freelancers to help with your X growth strategy, content creation, and more.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://go.fiverr.com/visit/?bta=1123100&brand=fiverrmarketplace"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Try Fiverr
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="ai-assistants" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Grok</h3>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                            X Native
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          X's native AI assistant with real-time data access - perfect for content creation and audience
                          growth.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://grok.x.ai" target="_blank" rel="noopener noreferrer">
                              Try Grok
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">v0.dev</h3>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                            Web Design
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Generate complete websites from text prompts with free hosting - perfect for creating landing
                          pages.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://v0.dev" target="_blank" rel="noopener noreferrer">
                              Try v0.dev
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Sora</h3>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                            Video AI
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          OpenAI's text-to-video model that creates realistic and imaginative scenes from text
                          instructions.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://openai.com/sora" target="_blank" rel="noopener noreferrer">
                              Try Sora
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Ionos.com</h3>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                            Domains
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Get professional domains for just $1 to secure your brand identity and create a memorable
                          online presence.
                        </p>
                        <div className="pt-2 flex flex-col gap-1">
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a href="https://www.ionos.com" target="_blank" rel="noopener noreferrer">
                              Try Ionos
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                            <a
                              href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more in our FREE guide
                            </a>
                          </Button>
                          <p className="text-xs text-green-600 font-medium">
                            Users earn $5,246+ monthly with these tools!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="results" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Real Results from Real Users</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                See the actual earnings and growth our users have achieved using our strategies
              </p>
              <p className="text-green-600 font-semibold mt-2">
                Users are making $5,246+ monthly with these exact methods!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-1.png"
                    alt="Sales dashboard showing over $7.6 million in total sales"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">$7.6M+ in total sales using X strategies</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-2.png"
                    alt="Multiple sales commissions notifications"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">Consistent commissions every few minutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-3.png"
                    alt="PayPal transaction of $250"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">$250 payment from a single X follower</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-4.png"
                    alt="Revenue graph showing $722.28"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">$722.28 in new order revenue</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-5.png"
                    alt="PayPal balance of $12,881.22"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">$12,881.22 PayPal balance from X audience</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-6.png"
                    alt="PayPal business dashboard with $3M+ balance"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">$3,024,127.01 PayPal business balance</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-7.png"
                    alt="Multiple completed transactions"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">Steady stream of daily transactions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/testimonial-8.png"
                    alt="Cash App balance of $8,392.51"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">$8,392.51 Cash App balance from X followers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl">
                <p className="text-yellow-800 font-medium">
                  <span className="font-bold">DISCLAIMER:</span> These are real results from users who followed our
                  strategies. Your results may vary based on effort, niche, and execution.
                </p>
              </div>
              <div className="mt-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a
                    href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get the FREE Guide & Start Earning Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Make $5,246+ Extra Monthly?</h2>
              <p className="text-blue-100">
                Our users are growing their X audience and income with these proven strategies
              </p>
              <div className="space-y-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <a
                    href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the Guide for FREE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-sm text-blue-100">100% FREE - No Credit Card Required - Instant Access</p>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="animate-bounce bg-blue-600 hover:bg-blue-700 shadow-lg" asChild>
            <a href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/" target="_blank" rel="noopener noreferrer">
              Get FREE Guide ($297 Value)
            </a>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col gap-2">
              <p className="text-center text-sm text-gray-500 md:text-left">Built with intent. Powered by AI.</p>
              <Button variant="link" className="p-0 h-auto text-blue-600" asChild>
                <a
                  href="https://ark-digital-where-ai-mee-56sbwa8.gamma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get the FREE Guide Now - Make $5,246+ Monthly
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@getarkdigital.com" className="text-sm text-gray-500 hover:text-gray-900">
                hello@getarkdigital.com
              </a>
              {/* Update the X profile link in the footer */}
              <a href="https://x.com/BuildWithRich" className="text-black hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
                <span className="sr-only">X</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
