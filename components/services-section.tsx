"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Outdoor Photography",
      description: "Capturing the beauty of natural light and landscapes in every shot.",
      image: "/photos/bride-outdoor.jpg",
    },
    {
      title: "Wedding Photography",
      description: "Documenting your special day with creativity and care.",
      image: "/photos/wedding-couple-outdoor.jpg",
    },
    {
      title: "Fashion Photography",
      description: "Showcasing style and trends with artistic vision.",
      image: "/photos/colorful-jacket.jpg",
    },
    {
      title: "Event Photography",
      description: "Capturing the energy and moments of your special events.",
      image: "/photos/woman-pink-dress.jpg",
    },
  ]

  return (
    <section className="py-16 px-6 bg-muted/30" id="services" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#FDB913]">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our organization boasts a vibrant team of over 1,500 dedicated professionals, each bringing unique skills
            and perspectives. Together, we work towards a common goal of delivering exceptional solutions tailored to
            our clients' diverse needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: index % 2 === 0 ? -2 : 2,
                    }
                  : { opacity: 0, y: 40, rotate: 0 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="group relative rounded-xl sm:rounded-3xl overflow-hidden aspect-square sm:aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-6">
                <div className="bg-white/90 hover:bg-white transition-colors duration-300 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full inline-block mb-1 sm:mb-3 text-[10px] xs:text-xs sm:text-sm font-semibold w-fit">
                  {service.title}
                </div>
                <p className="text-white/90 text-[10px] xs:text-xs sm:text-sm leading-tight sm:leading-normal">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
