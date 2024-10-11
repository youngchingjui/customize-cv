import { CVGenerator } from '@/components/cv-generator'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CV Generator</h1>
      <CVGenerator />
    </main>
  )
}