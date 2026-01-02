export function PartnerLogosSection() {
  const partners = [
    { name: "Pfizer", width: 120 },
    { name: "HALEON", width: 130 },
    { name: "reddIT", width: 110 },
    { name: "ORIENTIAL", width: 140 },
    { name: "Partner 5", width: 100 },
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">ABC PHARM PARTER</h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center" style={{ width: `${partner.width}px` }}>
              <img
                src={`/ceholder-svg-height-60-width-.jpg?height=60&width=${partner.width}&query=${partner.name} logo white`}
                alt={`${partner.name} logo`}
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
