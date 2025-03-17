import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test the connection
    const { data, error } = await supabase
      .from('contacts')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Supabase connection error:', error)
      return NextResponse.json({
        status: 'error',
        message: error.message,
        details: error.details,
        hint: error.hint
      }, { status: 500 })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Successfully connected to Supabase',
      data
    })
  } catch (error: any) {
    console.error('Connection test error:', error)
    return NextResponse.json({
      status: 'error',
      message: error.message
    }, { status: 500 })
  }
} 