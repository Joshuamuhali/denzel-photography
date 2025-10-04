"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  onClose: () => void;
  isBooking?: boolean;
  selectedPackage?: string;
}

export function ContactForm({ 
  onClose, 
  isBooking = false, 
  selectedPackage = "" 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    service: selectedPackage,
    termsAccepted: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isBooking && !formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed with your booking.")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Format the message for WhatsApp
      const whatsappMessage = `*New ${isBooking ? 'Booking' : 'Contact'} Form Submission*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        (isBooking ? `*Package/Service:* ${formData.service}%0A` : '') +
        (isBooking ? `*Preferred Date:* ${formData.date}%0A` : '') +
        (formData.message ? `*Message:* ${formData.message}%0A` : '') +
        (isBooking ? `%0A*Terms Accepted:* ${formData.termsAccepted ? 'Yes' : 'No'}` : '')
      
      // Open WhatsApp with the pre-filled message (Zambian number format: +260)
      window.open(`https://wa.me/260770933543?text=${whatsappMessage}`, '_blank')
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        service: selectedPackage,
        termsAccepted: false
      })
      
      // Show success message
      alert("Thank you! Please complete your booking on WhatsApp.")
      onClose()
    } catch (error) {
      console.error("Error preparing message:", error)
      alert("There was an error preparing your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {isBooking ? "Book a Session" : "Contact Us"}
          </h2>
          {isBooking && selectedPackage && (
            <p className="text-sm text-gray-600">Package: {selectedPackage}</p>
          )}
        </div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isSubmitting}
          type="button"
        >
          &times;
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!selectedPackage && (
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                Service/Package
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full p-2 border rounded"
                disabled={isSubmitting}
              >
                <option value="">Select a service/package</option>
                <option value="Basic Services">Basic Services</option>
                <option value="Studio Photography">Studio Photography</option>
                <option value="Wedding Package">Wedding Package</option>
                <option value="Event Coverage">Event Coverage</option>
                <option value="Corporate Shoot">Corporate Shoot</option>
                <option value="Custom Package">Custom Package</option>
              </select>
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name *
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email {!isBooking && '*'}
            </label>
            <Input
              id="email"
              type="email"
              required={!isBooking}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              disabled={isSubmitting}
              placeholder="e.g., 0971234567"
            />
          </div>
          
          {isBooking && (
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Preferred Date *
              </label>
              <Input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                disabled={isSubmitting}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          )}
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {isBooking ? 'Additional Information' : 'Message'} {!isBooking && '*'}
            </label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required={!isBooking}
              disabled={isSubmitting}
              placeholder={
                isBooking 
                  ? "Please include any special requests, preferred time, or additional information..." 
                  : "Your message..."
              }
            />
          </div>
          
          <div className="space-y-4 pt-2">
            {isBooking && (
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
                  className="mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms and conditions, including the 30% non-refundable deposit requirement and cancellation policy.
                </label>
              </div>
            )}
            
            <div className="flex space-x-4">
              <Button 
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : isBooking ? 'Book Now' : 'Send Message'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
