"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Download, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface AssessmentData {
  propertyUse: string
  citizenship: string
  incomeSource: string
  purchasePrice: string
  availableFunds: string
}

export default function ResultsPage() {
  const [data, setData] = useState<AssessmentData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would use a state management solution
    const propertyUse = localStorage.getItem("propertyUse") || ""
    const citizenship = localStorage.getItem("citizenship") || ""
    const incomeSource = localStorage.getItem("incomeSource") || ""
    const purchasePrice = localStorage.getItem("purchasePrice") || ""
    const availableFunds = localStorage.getItem("availableFunds") || ""

    setData({
      propertyUse,
      citizenship,
      incomeSource,
      purchasePrice,
      availableFunds,
    })
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <p>Loading your results...</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <p>No assessment data found. Please complete the assessment.</p>
        <Button asChild className="mt-4">
          <Link href="/assessment/start">Start Assessment</Link>
        </Button>
      </div>
    )
  }

  const purchasePrice = Number.parseInt(data.purchasePrice)
  const availableFunds = Number.parseInt(data.availableFunds)

  // Calculate down payment requirement based on citizenship
  const downPaymentPercent = data.citizenship === "foreign-national" ? 0.25 : 0.2
  const downPaymentAmount = purchasePrice * downPaymentPercent

  // Calculate reserves (10% of purchase price)
  const reservesAmount = purchasePrice * 0.1

  // Calculate total required funds
  const totalRequiredFunds = downPaymentAmount + reservesAmount

  // Determine if the user has sufficient funds
  const hasSufficientFunds = availableFunds >= totalRequiredFunds

  // Determine program eligibility
  const isDSCREligible = data.propertyUse === "investment"
  const isSecondaryHomeEligible = data.propertyUse === "secondary" && hasSufficientFunds

  // Format currency
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8">
          <Link href="/assessment/financial" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>
        <Progress value={100} className="mb-4" />
        <p className="mb-2 text-sm text-muted-foreground">Step 5 of 5</p>
        <Card>
          <CardHeader>
            <CardTitle>Your Pre-Qualification Results</CardTitle>
            <CardDescription>
              Based on the information you provided, here are your mortgage program options.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="financial">Financial Details</TabsTrigger>
                <TabsTrigger value="programs">Program Options</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="space-y-4 pt-4">
                <div className="rounded-lg border bg-muted p-4">
                  <h3 className="mb-2 text-lg font-medium">Assessment Overview</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Property Use:</span>
                      <span className="font-medium">
                        {data.propertyUse === "investment" ? "Investment/Rental Property" : "Secondary/Vacation Home"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Citizenship Status:</span>
                      <span className="font-medium">
                        {data.citizenship === "us-citizen"
                          ? "US Citizen"
                          : data.citizenship === "green-card"
                            ? "Green Card Holder"
                            : "Foreign National"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Income Source:</span>
                      <span className="font-medium">
                        {data.incomeSource === "us-income"
                          ? "US-Based Income"
                          : data.incomeSource === "foreign-income"
                            ? "Foreign Income"
                            : "Mixed Income Sources"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-green-50 p-4">
                  <h3 className="mb-2 text-lg font-medium text-green-700">Qualification Status</h3>
                  <p className="text-green-700">
                    {hasSufficientFunds
                      ? "Based on your information, you appear to qualify for mortgage financing."
                      : "You may need additional funds to qualify for mortgage financing."}
                  </p>
                </div>

                <div className="rounded-lg border bg-muted p-4 mt-4">
                  <h3 className="mb-2 text-lg font-medium">Why Work With Us</h3>
                  <p className="text-sm mb-2">
                    Unlike most lenders, we specialize exclusively in helping foreign nationals and US expats purchase
                    US property.
                  </p>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>We understand your unique challenges as an international buyer</li>
                    <li>We can qualify you based on foreign income sources</li>
                    <li>We handle remote document processing for international clients</li>
                    <li>We offer solutions when traditional banks can't help</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="flex-1" asChild>
                    <Link href="/assessment/book">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" /> Download Summary
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="financial" className="space-y-4 pt-4">
                <div className="rounded-lg border bg-muted p-4">
                  <h3 className="mb-2 text-lg font-medium">Financial Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Purchase Price:</span>
                      <span className="font-medium">{formatCurrency(purchasePrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <span>Down Payment Required:</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {data.citizenship === "foreign-national"
                                  ? "Foreign nationals typically require 25% down payment"
                                  : "US citizens and green card holders typically require 20% down payment"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <span className="font-medium">{formatCurrency(downPaymentAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <span>Reserves Required:</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Typically 10% of the purchase price in cash reserves</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <span className="font-medium">{formatCurrency(reservesAmount)}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-medium">
                        <span>Total Funds Required:</span>
                        <span>{formatCurrency(totalRequiredFunds)}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Your Available Funds:</span>
                      <span className={`font-medium ${hasSufficientFunds ? "text-green-600" : "text-red-600"}`}>
                        {formatCurrency(availableFunds)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Funds Surplus/Deficit:</span>
                      <span
                        className={`font-medium ${
                          availableFunds - totalRequiredFunds >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {formatCurrency(availableFunds - totalRequiredFunds)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-muted p-4">
                  <h3 className="mb-2 text-lg font-medium">Estimated Monthly Payment</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is a rough estimate based on current rates and does not include taxes or insurance.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Loan Amount:</span>
                      <span className="font-medium">{formatCurrency(purchasePrice - downPaymentAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Interest Rate:</span>
                      <span className="font-medium">{data.citizenship === "foreign-national" ? "7.5%" : "6.5%"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Term:</span>
                      <span className="font-medium">30 years</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-medium">
                        <span>Estimated Monthly Payment:</span>
                        <span>
                          {formatCurrency(
                            ((purchasePrice - downPaymentAmount) *
                              (data.citizenship === "foreign-national" ? 0.075 : 0.065)) /
                              12,
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="programs" className="space-y-4 pt-4">
                {isDSCREligible && (
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 text-lg font-medium">DSCR Loan Program</h3>
                    <p className="mb-2 text-sm">
                      Debt Service Coverage Ratio loans are designed for investment properties and are based on the
                      property's rental income potential rather than your personal income.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Eligibility:</span>
                        <span className="font-medium text-green-600">Eligible</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Down Payment Requirement:</span>
                        <span className="font-medium">
                          {data.citizenship === "foreign-national" ? "25-30%" : "20-25%"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Investment/Rental</span>
                      </div>
                    </div>
                  </div>
                )}

                {isSecondaryHomeEligible && (
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 text-lg font-medium">Secondary Home Loan Program</h3>
                    <p className="mb-2 text-sm">
                      Secondary home loans are designed for properties that you will occupy part-time as a vacation or
                      second home.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Eligibility:</span>
                        <span className="font-medium text-green-600">Eligible</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Down Payment Requirement:</span>
                        <span className="font-medium">{data.citizenship === "foreign-national" ? "25%" : "20%"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Secondary/Vacation Home</span>
                      </div>
                    </div>
                  </div>
                )}

                {!isDSCREligible && !isSecondaryHomeEligible && (
                  <div className="rounded-lg border bg-red-50 p-4">
                    <h3 className="mb-2 text-lg font-medium text-red-700">Limited Program Options</h3>
                    <p className="text-red-700">
                      Based on your current information, you may have limited mortgage program options. We recommend
                      scheduling a consultation with a loan officer to discuss alternative solutions.
                    </p>
                  </div>
                )}

                <div className="rounded-lg border bg-muted p-4">
                  <h3 className="mb-2 text-lg font-medium">Next Steps</h3>
                  <p className="mb-4 text-sm">
                    Schedule a consultation with a loan officer who specializes in mortgages for foreign nationals and
                    US expats to discuss your options in detail.
                  </p>
                  <Button asChild>
                    <Link href="/assessment/book">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild>
              <Link href="/assessment/book">Schedule Consultation</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

