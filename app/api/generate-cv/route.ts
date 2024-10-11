import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// This is a mock function to simulate LLM processing
// In a real application, you would integrate with an actual LLM API
function mockLLMProcessing(jobDescription: string, masterCV: any): string {
  // Simple logic to demonstrate customization
  const relevantSkills = masterCV.skills.filter((skill: string) =>
    jobDescription.toLowerCase().includes(skill.toLowerCase())
  )

  return `
Customized CV for the job:

${masterCV.name}
${masterCV.email}

Objective: To secure a position that aligns with the following job description:
${jobDescription}

Relevant Skills:
${relevantSkills.join(', ')}

Work Experience:
${masterCV.experience.map((exp: string) => `- ${exp}`).join('\n')}

Education:
${masterCV.education}
  `.trim()
}

export async function POST(req: Request) {
  const { jobDescription } = await req.json()

  // Read the master CV from a JSON file
  const masterCVPath = path.join(process.cwd(), 'data', 'master-cv.json')
  const masterCVRaw = fs.readFileSync(masterCVPath, 'utf8')
  const masterCV = JSON.parse(masterCVRaw)

  // Generate the customized CV
  const customizedCV = mockLLMProcessing(jobDescription, masterCV)

  return NextResponse.json({ cv: customizedCV })
}