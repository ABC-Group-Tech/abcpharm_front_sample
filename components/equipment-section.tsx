import Image from "next/image"

export function EquipmentSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/28ae8ec86deba6eea973db7a7b1e4358d7e02218.jpeg"
              alt="Laboratory Equipment"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
