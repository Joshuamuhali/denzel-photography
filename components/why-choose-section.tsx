"use client"

import { Button } from "@/components/ui/button"
import { Users, Building2, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a1a] text-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Why Choose <span className="text-[#FDB913]">Denzel Studios?</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
              At Denzel Studios, we combine artistic vision with technical expertise to capture your most precious moments.
              Our team of 15 passionate photographers brings creativity and professionalism to every shoot, ensuring
              your memories are preserved with stunning clarity and emotion.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FDB913] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-lg">Award-Winning Photographers</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Our team includes 15+ award-winning photographers, each with specialized skills in different photography
                  styles, from weddings to commercial shoots, ensuring we have the perfect expert for your needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FDB913] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-lg">Unmatched Quality</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We're committed to delivering exceptional quality in every shot, with our team of 15 professionals
                  dedicated to perfecting every detail of your photographs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FDB913] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-lg">State-of-the-Art Equipment</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We invest in the latest professional cameras, lenses, and editing software, ensuring your photos
                  are captured and processed with the highest quality possible.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-black font-semibold px-8 rounded-lg">
                Start A Project
              </Button>
              <p className="text-sm text-gray-400">
                We are the leading company in the market, providing top-notch solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
