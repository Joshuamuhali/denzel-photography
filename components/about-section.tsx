"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-background" id="about" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-[#FDB913] font-semibold mb-2 uppercase tracking-wide">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Who we are?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At our company, we pride ourselves on being a dynamic team of 15 dedicated professionals. Each
                  member brings a unique set of skills and expertise, contributing to our collective goal of delivering
                  exceptional photography services.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Together, we work towards a common goal of delivering innovative solutions that meet the diverse needs of
                  our clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-[#FDB913] pl-4 py-2">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We envision a diverse community of 15 professionals who drive creativity and innovation, delivering
                  tailored solutions that exceed expectations.
                </p>
              </div>

              <div className="border-l-4 border-[#FDB913] pl-4 py-2">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We aim to create a vibrant community of 15 professionals who drive creativity and innovation,
                  delivering tailored solutions that exceed expectations.
                </p>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 h-full content-start"
          >
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                src="/photos/bride-outdoor.jpg"
                alt="Bride outdoor photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                src="/photos/men-formal-suits.jpg"
                alt="Formal portrait photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                src="/photos/woman-pink-dress.jpg"
                alt="Portrait in pink dress"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                src="/photos/groom-white-suit.jpg"
                alt="Groom in white suit"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </motion.div>
        </div>

        {/* Founder/CEO Section */}
        <div className="mt-20 md:mt-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">Meet Our Founder</h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FDB913] shadow-lg">
                <img
                  src="/photos2/denzel_studios MG-18-Recovered-Recoveredfh.jpg"
                  alt="Gift Mulele - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-left mt-6 md:mt-0">
                <h4 className="text-xl font-bold text-[#FDB913]">Gift Mulele</h4>
                <p className="text-sm text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Gift Mulele, also known as Denzel, is the visionary founder and CEO of our studio, bringing over a decade of experience in professional photography. 
                  His passion for capturing life's most precious moments has been the driving force behind our studio's success and reputation 
                  for excellence in the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Based in Mongu, under Gift's leadership, our team has grown to serve clients across Zambia, covering events and creating timeless memories through our 
                  distinctive style and attention to detail. From intimate gatherings to large-scale celebrations, we bring our expertise to every corner of the country.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
