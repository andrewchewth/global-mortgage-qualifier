"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      phone: '',
      email: ''
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    // Phone validation (US format)
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
      isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      toast.success('Thank you for your message! We will contact you soon.')
      router.push('/')
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Something went wrong. Please try again.')
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '')
    
    // Format the number as (XXX) XXX-XXXX
    if (phoneNumber.length >= 10) {
      return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value)
    setFormData(prev => ({ ...prev, phone: formattedNumber }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-white/10 backdrop-blur-lg border-0 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="bg-white/20 text-white placeholder:text-gray-300"
            />
            {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="bg-white/20 text-white placeholder:text-gray-300"
            />
            {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-white/20 text-white placeholder:text-gray-300"
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-violet-600 hover:bg-violet-700 text-white transition-colors"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

