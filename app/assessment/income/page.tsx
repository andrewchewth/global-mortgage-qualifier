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

export default function IncomePage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleContinue = () => {
    if (selectedOption) {
      localStorage.setItem("incomeSource", selectedOption)
      router.push("/assessment/financial")
    }
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <Link href="/assessment/citizenship" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>
        <Progress value={60} className="mb-4" />
        <p className="mb-2 text-sm text-muted-foreground">Step 3 of 5</p>
        <Card>
          <CardHeader>
            <CardTitle>Income Source</CardTitle>
            <CardDescription>Where is your primary source of income located?</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={setSelectedOption} value={selectedOption || ""} className="space-y-4">
              <div className="flex items-start space-x-3 rounded-md border p-4">
                <RadioGroupItem value="us-income" id="us-income" />
                <div className="flex flex-col gap-1">
                  <Label htmlFor="us-income" className="font-medium">
                    US-Based Income
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Your primary income comes from employment or business in the United States
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-md border p-4">
                <RadioGroupItem value="foreign-income" id="foreign-income" />
                <div className="flex flex-col gap-1">
                  <Label htmlFor="foreign-income" className="font-medium">
                    Foreign Income
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Your primary income comes from employment or business outside the United States
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-md border p-4">
                <RadioGroupItem value="mixed-income" id="mixed-income" />
                <div className="flex flex-col gap-1">
                  <Label htmlFor="mixed-income" className="font-medium">
                    Mixed Income Sources
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    You have significant income from both US and foreign sources
                  </p>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/assessment/citizenship">Back</Link>
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

