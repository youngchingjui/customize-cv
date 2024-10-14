import { NextResponse } from 'next/server'
import fs from 'fs/promises'
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

  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API key is missing');
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }

  try {
    const masterCVPath = path.join(process.cwd(), 'data', 'mock-cv.json')
    const masterCVRaw = await fs.readFile(masterCVPath, 'utf8')
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

    const generatedCVText = completion.choices?.[0]?.message?.content;

    if (!generatedCVText) {
      console.error('No content in the generated CV');
      throw new Error('Failed to generate CV text');
    }

    // Parse the generated text into a CVData object
    const generatedCV = CVDataSchema.parse(JSON.parse(generatedCVText))

    return NextResponse.json(generatedCV)
  } catch (error) {
    console.error('Error generating CV:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Failed to generate CV' }, { status: 500 })
  }
}
