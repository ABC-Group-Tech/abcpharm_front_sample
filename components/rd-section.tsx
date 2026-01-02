import { Button } from "@/components/ui/button"
import { Microscope, Shield } from "lucide-react"
import Image from "next/image"

export function RDSection() {
  return (
    <section id="rd" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/29eefc757fa9138559cb4594b1e4e8765525c862.jpeg"
          alt="R&D Laboratory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">R&D</h2>
            <p className="text-xl text-white/80 mb-8">연구 개발 및 혁신</p>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Read More
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center gap-16">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Microscope className="w-12 h-12 text-white" />
              </div>
              <span className="text-white text-sm font-medium">Research</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <span className="text-white text-sm font-medium">Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
