import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { CVData } from '@/models/cv'

export async function POST(req: Request) {
  const { jobDescription } = await req.json()

  try {
    // Read the master CV from a JSON file
    const masterCVPath = path.join(process.cwd(), 'data', 'mock-cv.json')
    const masterCVRaw = fs.readFileSync(masterCVPath, 'utf8')
    const masterCV: CVData = JSON.parse(masterCVRaw)

    return NextResponse.json(masterCV)
  } catch (error) {
    console.error('Error fetching CV data:', error)
    return NextResponse.json({ error: 'Failed to fetch CV data' }, { status: 500 })
  }
}
