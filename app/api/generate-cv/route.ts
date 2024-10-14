import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { CVData, CVDataSchema } from '@/models/cv'
import { zodResponseFormat } from 'openai/helpers/zod.mjs'
import OpenAI from 'openai'

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { jobDescription } = await req.json()

  try {
    // Read the master CV from a JSON file
    const masterCVPath = path.join(process.cwd(), 'data', 'mock-cv.json')
    const masterCVRaw = fs.readFileSync(masterCVPath, 'utf8')
    const masterCV: CVData = JSON.parse(masterCVRaw)

    // Call OpenAI API to generate a customized CV
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-2024-08-06',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates a customized CV based on a given job description and a master CV template.',
        },
        {
          role: 'user',
          content: `Based on the following job description, customize the CV: ${jobDescription}\n\nMaster CV:\n${JSON.stringify(masterCV, null, 2)}`,
        },
      ],
      max_tokens: 1500,
      temperature: 0,
      response_format: zodResponseFormat(CVDataSchema, 'CV'),
    });

    const generatedCVText = completion.choices[0].message.content

    if (!generatedCVText) {
      throw new Error('Failed to generate CV text');
    }

    // Parse the generated text into a CVData object
    const generatedCV = CVDataSchema.parse(JSON.parse(generatedCVText))

    return NextResponse.json(generatedCV)
  } catch (error) {
    console.error('Error generating CV:', error)
    return NextResponse.json({ error: 'Failed to generate CV' }, { status: 500 })
  }
}
