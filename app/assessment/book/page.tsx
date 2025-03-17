"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
  const router = useRouter()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timezone: "",
    preferredDay: "",
    preferredTime: "",
    additionalInfo: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Simulate a delay before redirecting
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  if (formSubmitted) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center py-8">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold">Consultation Scheduled!</h1>
          <p className="mb-6 text-muted-foreground">
            Thank you for scheduling a consultation. A loan officer will contact you shortly to confirm your
            appointment.
          </p>
          <p className="text-sm text-muted-foreground">Redirecting to home page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <Link href="/assessment/results" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Results
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Schedule a Consultation</CardTitle>
            <CardDescription>
              Book a call with a loan officer who specializes in mortgages for foreign nationals and US expats.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Your Timezone</Label>
                <Select
                  value={formData.timezone}
                  onValueChange={(value) => handleSelectChange("timezone", value)}
                  required
                >
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    <SelectItem value="cst">Central Time (CT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Day</Label>
                <RadioGroup
                  value={formData.preferredDay}
                  onValueChange={(value) => handleSelectChange("preferredDay", value)}
                  className="grid grid-cols-2 gap-2 sm:grid-cols-4"
                  required
                >
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="monday" id="monday" />
                    <Label htmlFor="monday" className="cursor-pointer">
                      Monday
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="tuesday" id="tuesday" />
                    <Label htmlFor="tuesday" className="cursor-pointer">
                      Tuesday
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="wednesday" id="wednesday" />
                    <Label htmlFor="wednesday" className="cursor-pointer">
                      Wednesday
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="thursday" id="thursday" />
                    <Label htmlFor="thursday" className="cursor-pointer">
                      Thursday
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="friday" id="friday" />
                    <Label htmlFor="friday" className="cursor-pointer">
                      Friday
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Preferred Time</Label>
                <RadioGroup
                  value={formData.preferredTime}
                  onValueChange={(value) => handleSelectChange("preferredTime", value)}
                  className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                  required
                >
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="morning" id="morning" />
                    <Label htmlFor="morning" className="cursor-pointer">
                      Morning
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="afternoon" id="afternoon" />
                    <Label htmlFor="afternoon" className="cursor-pointer">
                      Afternoon
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <RadioGroupItem value="evening" id="evening" />
                    <Label htmlFor="evening" className="cursor-pointer">
                      Evening
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Please share any additional information or questions you have"
                  className="min-h-[100px]"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" asChild>
                <Link href="/assessment/results">Back</Link>
              </Button>
              <Button type="submit">
                <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

