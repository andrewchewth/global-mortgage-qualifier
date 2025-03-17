'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, AlertCircle } from "lucide-react"

interface Question {
  question: string
  answer: string
}

export function AIAssistant() {
  const [clientInput, setClientInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!clientInput.trim()) {
      setError('Please enter your situation first')
      return
    }

    setIsLoading(true)
    setError(null)
    setQuestions([])

    try {
      const response = await fetch('/api/generate-qa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientInput: clientInput.trim() }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        console.error('API Error:', data)
        throw new Error(data.error || 'Failed to generate Q&A')
      }
      
      if (!data.success || !data.questions || !Array.isArray(data.questions)) {
        console.error('Invalid API response:', data)
        throw new Error('Received invalid response format from server')
      }
      
      setQuestions(data.questions)
    } catch (error: any) {
      console.error('Error generating Q&A:', error)
      setError(error.message || 'Failed to generate Q&A. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">AI Mortgage Assistant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Tell us about your situation (citizenship, employment, property interests, etc.)
            </label>
            <Textarea
              placeholder="I'm a foreign national working in tech, currently living in Singapore. I'm interested in buying a vacation home in California..."
              value={clientInput}
              onChange={(e) => setClientInput(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <Button 
            onClick={handleSubmit}
            disabled={isLoading || !clientInput.trim()}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Answers...
              </>
            ) : (
              'Get Personalized Answers'
            )}
          </Button>
          {error && (
            <div className="flex items-center gap-2 text-destructive mt-2">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {questions.length > 0 && (
        <div className="space-y-4">
          {questions.map((qa, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle className="text-lg text-secondary">{qa.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-wrap">{qa.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 