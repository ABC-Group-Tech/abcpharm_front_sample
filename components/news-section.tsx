import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const newsItems = [
  {
    image: "/images/29eefc757fa9138559cb4594b1e4e8765525c862.jpeg",
    title: "바이오 신기술 개발 성공 소식",
    description: "최첨단 바이오 기술을 통한 신약 개발 과정에 대한 최신 연구 결과를 발표했습니다",
  },
  {
    image: "/images/8775a9e353f2a15242b14c25dde7541763e11ca3.png",
    title: "바이오 정보학 플랫폼 출시 안내",
    description: "AI 기반의 혁신적인 바이오 데이터 분석 플랫폼을 새롭게 선보입니다",
  },
  {
    image: "/images/6a5ebdb55032dfdc02316c844618d089989369bb.jpeg",
    title: "글로벌 임상 시험 시작 보도자료",
    description: "새로운 치료제 개발을 위한 국제 공동 임상 연구가 본격적으로 시작됩니다",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-20">News and Updates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-16">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-56 bg-muted">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}
