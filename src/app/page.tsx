import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
    </div>
  )
}