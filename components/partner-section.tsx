"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const countries = [
  {
    name: "Country 1",
    description:
      "글로벌 바이오 제약 파트너십을 통해 혁신적인 솔루션을 제공하고 있으며, 지속 가능한 헬스케어 발전에 기여하고 있습니다.",
  },
  {
    name: "Country 2",
    description: "Strategic partnerships across multiple regions",
  },
  {
    name: "Country 3",
    description: "International collaboration network",
  },
]

const locations = [
  { name: "ABC", color: "bg-accent", left: "20%", top: "40%" },
  { name: "Pfizer", color: "bg-blue-600", left: "50%", top: "30%" },
  { name: "EFAs", color: "bg-emerald-500", left: "75%", top: "50%" },
]

export function PartnerSection() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>("Country 1")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Partner</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative">
            <img src="/world-map-gray-continents.jpg" alt="World Map" className="w-full h-auto opacity-30" />
            {/* Location markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className={`absolute w-3 h-3 ${location.color} rounded-full`}
                style={{ left: location.left, top: location.top }}
              />
            ))}

            {/* Legend */}
            <div className="flex items-center gap-6 mt-6">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${location.color} rounded-full`} />
                  <span className="text-sm text-muted-foreground">{location.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Country List */}
          <div className="space-y-3">
            {countries.map((country) => (
              <div key={country.name} className="bg-white rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setExpandedCountry(expandedCountry === country.name ? null : country.name)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted transition-colors"
                >
                  <span className="font-medium text-foreground text-lg">{country.name}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedCountry === country.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedCountry === country.name && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{country.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
