import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Calendar, DollarSign, Clock, Search, MapPin } from "lucide-react"
import Link from "next/link"

export default function DemandsPage() {
  const demands = [
    {
      id: 1,
      title: "시민 민원 자동 분류 AI 시스템 구축",
      organization: "서울특별시청",
      location: "서울특별시",
      budget: "5억원",
      deadline: "2024.12.31",
      status: "진행중",
      description: "시민들의 다양한 민원을 자동으로 분류하고 담당 부서로 배정하는 AI 시스템 개발",
      requirements: ["자연어처리", "분류알고리즘", "웹시스템"],
      applicants: 12,
    },
    {
      id: 2,
      title: "교통 신호 최적화 AI 솔루션",
      organization: "부산광역시 교통공단",
      location: "부산광역시",
      budget: "3억원",
      deadline: "2024.11.15",
      status: "모집중",
      description: "실시간 교통 데이터를 분석하여 신호등 타이밍을 최적화하는 AI 시스템",
      requirements: ["교통데이터분석", "최적화알고리즘", "실시간처리"],
      applicants: 8,
    },
    {
      id: 3,
      title: "의료진 업무 효율화 AI 어시스턴트",
      organization: "경기도 의료원",
      location: "경기도 수원시",
      budget: "4억원",
      deadline: "2025.01.31",
      status: "모집중",
      description: "의료진의 진료 기록 작성 및 환자 관리를 지원하는 AI 어시스턴트 개발",
      requirements: ["의료AI", "음성인식", "자연어처리"],
      applicants: 15,
    },
    {
      id: 4,
      title: "스마트 시티 에너지 관리 시스템",
      organization: "대전광역시청",
      location: "대전광역시",
      budget: "6억원",
      deadline: "2024.10.30",
      status: "마감임박",
      description: "도시 전체의 에너지 사용량을 모니터링하고 최적화하는 AI 기반 관리 시스템",
      requirements: ["IoT연동", "예측분석", "에너지최적화"],
      applicants: 20,
    },
    {
      id: 5,
      title: "공공시설 안전 모니터링 AI",
      organization: "인천광역시 시설공단",
      location: "인천광역시",
      budget: "2.5억원",
      deadline: "2024.12.15",
      status: "모집중",
      description: "CCTV 영상을 분석하여 공공시설의 안전사고를 예방하는 AI 시스템",
      requirements: ["컴퓨터비전", "영상분석", "이상탐지"],
      applicants: 6,
    },
    {
      id: 6,
      title: "농업 생산성 향상 AI 플랫폼",
      organization: "전라남도청",
      location: "전라남도 무안군",
      budget: "3.5억원",
      deadline: "2025.02.28",
      status: "모집중",
      description: "농작물 생육 상태를 모니터링하고 최적의 재배 조건을 제안하는 AI 플랫폼",
      requirements: ["농업AI", "센서데이터", "예측모델링"],
      applicants: 9,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "모집중":
        return "bg-green-100 text-green-800"
      case "진행중":
        return "bg-blue-100 text-blue-800"
      case "마감임박":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
              <Link href="/companies" className="text-gray-600 hover:text-gray-900 transition-colors">
                AI 기업
              </Link>
              <Link href="/demands" className="text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">공공기관 AI 수요</h1>
          <p className="text-gray-600">공공기관과 지자체의 AI 솔루션 수요를 확인하세요</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input placeholder="프로젝트명, 기관명으로 검색..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="지역 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seoul">서울특별시</SelectItem>
                <SelectItem value="busan">부산광역시</SelectItem>
                <SelectItem value="gyeonggi">경기도</SelectItem>
                <SelectItem value="jeolla">전라남도</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="상태" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recruiting">모집중</SelectItem>
                <SelectItem value="ongoing">진행중</SelectItem>
                <SelectItem value="urgent">마감임박</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Demands Grid */}
        <div className="space-y-6">
          {demands.map((demand) => (
            <Card key={demand.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-xl">{demand.title}</CardTitle>
                      <Badge className={getStatusColor(demand.status)}>{demand.status}</Badge>
                    </div>
                    <CardDescription className="text-base mb-3">{demand.description}</CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4" />
                        <span>{demand.organization}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{demand.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {demand.requirements.map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-green-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-medium">예산: {demand.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-orange-600">
                      <Calendar className="w-4 h-4" />
                      <span>마감: {demand.deadline}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>{demand.applicants}개 기업 지원</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-gray-500">등록일: 2024.09.15</div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" className="bg-white text-gray-900">
                        북마크
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        지원하기
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white text-gray-900">
            더 많은 수요 보기
          </Button>
        </div>
      </div>
    </div>
  )
}
