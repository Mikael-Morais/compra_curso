import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesCarousel } from "@/components/courses-carousel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CoursesCarousel />
      </main>
      <Footer />
    </>
  )
}
