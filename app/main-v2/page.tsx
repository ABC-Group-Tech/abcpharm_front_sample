import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlatformSection } from "@/components/platform-section"
import { RDSection } from "@/components/rd-section"
import { StemCellSection } from "@/components/stem-cell-section"
import { EquipmentSection } from "@/components/equipment-section"
import { PartnerSection } from "@/components/partner-section"
import { PartnerLogosSection } from "@/components/partner-logos-section"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PlatformSection />
        <RDSection />
        <StemCellSection />
        <EquipmentSection />
        <PartnerSection />
        <PartnerLogosSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
