'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import CV from './cv'
import { CVData, CVDataSchema } from '../models/cv'
import masterCV from '../data/mock-cv.json' 

export function CVGenerator() {
  const [jobDescription, setJobDescription] = useState('')
  const [generatedCV, setGeneratedCV] = useState<CVData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/generate-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobDescription, masterCV }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate CV')
      }

      const data = await response.json()

      // Validate the data
      const parsedData = CVDataSchema.parse(data)
      setGeneratedCV(parsedData)
    } catch (error) {
      console.error('Error generating CV:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter the job description here..."
          className="h-32"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate CV'}
        </Button>
      </form>
      {generatedCV && (
        <Card className="p-4">
          <CV data={generatedCV} />
        </Card>
      )}
    </div>
  )
}
