import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { ConnectSection } from '@/components/ConnectSection'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <ConnectSection />
    </>
  )
}
