import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { FeaturedProjects } from '@/components/FeaturedProjects'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
    </>
  )
}
