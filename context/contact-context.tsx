"use client"

import { createContext, useContext, useState } from "react"
import { ContactForm } from "@/components/contact-form"

type FormType = "contact" | "booking"

interface ContactContextType {
  openContactForm: (type?: FormType) => void
  closeContactForm: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType>("contact")

  const openContactForm = (type: FormType = "contact") => {
    setFormType(type)
    setIsOpen(true)
  }

  const closeContactForm = () => {
    setIsOpen(false)
  }

  return (
    <ContactContext.Provider value={{ openContactForm, closeContactForm }}>
      {children}
      {isOpen && (
        <ContactForm 
          onClose={closeContactForm} 
          isBooking={formType === "booking"}
        />
      )}
    </ContactContext.Provider>
  )
}

export const useContact = () => {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}
