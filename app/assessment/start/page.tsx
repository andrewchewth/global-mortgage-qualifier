import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function StartPage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <Link href="/" className="mb-8 flex items-center text-sm font-medium">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Mortgage Pre-Qualification Assessment</CardTitle>
          <CardDescription>
            This assessment will help determine your eligibility for mortgage programs designed for foreign nationals
            and US expats.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted p-4">
            <h3 className="mb-2 font-medium">What to expect:</h3>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>A series of questions about your citizenship status and financial situation</li>
              <li>Estimated down payment and reserve requirements</li>
              <li>Preliminary program matching based on your profile</li>
              <li>Option to schedule a consultation with a loan officer</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-muted p-4">
            <h3 className="mb-2 font-medium">Information you'll need:</h3>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>Citizenship/residency status</li>
              <li>Income sources and approximate amounts</li>
              <li>Estimated property purchase price</li>
              <li>Available funds for down payment and reserves</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <Button asChild>
            <Link href="/assessment/property-use">Begin Assessment</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

