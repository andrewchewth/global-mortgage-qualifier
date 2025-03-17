"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FinancialPage() {
  const router = useRouter()
  const [purchasePrice, setPurchasePrice] = useState("")
  const [availableFunds, setAvailableFunds] = useState("")
  const [isValid, setIsValid] = useState(false)

  const handlePurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setPurchasePrice(value)
    validateForm(value, availableFunds)
  }

  const handleAvailableFundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setAvailableFunds(value)
    validateForm(purchasePrice, value)
  }

  const validateForm = (price: string, funds: string) => {
    setIsValid(price.length > 0 && funds.length > 0)
  }

  const formatCurrency = (value: string) => {
    if (!value) return ""
    return `$${Number.parseInt(value).toLocaleString()}`
  }

  const handleContinue = () => {
    if (isValid) {
      localStorage.setItem("purchasePrice", purchasePrice)
      localStorage.setItem("availableFunds", availableFunds)
      router.push("/assessment/results")
    }
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <Link href="/assessment/income" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>
        <Progress value={80} className="mb-4" />
        <p className="mb-2 text-sm text-muted-foreground">Step 4 of 5</p>
        <Card>
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
            <CardDescription>
              Please provide information about your planned purchase and available funds.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="purchase-price">Estimated Purchase Price</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="purchase-price"
                  placeholder="500,000"
                  className="pl-7"
                  value={purchasePrice}
                  onChange={handlePurchasePriceChange}
                />
              </div>
              <p className="text-xs text-muted-foreground">Enter the estimated price of the property you want to buy</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="available-funds">Available Funds</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="available-funds"
                  placeholder="150,000"
                  className="pl-7"
                  value={availableFunds}
                  onChange={handleAvailableFundsChange}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Enter the total amount of funds you have available for down payment and reserves
              </p>
            </div>
            {purchasePrice && availableFunds && (
              <div className="rounded-lg border bg-muted p-4">
                <h3 className="mb-2 font-medium">Preliminary Calculation:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Purchase Price:</span>
                    <span className="font-medium">{formatCurrency(purchasePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Funds:</span>
                    <span className="font-medium">{formatCurrency(availableFunds)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Funds as % of Purchase:</span>
                    <span className="font-medium">
                      {((Number.parseInt(availableFunds) / Number.parseInt(purchasePrice)) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/assessment/income">Back</Link>
            </Button>
            <Button onClick={handleContinue} disabled={!isValid}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

