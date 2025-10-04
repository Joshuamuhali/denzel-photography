"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { useState } from "react"
import { ContactForm } from "./contact-form"

export function PricingSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const pricingData = [
    {
      category: "Basic Printing",
      items: [
        { name: "Single Photo", price: "ZMW 30.00" },
        { name: "Passport Size", price: "K50.00" },
        { name: "A4 Print", price: "K80.00" },
        { name: "A4 Framed", price: "K120.00" },
      ]
    },
    {
      category: "Studio Photography",
      items: [
        { name: "10 Pictures", price: "ZMW 350.00" },
        { name: "20 Pictures", price: "ZMW 500.00" },
        { name: "30 Pictures", price: "ZMW 700.00" },
        { name: "40 Pictures", price: "ZMW 1,000.00" },
        { name: "50 Pictures", price: "ZMW 1,500.00" },
      ]
    },
    {
      category: "Wedding Packages",
      items: [
        { name: "Photos Only (Mongu)", price: "ZMW 5,500.00" },
        { name: "Photos Only (Outside Mongu)", price: "ZMW 7,000.00" },
        { name: "Video Only", price: "ZMW 4,500.00" },
        { name: "Photo & Video Package", price: "ZMW 7,500.00" },
      ]
    },
    {
      category: "Birthday Packages",
      items: [
        { name: "20 Pictures", price: "ZMW 750.00" },
        { name: "30 Pictures", price: "ZMW 1,000.00" },
        { name: "50 Pictures", price: "ZMW 1,500.00" },
        { name: "80 Pictures", price: "ZMW 2,000.00" },
      ]
    },
    {
      category: "Kids Packages",
      items: [
        { name: "15 Photos", price: "K450.00" },
        { name: "25 Photos", price: "K750.00" },
        { name: "35 Photos", price: "K1,200.00" },
      ]
    },
    {
      category: "Corporate & Events",
      items: [
        { name: "Corporate Shoot (30 mins)", price: "K450.00" },
        { name: "Corporate Shoot (1 hour)", price: "K850.00" },
        { name: "Workshop (2 hours)", price: "ZMW 1,200.00" },
        { name: "Full Day Event", price: "ZMW 2,000.00" },
        { name: "Kitchen Party Package", price: "From K3,000.00" },
      ]
    },
    {
      category: "Graduation Packages",
      items: [
        { name: "10 Pictures", price: "ZMW 350.00" },
        { name: "20 Pictures", price: "ZMW 700.00" },
        { name: "40 Pictures", price: "ZMW 1,200.00" },
        { name: "50 Pictures", price: "ZMW 1,500.00" },
      ]
    },
    {
      category: "Special Occasions",
      items: [
        { name: "Marriage Blessings (Mongu)", price: "ZMW 2,500.00" },
        { name: "Engagement Session", price: "ZMW 850.00" },
        { name: "Come Together Package", price: "From K3,500.00" },
      ]
    }
  ]

  const termsAndConditions = [
    "A 30% non-refundable deposit is required to secure your booking.",
    "Full payment is due on the day of the shoot/event.",
    "Additional charges apply for locations outside Mongu (transportation and accommodation to be covered by client).",
    "For weddings outside Mongu, food and shelter must be provided by the client.",
    "Rush processing available for an additional 25% fee.",
    "Prices are subject to change without prior notice.",
    "Copyright of all images remains with Denzel Studios unless otherwise agreed in writing.",
    "Final image delivery within 7-14 business days after the shoot.",
    "Rescheduling requires 48 hours notice.",
    "For corporate events, client will arrange and cover transportation costs for photographers and equipment."
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingData.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-center">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-b pb-2">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-4"
                  onClick={() => {
                    setSelectedPackage(category.category)
                    setIsOpen(true)
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
          <ul className="space-y-2 text-gray-700">
            {termsAndConditions.map((term, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            By booking with Denzel Studios, you agree to our terms and conditions.
            For custom packages or special requests, please contact us directly.
          </p>
        </div>
      </div>

      {isOpen && (
        <ContactForm 
          onClose={() => {
            setIsOpen(false)
            setSelectedPackage("")
          }}
          isBooking={true}
          selectedPackage={selectedPackage}
        />
      )}
    </section>
  )
}
