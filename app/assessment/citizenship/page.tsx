"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CitizenshipPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleContinue = () => {
    if (selectedOption) {
      localStorage.setItem("citizenship", selectedOption)
      router.push("/assessment/income")
    }
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <Link href="/assessment/property-use" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>
        <Progress value={40} className="mb-4" />
        <p className="mb-2 text-sm text-muted-foreground">Step 2 of 5</p>
        <Card>
          <CardHeader>
            <CardTitle>Citizenship Status</CardTitle>
            <CardDescription>What is your current citizenship or residency status?</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={setSelectedOption} value={selectedOption || ""} className="space-y-4">
              <div className="flex items-start space-x-3 rounded-md border p-4">
                <RadioGroupItem value="us-citizen" id="us-citizen" />
                <div className="flex flex-col gap-1">
                  <Label htmlFor="us-citizen" className="font-medium">
                    US Citizen
                  </Label>
                  <p className="text-sm text-muted-foreground">You are a citizen of the United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-md border p-4">
                <RadioGroupItem value="green-card" id="green-card" />
                <div className="flex flex-col gap-1">
                  <Label htmlFor="green-card" className="font-medium">
                    Green Card Holder
                  </Label>
                  <p className="text-sm text-muted-foreground">You have permanent residency in the United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-md border p-4">
                <RadioGroupItem value="foreign-national" id="foreign-national" />
                <div className="flex flex-col gap-1">
                  <Label htmlFor="foreign-national" className="font-medium">
                    Foreign National
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    You are not a US citizen and do not have permanent residency
                  </p>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/assessment/property-use">Back</Link>
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

