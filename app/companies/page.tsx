import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, MapPin, Users, Star, Search } from "lucide-react"
import Link from "next/link"

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "네이버 클라우드 플랫폼",
      description: "클라우드 기반 AI 서비스 및 솔루션 제공",
      location: "경기도 성남시",
      employees: "500+",
      rating: 4.8,
      tags: ["자연어처리", "컴퓨터비전", "클라우드AI"],
      projects: 45,
      established: "2017",
    },
    {
      id: 2,
      name: "루닛",
      description: "의료 AI 진단 솔루션 전문 기업",
      location: "서울특별시 강남구",
      employees: "200+",
      rating: 4.9,
      tags: ["의료AI", "영상진단", "딥러닝"],
      projects: 28,
      established: "2013",
    },
    {
      id: 3,
      name: "업스테이지",
      description: "문서 AI 및 OCR 솔루션 개발",
      location: "서울특별시 강남구",
      employees: "150+",
      rating: 4.7,
      tags: ["문서AI", "OCR", "자동화"],
      projects: 32,
      established: "2020",
    },
    {
      id: 4,
      name: "마키나락스",
      description: "제조업 특화 AI 솔루션",
      location: "서울특별시 성동구",
      employees: "100+",
      rating: 4.6,
      tags: ["제조AI", "예측분석", "최적화"],
      projects: 22,
      established: "2018",
    },
    {
      id: 5,
      name: "스켈터랩스",
      description: "대화형 AI 및 챗봇 솔루션",
      location: "서울특별시 강남구",
      employees: "80+",
      rating: 4.5,
      tags: ["대화AI", "챗봇", "음성인식"],
      projects: 35,
      established: "2015",
    },
    {
      id: 6,
      name: "딥노이드",
      description: "의료 영상 AI 분석 솔루션",
      location: "서울특별시 서초구",
      employees: "60+",
      rating: 4.8,
      tags: ["의료AI", "영상분석", "진단보조"],
      projects: 18,
      established: "2016",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI 매칭 플랫폼</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/companies" className="text-blue-600 font-medium">
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
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 기업 목록</h1>
          <p className="text-gray-600">국내 우수 AI 기술 기업들을 만나보세요</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input placeholder="기업명, 기술 분야로 검색..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="지역 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seoul">서울특별시</SelectItem>
                <SelectItem value="gyeonggi">경기도</SelectItem>
                <SelectItem value="busan">부산광역시</SelectItem>
                <SelectItem value="daegu">대구광역시</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="기술 분야" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nlp">자연어처리</SelectItem>
                <SelectItem value="cv">컴퓨터비전</SelectItem>
                <SelectItem value="medical">의료AI</SelectItem>
                <SelectItem value="manufacturing">제조AI</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{company.name}</CardTitle>
                    <CardDescription className="text-sm">{company.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-yellow-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{company.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{company.employees}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-blue-600">{company.projects}</span>개 프로젝트
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      상세보기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white text-gray-900">
            더 많은 기업 보기
          </Button>
        </div>
      </div>
    </div>
  )
}
