import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PlatformSection() {
  return (
    <section id="platform" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-20">Platform</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center group">
            <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
              <Image
                src="/images/78e4a1627f23aa7cf2c551031304d67e25bcd98a.jpeg"
                alt="DNA Platform"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden bg-white">
              <Image
                src="/images/94a05052f49ad499fc3501bc24d0d9ad10e8ffcd.png"
                alt="Data Platform"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
              <Image
                src="/images/78e4a1627f23aa7cf2c551031304d67e25bcd98a.jpeg"
                alt="Cell Platform"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
