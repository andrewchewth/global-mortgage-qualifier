import { NextResponse } from 'next/server'

export async function POST() {
  try {
    // First, try to create a test record
    const response = await fetch('https://xgtvbpyxpnvmmpmkwhxg.supabase.co/rest/v1/contacts', {
      method: 'POST',
      headers: {
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name: 'test',
        phone_number: 'test',
        email: 'test@test.com'
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Error details:', error)
      
      // If the table doesn't exist, we need to create it through the Supabase dashboard
      if (error.message?.includes('relation "contacts" does not exist')) {
        return NextResponse.json({
          error: 'Table does not exist. Please create the table in Supabase dashboard with this SQL:\n\nCREATE TABLE IF NOT EXISTS contacts (\n  id BIGSERIAL PRIMARY KEY,\n  name VARCHAR(255) NOT NULL,\n  phone_number VARCHAR(50) NOT NULL,\n  email VARCHAR(255) NOT NULL,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);',
          sql: `CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);`
        }, { status: 500 })
      }
      throw new Error(error.message || 'Failed to create table')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Database table created successfully'
    })
  } catch (error: any) {
    console.error('Setup error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to setup database' },
      { status: 500 }
    )
  }
} 