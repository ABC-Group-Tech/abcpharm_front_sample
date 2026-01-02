import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MainV2Page() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/8775a9e353f2a15242b14c25dde7541763e11ca3.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm md:text-base mb-2 text-white/90">융합 기술, 개방형 R&D 전략을 통한</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Total Bio Solution</h1>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            Read More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl ml-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">글로벌 의약바이오 통합 기업</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ABC PHARM은 글로벌 최첨단 의약바이오 신약 개발에 특화된 플랫폼을 통한 제품들을 글로벌 시장으로
                진입하고자 합니다.
              </p>
              <p>
                우리는 혁신적이며 차별화 기술과 경쟁력있는 의약품 연구 개발로 세계적인 생명과학을 업계를 선도해
                나갑니다.
              </p>
              <p>또 세계 각국의 신뢰를 확보하여 지속적으로 초우량 품질로 경쟁력을 확보하고자 합니다.</p>
            </div>
            <Button className="mt-8 bg-accent hover:bg-accent/90">회사소개 바로가기</Button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="relative py-20 min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/29eefc757fa9138559cb4594b1e4e8765525c862.jpeg"
            alt="Platform Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container px-4 relative z-10 mx-auto ml-auto">
          <div className="max-w-2xl text-white ml-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">바이오 플랫폼</h3>
            <p className="leading-relaxed mb-6 text-white/90">
              ABC PHARM의 바이오플랫폼은 당사 혁신 테라피를 위해 전념 중입니다. 이는 신약개발 전문
              지식(Biopharmaceuticals, Biosimilar, Generic, OTC, 기능성 원료 생산) 의료 기기(진단검사기술) 부문을
              확대하여 지속적으로 새로운 가치를 제공합니다.
            </p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl ml-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">R&D</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-12">산학 협력 연구</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-48">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="3" />
                      <text x="50" y="35" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
                        KOREA
                      </text>
                      <text x="50" y="65" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
                        UNIVERSITY
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-48">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">SOULTECH</div>
                  <div className="text-sm text-muted-foreground">Technology Partner</div>
                </div>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90">자세히 보기</Button>
          </div>
        </div>
      </section>

      {/* Stem Cell Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12 ml-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Stem Cell Solution</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>ABC PHARM은 혈액, 골수나, 연수조직 등의 현재로 줄기세포를 개발 저장 시켜 수 있는 시설입니다.</p>
              <p>
                저희 줄기세포 생산 시스템, 표준도를 개발, 진정 조혈줄기세포 제조공정을 고품질을 인증받은 공장시설로 네이
                경쟁을 수십만명납니다.
              </p>
              <p>도성의 현재 제조설비에는 대옥조로 자연해하여 대량의 근조를 수취관품 생산에 생산하나다.</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/6265e2ed5330d59cef1b1e4869e8d033b8296e4e.png"
                alt="Stem Cell Research"
                fill
                className="object-cover mx-0 ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/6a5ebdb55032dfdc02316c844618d089989369bb.jpeg"
            alt="Mission Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white ml-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ABC PHARM는 신약 개발의 패러다임을 선도하고 있습니다.
            </h3>
            <p className="text-lg mb-8 text-white/90">
              업계와 산학 산업의 새로운 기준은 지속가능한 의약 생태계를 만드는 것입니다.
            </p>
            <Button className="bg-accent hover:bg-accent/90">문의하기</Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-2">주요 소식</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">News and Updates</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/29eefc757fa9138559cb4594b1e4e8765525c862.jpeg"
                  alt="News 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">최신 성과</p>
                <h3 className="font-bold mb-2">바이오 신약 개발 FDA 승인 진행 중입니다</h3>
                <p className="text-sm text-muted-foreground">
                  당사 신약 후보물질이 임상시험에 진입했으며 추후 판매허가 요청 단계로...
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/c1475cb763e0ec052c4b88b7bc4d5fbdfa9805b5.jpeg"
                  alt="News 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">최신 성과</p>
                <h3 className="font-bold mb-2">바이오 신약 개발 FDA 승인 진행 중입니다</h3>
                <p className="text-sm text-muted-foreground">
                  당사 신약 후보물질이 임상시험에 진입했으며 추후 판매허가 요청 단계로...
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/6a5ebdb55032dfdc02316c844618d089989369bb.jpeg"
                  alt="News 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">최신 성과</p>
                <h3 className="font-bold mb-2">바이오 신약 개발 FDA 승인 진행 중입니다</h3>
                <p className="text-sm text-muted-foreground">
                  당사 신약 후보물질이 임상시험에 진입했으며 추후 판매허가 요청 단계로...
                </p>
              </div>
            </div>
          </div>
          <Button className="bg-accent hover:bg-accent/90">View More</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
