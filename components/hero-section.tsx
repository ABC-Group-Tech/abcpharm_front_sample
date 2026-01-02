import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[650px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/8775a9e353f2a15242b14c25dde7541763e11ca3.png"
          alt="Neural Network Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-blue-600/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">Total Bio Solution</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 text-left">바이오 분야, 기술과 비전을 선도합니다</p>
        <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-10 py-6 text-lg">
          Read More
        </Button>
      </div>
    </section>
  )
}
