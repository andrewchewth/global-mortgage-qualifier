import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    // Test Supabase connection
    const { error: testError } = await supabaseAdmin
      .from('contacts')
      .select('count')
      .limit(1)

    if (testError) {
      console.error('Supabase connection test failed:', testError)
      throw new Error('Database connection failed: ' + testError.message)
    }

    console.log('Supabase connection test successful')

    const { name, phone, email } = await req.json()

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 }
      )
    }

    console.log('Attempting to insert contact:', { name, phone, email })

    // Insert into database using Supabase
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert([
        { name, phone_number: phone, email }
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    console.log('Successfully inserted contact:', data)

    return NextResponse.json({ 
      success: true,
      data
    })
  } catch (error: any) {
    console.error('Detailed error:', {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
      stack: error.stack
    })
    
    return NextResponse.json(
      { error: error.message || 'Failed to save contact information' },
      { status: 500 }
    )
  }
} 