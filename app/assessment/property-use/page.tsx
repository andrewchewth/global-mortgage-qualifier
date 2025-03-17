"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Home, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PropertyUsePage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleContinue = () => {
    if (selectedOption) {
      // In a real app, you would save this to state management or localStorage
      localStorage.setItem("propertyUse", selectedOption)
      router.push("/assessment/citizenship")
    }
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <Link href="/assessment/start" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>
        <Progress value={20} className="mb-4" />
        <p className="mb-2 text-sm text-muted-foreground">Step 1 of 5</p>
        <Card>
          <CardHeader>
            <CardTitle>Property Use</CardTitle>
            <CardDescription>How do you plan to use the property you're purchasing?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Button
                variant={selectedOption === "investment" ? "default" : "outline"}
                className="flex h-24 flex-col items-center justify-center gap-2 p-4"
                onClick={() => setSelectedOption("investment")}
              >
                <Building className="h-8 w-8" />
                <div className="text-center">
                  <p className="font-medium">Investment/Rental Property</p>
                  <p className="text-xs">Property will be used to generate rental income</p>
                </div>
              </Button>
              <Button
                variant={selectedOption === "secondary" ? "default" : "outline"}
                className="flex h-24 flex-col items-center justify-center gap-2 p-4"
                onClick={() => setSelectedOption("secondary")}
              >
                <Home className="h-8 w-8" />
                <div className="text-center">
                  <p className="font-medium">Secondary/Vacation Home</p>
                  <p className="text-xs">Property will be used as a second home</p>
                </div>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/assessment/start">Back</Link>
            </Button>
            <Button onClick={handleContinue} disabled={!selectedOption}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

