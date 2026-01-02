import { Button } from "@/components/ui/button"
import Image from "next/image"

export function StemCellSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-none">
          <div className="absolute inset-0">
            <Image
              src="/images/c1475cb763e0ec052c4b88b7bc4d5fbdfa9805b5.jpeg"
              alt="Stem Cell Solution"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-cyan-500/80 to-blue-700/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Stem-Cell Solution</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">줄기세포 기반의 혁신적인 솔루션</p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
