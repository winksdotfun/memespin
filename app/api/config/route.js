import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get('https://memespin.io/config.js')
    // Extract the REFERRAL value using regex
    const match = response.data.match(/REFERRAL:\s*'([^']*)'/)
    const referral = match ? match[1] : null
    
    return NextResponse.json({ REFERRAL: referral })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
} 