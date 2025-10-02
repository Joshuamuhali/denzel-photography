"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6" id="home">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Capturing</span> a Brighter Future{" "}
            <span className="text-[#FDB913]">Starting Today</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We are a forward-thinking photography studio dedicated to capturing life's most precious moments. From
            weddings to portraits, each photograph tells a unique story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-muted mb-8 shadow-2xl"
        >
          <img
            src="/photos/wedding-couple-outdoor.jpg"
            alt="Professional photography"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="flex flex-wrap gap-8 items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img
                    src="/photos/woman-olive-overalls.jpg"
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/photos/woman-pink-dress.jpg"
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/photos/colorful-jacket.jpg"
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-semibold">+500 Happy Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Present in 4 Countries</span>
                <div className="flex -space-x-1 ml-2">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">🇿🇲</div>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">🇿🇦</div>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">🇰🇪</div>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">🇬🇧</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-black font-semibold px-8 rounded-lg">
            Book a Session
          </Button>
          <Button
            variant="outline"
            className="font-semibold border-foreground/20 hover:bg-muted bg-transparent px-8 rounded-lg"
          >
            About Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
