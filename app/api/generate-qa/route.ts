import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import { NextResponse } from 'next/server'

if (!process.env.GOOGLE_AI_KEY) {
  throw new Error('GOOGLE_AI_KEY environment variable is not set')
}

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY)

export async function POST(req: Request) {
  try {
    const { clientInput } = await req.json()

    if (!clientInput) {
      return NextResponse.json(
        { error: 'Client input is required' },
        { status: 400 }
      )
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-latest",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    })

    // Create a prompt that explicitly requests JSON format
    const prompt = `Based on this client's situation, generate 3-4 key questions and answers about getting a mortgage as a foreign national or US expat.

Client situation: ${clientInput}

Format your response as a valid JSON array of objects, each with "question" and "answer" properties. Example format:
[
  {
    "question": "What documents do I need?",
    "answer": "The required documents include..."
  }
]

Keep answers clear and concise, under 150 words each. Focus on practical, actionable information.`

    // Generate content
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    try {
      // Try to parse the response as JSON
      let questions
      try {
        questions = JSON.parse(text)
      } catch {
        // If direct parsing fails, try to extract JSON from the response
        const jsonMatch = text.match(/\[[\s\S]*\]/)
        if (jsonMatch) {
          questions = JSON.parse(jsonMatch[0])
        } else {
          throw new Error('Could not parse response as JSON')
        }
      }

      // Validate the response structure
      if (!Array.isArray(questions)) {
        throw new Error('Response is not an array')
      }

      const validatedQuestions = questions.map((q: any) => {
        if (!q.question || !q.answer || 
            typeof q.question !== 'string' || 
            typeof q.answer !== 'string') {
          throw new Error('Invalid question/answer format')
        }
        return {
          question: q.question.trim(),
          answer: q.answer.trim()
        }
      })

      return NextResponse.json({ 
        success: true,
        questions: validatedQuestions 
      })

    } catch (parseError: any) {
      console.error('Parse error:', parseError, 'Raw response:', text)
      return NextResponse.json(
        { error: 'Failed to process the AI response. Please try again.' },
        { status: 500 }
      )
    }

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate Q&A. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
} 