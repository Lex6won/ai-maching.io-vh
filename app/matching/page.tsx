import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Target, TrendingUp, Users, CheckCircle, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function MatchingPage() {
  const matchingStats = [
    { label: "총 매칭 건수", value: "247", icon: Target, color: "text-blue-600" },
    { label: "성공률", value: "89%", icon: TrendingUp, color: "text-green-600" },
    { label: "활성 매칭", value: "45", icon: Clock, color: "text-orange-600" },
    { label: "참여 기업", value: "150+", icon: Users, color: "text-purple-600" },
  ]

  const recentMatches = [
    {
      id: 1,
      company: "네이버 클라우드 플랫폼",
      demand: "시민 민원 자동 분류 AI 시스템",
      organization: "서울특별시청",
      matchScore: 95,
      status: "매칭 완료",
      date: "2024.09.20",
    },
    {
      id: 2,
      company: "루닛",
      demand: "의료진 업무 효율화 AI 어시스턴트",
      organization: "경기도 의료원",
      matchScore: 92,
      status: "협상 중",
      date: "2024.09.18",
    },
    {
      id: 3,
      company: "업스테이지",
      demand: "공문서 자동 처리 시스템",
      organization: "부산광역시청",
      matchScore: 88,
      status: "검토 중",
      date: "2024.09.15",
    },
  ]

  const topMatches = [
    {
      company: "마키나락스",
      companyTags: ["제조AI", "예측분석", "최적화"],
      demand: "스마트 팩토리 구축 사업",
      organization: "경상북도 구미시",
      demandTags: ["제조혁신", "자동화", "품질관리"],
      matchScore: 96,
      budget: "8억원",
      compatibility: [
        { category: "기술 적합성", score: 98 },
        { category: "경험 및 실적", score: 95 },
        { category: "지역 접근성", score: 92 },
        { category: "예산 적정성", score: 98 },
      ],
    },
    {
      company: "스켈터랩스",
      companyTags: ["대화AI", "챗봇", "음성인식"],
      demand: "시민 상담 챗봇 서비스",
      organization: "대구광역시청",
      demandTags: ["시민서비스", "24시간상담", "다국어지원"],
      matchScore: 94,
      budget: "3억원",
      compatibility: [
        { category: "기술 적합성", score: 96 },
        { category: "경험 및 실적", score: 93 },
        { category: "지역 접근성", score: 89 },
        { category: "예산 적정성", score: 97 },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "매칭 완료":
        return "text-green-600 bg-green-100"
      case "협상 중":
        return "text-blue-600 bg-blue-100"
      case "검토 중":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "매칭 완료":
        return CheckCircle
      case "협상 중":
        return Clock
      case "검토 중":
        return AlertCircle
      default:
        return Clock
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
              <Link href="/demands" className="text-gray-600 hover:text-gray-900 transition-colors">
                공공수요
              </Link>
              <Link href="/matching" className="text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 매칭 센터</h1>
          <p className="text-gray-600">AI 기업과 공공기관의 최적 매칭을 지원합니다</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {matchingStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommendations">추천 매칭</TabsTrigger>
            <TabsTrigger value="recent">최근 매칭</TabsTrigger>
            <TabsTrigger value="analytics">매칭 분석</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">AI 추천 매칭</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">새로운 매칭 요청</Button>
            </div>

            <div className="space-y-6">
              {topMatches.map((match, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-lg">{match.company}</CardTitle>
                          <Badge className="bg-blue-100 text-blue-800">매칭도 {match.matchScore}%</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {match.companyTags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600">{match.budget}</div>
                        <div className="text-sm text-gray-500">예산</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">{match.demand}</h4>
                        <p className="text-sm text-gray-600 mb-2">{match.organization}</p>
                        <div className="flex flex-wrap gap-2">
                          {match.demandTags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">매칭 분석</h4>
                        {match.compatibility.map((item, itemIndex) => (
                          <div key={itemIndex} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">{item.category}</span>
                              <span className="font-medium">{item.score}%</span>
                            </div>
                            <Progress value={item.score} className="h-2" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end space-x-2 pt-4 border-t">
                        <Button variant="outline" className="bg-white text-gray-900">
                          상세 분석
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">매칭 진행</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">최근 매칭 현황</h2>

            <div className="space-y-4">
              {recentMatches.map((match) => {
                const StatusIcon = getStatusIcon(match.status)
                return (
                  <Card key={match.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900">{match.company}</h3>
                            <Badge className={getStatusColor(match.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {match.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-1">{match.demand}</p>
                          <p className="text-sm text-gray-500">{match.organization}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-blue-600 mb-1">{match.matchScore}%</div>
                          <div className="text-sm text-gray-500">{match.date}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">매칭 분석 대시보드</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>분야별 매칭 현황</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { field: "자연어처리", matches: 45, percentage: 85 },
                      { field: "컴퓨터비전", matches: 38, percentage: 78 },
                      { field: "의료AI", matches: 32, percentage: 92 },
                      { field: "제조AI", matches: 28, percentage: 88 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.field}</span>
                          <span className="text-gray-600">
                            {item.matches}건 ({item.percentage}%)
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>지역별 매칭 분포</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { region: "서울특별시", matches: 68, percentage: 90 },
                      { region: "경기도", matches: 52, percentage: 85 },
                      { region: "부산광역시", matches: 34, percentage: 80 },
                      { region: "대구광역시", matches: 28, percentage: 75 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.region}</span>
                          <span className="text-gray-600">{item.matches}건</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
