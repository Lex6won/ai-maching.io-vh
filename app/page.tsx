import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Users, Zap, Target, Search, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const stats = [
    { label: "등록된 AI 기업", value: "150+", icon: Building2 },
    { label: "공공기관 파트너", value: "80+", icon: Users },
    { label: "성공 매칭", value: "200+", icon: Target },
    { label: "활성 프로젝트", value: "45", icon: Zap },
  ]

  const features = [
    {
      title: "AI 기업 발굴",
      description: "국내 우수 AI 기술 기업들의 솔루션과 서비스를 한눈에 확인하세요",
      icon: Search,
    },
    {
      title: "수요 매칭",
      description: "공공기관의 디지털 전환 수요와 AI 기업의 기술을 정확히 매칭합니다",
      icon: Target,
    },
    {
      title: "직접 소통",
      description: "플랫폼 내에서 기업과 기관이 직접 소통하고 협력할 수 있습니다",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI 매칭 플랫폼</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/companies" className="text-gray-600 hover:text-gray-900 transition-colors">
                AI 기업
              </Link>
              <Link href="/demands" className="text-gray-600 hover:text-gray-900 transition-colors">
                공공수요
              </Link>
              <Link href="/matching" className="text-gray-600 hover:text-gray-900 transition-colors">
                매칭
              </Link>
              <Button variant="outline" className="bg-white text-gray-900">
                로그인
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">회원가입</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">🚀 한국 AI 생태계 연결 플랫폼</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI 기술과 공공수요를
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              스마트하게 연결
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            국내 AI 기술 기업의 혁신적인 솔루션과 공공기관의 디지털 전환 수요를 정확하게 매칭하여 상생의 생태계를
            만들어갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/companies">
                AI 기업 둘러보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-gray-900" asChild>
              <Link href="/demands">공공수요 확인하기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">플랫폼 주요 기능</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI 기업과 공공기관을 위한 맞춤형 매칭 서비스를 제공합니다
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            AI 기업이든 공공기관이든, 우리 플랫폼에서 최적의 파트너를 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              AI 기업 등록하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              수요 등록하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI 매칭 플랫폼</span>
              </div>
              <p className="text-gray-400">한국 AI 생태계의 성장을 위한 연결 플랫폼</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/companies" className="hover:text-white transition-colors">
                    AI 기업
                  </Link>
                </li>
                <li>
                  <Link href="/demands" className="hover:text-white transition-colors">
                    공공수요
                  </Link>
                </li>
                <li>
                  <Link href="/matching" className="hover:text-white transition-colors">
                    매칭
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    고객센터
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    이용가이드
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    회사소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    이용약관
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI 매칭 플랫폼. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
