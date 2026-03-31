"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySection } from "@/components/why-section"
import { WhoSection } from "@/components/who-section"
import { HowItWorks } from "@/components/how-it-works"
import { BenefitsSection } from "@/components/benefits-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <WhoSection />
        <HowItWorks />
        <BenefitsSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
