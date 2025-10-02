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
              Why choose <span className="text-[#FDB913]">C&A?</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
              Our organization boasts a vibrant team of over 1,500 dedicated professionals, each bringing unique skills
              and perspectives. Together, we work towards a common goal of delivering exceptional solutions tailored to
              our clients' diverse needs.
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
                <h3 className="font-bold mb-2 text-lg">Dynamic Team of Engineers</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Our organization boasts a vibrant team of over 1,500 skilled professionals, each contributing unique
                  expertise to every project.
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
                <h3 className="font-bold mb-2 text-lg">Top Quality Buildings</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We are committed to delivering exceptional quality in every project, to a vibrant workforce of more
                  than 1,500 skilled professionals.
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
                <h3 className="font-bold mb-2 text-lg">Best Tools On the Market</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We utilize cutting-edge technology and tools, collaborating with a passionate team of over 1,500
                  dedicated professionals.
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
