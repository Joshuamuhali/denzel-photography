"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What types of photography sessions do you offer?",
      answer:
        "We offer portrait, event, commercial, lifestyle, maternity, and family photography sessions. Each session is customized to meet your specific needs and vision.",
    },
    {
      question: "How long does a typical photo session last?",
      answer:
        "Session lengths vary by type. Portrait sessions typically last 1-2 hours, while event coverage can range from 4-8 hours depending on your needs.",
    },
    {
      question: "When will I receive my photos?",
      answer:
        "You'll receive a preview gallery within 48 hours and fully edited high-resolution images within 7-10 business days after your session.",
    },
    {
      question: "Can I request specific editing styles?",
      answer:
        "We work closely with you to understand your preferred aesthetic and editing style to ensure the final images match your vision.",
    },
    {
      question: "Do you offer prints and albums?",
      answer:
        "Yes, we offer professional printing services including prints, canvases, and custom photo albums. All products are made with premium materials.",
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#1a1a1a] text-white rounded-[3rem] p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-semibold mb-6">
                FAQs
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Frequently Asked
                <br />
                <span className="text-[#D97757]">Questions</span>
              </h2>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Have questions about our photography services? We've compiled answers to the most common questions to
                help you understand what to expect when working with Denzel Photography.
              </p>
              <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white font-semibold">Contact Us</Button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#2a2a2a] rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-[#333] transition-colors"
                  >
                    <span className="font-medium text-sm pr-4">{faq.question}</span>
                    <Plus
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
