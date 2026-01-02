import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <>
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-8 max-w-3xl">
              <Link href="#about" className="text-sm text-white hover:text-accent transition-colors">
                About
              </Link>
              <Link href="#platform" className="text-sm text-white hover:text-accent transition-colors">
                Platform
              </Link>
              <Link href="#rd" className="text-sm text-white hover:text-accent transition-colors">
                R&D
              </Link>
              <Link href="#solutions" className="text-sm text-white hover:text-accent transition-colors">
                Solutions
              </Link>
              <Link href="#news" className="text-sm text-white hover:text-accent transition-colors">
                News
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#1a2332] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex flex-col items-start text-left max-w-3xl">
              <div className="mb-6">
                <Image
                  src="/images/827e493ebc831a4e34c3520d05058c4b4c07552b.png"
                  alt="ABC PHARM"
                  width={200}
                  height={50}
                />
              </div>

              <div className="flex flex-col items-start text-left text-sm text-white/60 space-y-1 w-full">
                <p>
                  주식회사 에이비씨팜 | 대표이사 김철수 | 사업자등록번호 123-45-67890 | 서울특별시 강남구 테헤란로 123길
                  45 에이비씨빌딩 8층
                </p>
                <p>
                  전화: 02-1234-5678 | 팩스: 02-1234-5679 | 이메일: info@abcpharm.com | 개인정보처리방침 | 이용약관 |
                  사이트맵
                </p>
                <p className="pt-2">© 2025 ABC PHARM. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
