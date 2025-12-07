"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { X, Plus, Upload, ChevronDown, LayoutGrid } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"

export function Projects() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "프로젝트",
    subtitle: "현장에서 도시의 문제를 읽고, 데이터로 실현 가능한 해답을 찾아갑니다.",
    initialDisplay: 6,
    loadMoreCount: 6,
    background: {"image":"","video":"","color":"#a4cf54","opacity":0.1},
    projects: [{"image":"/uploads/project-0-1765025162165.png","video":"","title":"2024 왕가탕후루 입지 분석","description":"[부동산입지] \n주야간 유동 인구 전수 조사와 공인중개사 인터뷰를 진행하며 임대료 대비 예상 수익률을 철저히 검증했습니다. 겉으로 보이는 수치보다 '실질 소비층의 접근성'과 '경쟁 업체의 밀도'가 입지 선정의 핵심임을 몸소 체험하며, 데이터와 현장을 연결하는 부동산 타당성 분석 안목을 길렀습니다."},{"image":"/uploads/project-1-1765107189855.png","video":"","title":"2024 성남시 교통섬 사고 예측 분석","description":"[스마트도시론] 공공 데이터를 활용한 성남시 교통섬 사고 현황을 지도에 시각화하고, 사고 다발 구역의 물리적 결함을  직접 진단했습니다. 이를 통해 차량 소통 중심의 도시 계획이 놓치고 있는 '보행자 안전'의 중요성을 재확인하며, 데이터를 공간 문제 해결로 연결하는 실무적 분석 역량을 쌓았습니다."},{"image":"/uploads/project-1765107204285-1765107204324.png","video":"","title":"2024 수도권 과밀화와 지방소멸 해결방안","description":"[도시계획] 수업에서 직접 타 대학 교수님과의 면담을 통해 문헌 연구를 넘어 전문가 심층 인터뷰와 청년 주거 인식 설문을 직접 수행하며, GTX(광역)와 DRT(지역)를 연계한 '융복합 모빌리티 허브' 전략을 제시했습니다. 교통망 확충은 문화·일자리와 결합될 때 비로소 도시의 경쟁력이 됨을 깨닫고, 거시적인 국토 균형 발전의 시각을 갖추게 되었습니다."},{"image":"/uploads/project-1765107347706-1765107347752.png","video":"","title":"2024 포항 흥해읍 도시재생 사례 분석","description":"[도시재생론]\n\n포항 지진 피해 지역인 흥해읍의 '특별재생계획'을 분석하며 단순한 시설 복구를 넘어 재난 예방과 공동체 회복이 도시재생의 본질임을 연구했습니다. 특히 전통시장 현대화 과정에서 발생한 갈등 사례와 해결 과정을 심층 분석하며, 물리적 정비뿐만 아니라 주민과의 소통과 거버넌스가 도시재생의 성패를 가르는 핵심 역량임을 배웠습니다."},{"image":"/uploads/project-1765107383478-1765107383515.png","video":"","title":"2024 뉴:홈 도입과 미래전망","description":"[주택론] 공공분양주택 뉴:홈의 유형별 금융 혜택을 분석하고 성수동 팝업 스토어를 직접 방문해 2030 세대 타겟 마케팅을 체험했습니다. 이를 통해 공공 주택이 단순 공급을 넘어 개인 맞춤형 라이프스타일을 지원하는 플랫폼으로 진화하고 있음을 파악하며, 수요자 중심의 주택 정책과 시장 흐름을 읽는 안목을 키웠습니다."},{"image":"/uploads/project-1765109085611-1765109085660.png","video":"","title":"2024 생활가로 조사","description":"[단지계획] 거주중인 청라국제도시 루비존을 답사하여 가로 폭 측정 및 시설물 전수 조사, 거주민 심층 인터뷰를 통해 정성적·정량적 데이터를 확보했습니다. 이를 통해 계획 의도인 보행 친화와 실제 이용 실태인 상권 활성화 부족 간의 간극을 발견하고, 주거 쾌적성과 상업 활력을 동시에 고려해야 하는 단지 계획의 실무적 디테일을 익혔습니다."},{"image":"/uploads/project-1765109177653-1765109177686.png","video":"","title":"2025 일산 신도시 주택 수요공급 분석","description":"[부동산 경제 입문] 일산신도시의 가격 하락에도 수요가 즉각 회복되지 않는 비탄력적 현상을 규명하기 위해 금리, 인구 구조, 정책 변수를 파이썬으로 시각화하여 분석했습니다. 이론과 현실의 괴리를 데이터로 실증하며, 재건축 기대 심리와 노후화가 시장에 미치는 영향을 꿰뚫어 보는 거시적 부동산 분석 안목을 길렀습니다."},{"image":"/uploads/project-7-1765111172411.png","video":"","title":"2025 특례보금자리론 도입이 서민층 주택구입과 주택시장 안정에 미친 영향 분석","description":"[부동산 금융 입문] 2023년 특례보금자리론 도입이 서민층 주택 구입에 미친 영향을 정책 시행 배경부터 구조적 한계까지 심층 분석했습니다. 정책 종료 후의 리스크를 완화하기 위해 공공참여형 지분공유형 주택금융 상품 도입을 대안으로 제안했습니다. 이를 통해 정부 정책이 주택 시장과 가계 부채에 미치는 금융적 영향을 다각적으로 이해하는 전문성을 키웠습니다."},{"image":"/uploads/project-1765109275193-1765109275224.png","video":"","title":"2025 LH 행복주택 광고 마케팅 분석","description":"[부동산 마케팅] LH 행복주택의 낮은 실이용률 문제를 해결하기 위해 2030 세대의 인식을 심층 조사하고 STP 분석을 수행했습니다. 이를 통해 기존의 낙후된 임대 이미지를 청년 성장 플랫폼으로 리포지셔닝하고, 커리어 연동형 임대료 체계와 AI 챗봇 도입 등 실질적인 타겟 맞춤형 마케팅 믹스 전략을 도출했습니다."},{"image":"/uploads/project-1765109318532-1765109318564.png","video":"","title":"2025 강남 캠브리지 빌딩 수익성 개선 방안 분석","description":"[부동산 자산관리] 강남 GBD 권역 오피스의 수익성 극대화를 위해 시장 동향과 임차인 구성을 정밀 분석하여, 우량 임차인인 대형 로펌 유치 및 렌트프리 전략을 기획했습니다. 현금흐름(NOI)과 내부수익률(IRR)을 직접 시뮬레이션하여 목표 수익률을 8.8%에서 9.2%로 끌어올리는 실무적 자산 운용 역량을 향상시켰습니다."},{"image":"/uploads/project-1765109347851-1765109347884.png","video":"","title":"2025 지방소멸과 기후위기 속 기후적응형 지역정책의 방향성 제안","description":"[국토및지역계획] 수도권과 달리 자원과 인프라가 취약한 지방의 기후 적응 역량 격차 문제를 심층 분석했습니다. 거시적 정책에만 의존하지 않고, 저소득층, 고령자 등 기후 취약계층을 직접 겨냥한 냉방 서비스, 방범창 설치 지원 등 미시적인 지역 맞춤형 정책을 제안했습니다. 이를 통해 지방소멸과 기후위기 속에서 주민들이 체감할 수 있는 지속가능한 도시의 방향성을 제시하는 통찰력을 길렀습니다."},{"image":"/uploads/project-1765109400631-1765109400668.png","video":"","title":"2025 광역콜버스 수도권 교통혁신을 위한 도입 성과와 개선 방향 분석","description":"[교통계획] 수도권 광역 교통난 해소를 위한 광역 콜버스의 시범 사업 운영 현황을 분석하고, 실제 이용자의 불편 요인을 진단했습니다. 이를 바탕으로 통합 모빌리티 플랫폼 연동과 노선 유연화 등 구체적인 개선안을 도출하며 수요자 중심의 미래 교통 체계를 기획하는 안목을 넓혔습니다."},{"image":"/uploads/project-1765109495502-1765109495544.png","video":"","title":"2025 부천 3기 신도시 사례 분석","description":"[계획이론] 부천 대장 지구 개발 과정에서 발생한 환경 보전과 개발 간의 갈등을 옹호 계획 이론과 의사소통적 계획 이론을 적용해 심층 분석했습니다. 다양한 이해관계자 간의 거버넌스와 합의 도출 과정을 재조명하며, 도시 계획가는 단순 엔지니어가 아닌 사회적 갈등 조정자여야 함을 체득했습니다."},{"image":"/uploads/project-1765109519949-1765109519976.png","video":"","title":"2025 성수 상권 변화 분석과 해결방안 제안","description":"[사회통계의이해] 부동산 보고서를 통해 성수 상권이 팝업스토어 위주의 단기 임대에서 플래그십 스토어의 장기 임대 형태로 전환되는 과정을 분석하고, 이러한 구조 변화의 경제적 기반과 지속 가능성을 R을 통해 통계적으로 예측했습니다. 특히 F&B에 편중된 상권 구조의 높은 변동성을 지적하며 테크/리빙 브랜드의 유치를 위한 블라인드 스팟 공략 전략을 제안하는 등 데이터 기반의 상권 진단 및 마케팅 전략 수립 능력을 키웠습니다."},{"image":"/uploads/project-14-1765112422335.png","video":"","title":"2025 차세대 용인시 교육과정 제안","description":"[용인시 정책 제안 공모전] 용인시의 지역 정체성 향상 및 발전을 위해 '용인학 캠프' 개정 교육과정을 제안했습니다. 조례를 근거로 플랫폼시티 기업 분석, 지역 특산품 연구, 도시재생 현장 답사 등을 포함한 차세대 교육 프로그램을 상세히 기획하고, 필요 예산까지 산출했습니다. 이를 통해 지역 자원에 대한 청년층의 관심과 이해를 높이는 창의적인 정책 기획 역량을 길렀습니다."},{"image":"/uploads/project-15-1765112439091.png","video":"","title":"지역답사 ㅣ 인천 원도심 부흥 방안을 중심으로","description":"[2023 지역답사] 인천 원도심의 쇠퇴를 극복하기 위해 유휴 산업시설 재활용과 도시 수변 공간 활용을 결합한 활성화 전략을 수립했습니다. 특히 대규모 수변 공간 개발 성공의 핵심 요소로 민관 협력과 공공성 확보'를 제시하며 지역 내 다양한 이해관계자 간의 갈등을 조정하고 합의를 도출하는 도시계획가의 역할을 심도 있게 탐구했습니다."},{"image":"/uploads/project-16-1765112452398.png","video":"","title":"지역답사 ㅣ 청주시 공실 활용방안을 중심으로","description":"[2024 지역답사] 학교 수업시간에 배운 Arc GIS를 기반으로 오창초등학교 가좌분교를 대상지로 선정한 후, 폐교 유휴 부지의 경제적 활용 방안을 연구했습니다. 폐교를 루프탑 카페, 캠핑장 등 지역 주민과 관광객을 위한 복합 문화 공간으로 조성하는 계획을 수립하고 교육청과의 협업을 전제한 초기 비용 및 예상 수익을 산출하여 수익성을 증명했습니다. 도시 외곽의 미활용 자산을 발굴하고 수익 모델을 창출하는 실무 능력을 키웠습니다."},{"image":"/uploads/project-17-1765112468218.png","video":"","title":"지역답사 ㅣ 파주시 GTX-A 개통 효과 분석","description":"[2025 지역답사] 학교 수업시간에 배운 R 프로그램을 활용해 GTX-A 운정역 개통에도 불구하고 발생하는 지역 내 교통 사각지대와 경제적 누수 현상을 진단했습니다. 이를 해결하기 위해 용인시 행복택시 사례를 벤치마킹한 '파주형 GTX-이음 택시' 정책을 제안했습니다. 광역 교통망의 혜택을 지역 소외 계층에게까지 연결하는 교통 복지 관점의 융합적 사고를 배웠습니다."}] as Array<{ image: string; video?: string; title: string; description: string }>
  }

  const [projectsInfo, setProjectsInfo] = useState(defaultInfo)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageAspects, setImageAspects] = useState<{ [key: string]: string }>({})
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [displayCount, setDisplayCount] = useState(defaultInfo.initialDisplay)
  const [showDisplaySettings, setShowDisplaySettings] = useState(false)
  const [newProject, setNewProject] = useState({
    image: "",
    title: "",
    description: ""
  })
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  
  // localStorage에서 데이터 로드 - 편집 모드가 변경될 때마다 실행
  useEffect(() => {
    const savedData = getData('projects-info') as typeof defaultInfo | null
    if (savedData) {
      const mergedData = { ...defaultInfo, ...savedData }
      setProjectsInfo(mergedData)
      setDisplayCount(mergedData.initialDisplay || defaultInfo.initialDisplay)
      // background 데이터가 있으면 설정
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    
    const savedBg = getData('projects-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode]) // isEditMode가 변경될 때마다 데이터 다시 로드
  
  const updateProjectsInfo = async (key: string, value: string | number | boolean | typeof projectsInfo.projects) => {
    const newInfo = { ...projectsInfo, [key]: value }
    setProjectsInfo(newInfo)
    saveData('projects-info', newInfo)
    // 파일에도 자동 저장
    await saveToFile('projects', 'Info', newInfo)
  }
  
  const updateProject = async (index: number, field: string, value: string) => {
    const newProjects = [...projectsInfo.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    await updateProjectsInfo('projects', newProjects)
  }
  
  
  const removeProject = async (index: number) => {
    // 삭제할 프로젝트의 이미지/비디오 파일 경로 가져오기
    const projectToRemove = projectsInfo.projects[index]
    
    // 이미지가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.image && projectToRemove.image.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.image })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 이미지 삭제 완료: ${projectToRemove.image}`)
        }
      } catch (error) {
        console.error('프로젝트 이미지 삭제 실패:', error)
      }
    }
    
    // 비디오가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.video && projectToRemove.video.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.video })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 비디오 삭제 완료: ${projectToRemove.video}`)
        }
      } catch (error) {
        console.error('프로젝트 비디오 삭제 실패:', error)
      }
    }
    
    // 프로젝트 목록에서 제거
    const newProjects = projectsInfo.projects.filter((_, i) => i !== index)
    await updateProjectsInfo('projects', newProjects)
  }
  
  // 표시할 프로젝트들
  const validProjects = projectsInfo.projects
  const visibleProjects = isEditMode ? validProjects : validProjects.slice(0, displayCount)
  const hasMoreProjects = validProjects.length > displayCount
  
  // 더보기 버튼 클릭
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + projectsInfo.loadMoreCount, validProjects.length))
  }
  
  // 이미지 비율 감지 함수
  const detectImageAspect = (src: string) => {
    if (!src) return // 빈 이미지 경로는 무시
    
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / img.height
      let aspectClass: string
      
      // 일반적인 이미지 비율들 감지
      if (ratio >= 1.7 && ratio <= 1.8) {
        aspectClass = 'aspect-video' // 16:9 (1.777...)
      } else if (ratio >= 1.3 && ratio <= 1.35) {
        aspectClass = 'aspect-[4/3]' // 4:3 (1.333...)
      } else if (ratio >= 0.95 && ratio <= 1.05) {
        aspectClass = 'aspect-square' // 1:1 (1.0)
      } else if (ratio >= 0.74 && ratio <= 0.76) {
        aspectClass = 'aspect-[3/4]' // 3:4 (0.75)
      } else if (ratio >= 0.55 && ratio <= 0.57) {
        aspectClass = 'aspect-[9/16]' // 9:16 (0.5625)
      } else if (ratio >= 1.4 && ratio <= 1.45) {
        aspectClass = 'aspect-[3/2]' // 3:2 (1.5)
      } else if (ratio >= 0.65 && ratio <= 0.67) {
        aspectClass = 'aspect-[2/3]' // 2:3 (0.666...)
      } else if (ratio > 1.8) {
        aspectClass = 'aspect-[21/9]' // 초광각
      } else if (ratio < 0.55) {
        aspectClass = 'aspect-[1/2]' // 매우 세로
      } else {
        // 기타 비율은 가장 가까운 것으로
        if (ratio > 1) {
          aspectClass = 'aspect-video' // 기본 가로
        } else {
          aspectClass = 'aspect-[3/4]' // 기본 세로
        }
      }
      
      setImageAspects(prev => ({ ...prev, [src]: aspectClass }))
    }
    img.src = src
  }
  
  // 모든 이미지 비율 감지
  useEffect(() => {
    validProjects.forEach(project => {
      detectImageAspect(project.image)
    })
  }, [validProjects.length]) // 유효한 projects 개수가 변경되면 다시 실행

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <EditableBackground
        image={backgroundData.image}
        video={backgroundData.video}
        color={backgroundData.color}
        opacity={backgroundData.opacity}
        onChange={(data) => {
          const newData = { ...backgroundData, ...data }
          setBackgroundData(newData)
          saveData('projects-background', newData)
          
          // projectsInfo도 업데이트 (파일 저장을 위해)
          const updatedProjectsInfo = { ...projectsInfo, background: newData }
          setProjectsInfo(updatedProjectsInfo)
          saveData('projects-info', updatedProjectsInfo)
        }}
        storageKey="projects-background"
        className="relative"
      >
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 제목 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={projectsInfo.title}
                onChange={(value) => updateProjectsInfo('title', value)}
                storageKey="projects-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <EditableText
                value={projectsInfo.subtitle}
                onChange={(value) => updateProjectsInfo('subtitle', value)}
                storageKey="projects-subtitle"
              />
            </p>
          </div>

          {/* 프로젝트가 없을 때 */}
          {validProjects.length === 0 && !isEditMode ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🚀</span>
              <p className="text-xl text-muted-foreground">준비 중입니다</p>
            </div>
          ) : (
            /* 프로젝트 그리드 */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => {
                
                return (
                  <div 
                    key={index}
                    className="group flex flex-col relative cursor-pointer"
                    onClick={() => !isEditMode && setSelectedImage(project.video || project.image)}
                  >
                    {isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeProject(index)
                        }}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    
                    {/* 이미지/비디오 영역 */}
                    <div className="relative aspect-[4/3] rounded-lg bg-muted mb-3 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <EditableMedia
                          src={project.image || ""}
                          onChange={(src) => updateProject(index, 'image', src)}
                          type="auto"
                          storageKey={`project-${index}-image`}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                          purpose={`project-${index}`}
                        />
                      )}
                    </div>
                    
                    {/* 텍스트 영역 */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground mb-1">
                        <EditableText
                          value={project.title || "프로젝트 제목"}
                          onChange={(value) => updateProject(index, 'title', value)}
                          storageKey={`project-${index}-title`}
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <EditableText
                          value={project.description || "프로젝트 설명"}
                          onChange={(value) => updateProject(index, 'description', value)}
                          storageKey={`project-${index}-description`}
                          multiline
                        />
                      </p>
                    </div>
                  </div>
                )
              })}
              
              {/* 편집 버튼 */}
              {isEditMode && (
                <div 
                  className="h-64 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => setShowProjectModal(true)}
                >
                  <div className="text-center">
                    <Plus className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">프로젝트 추가</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 더보기 버튼 */}
          {hasMoreProjects && !isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                <ChevronDown className="h-5 w-5" />
                더 많은 프로젝트 보기 ({validProjects.length - displayCount}개 더)
              </button>
            </div>
          )}
          
          {/* 표시 설정 버튼 (편집 모드에서만) */}
          {isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowDisplaySettings(true)}
                className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <LayoutGrid className="h-5 w-5" />
                더보기 설정
              </button>
            </div>
          )}
          </div>
        </section>
      </EditableBackground>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 모달 컨테이너 */}
          <div 
            className="relative bg-background rounded-lg shadow-2xl max-w-4xl max-h-[85vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 확대된 이미지/비디오 */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {selectedImage && (selectedImage.includes('.mp4') || selectedImage.includes('.webm') || selectedImage.includes('youtube')) ? (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="확대된 프로젝트 이미지"
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-muted-foreground text-center py-20'
                      placeholder.innerHTML = '<span class="text-6xl">📁</span><p class="mt-4">미디어를 불러올 수 없습니다</p>'
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 프로젝트 추가 모달 */}
      {showProjectModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">새 프로젝트 추가</h3>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* 이미지/비디오 업로드 */}
              <div>
                <label className="text-sm font-medium mb-2 block">프로젝트 이미지/비디오</label>
                <div className="h-48 rounded-lg overflow-hidden bg-muted">
                  {newProject.image ? (
                    <div className="relative h-full">
                      {newProject.image.includes('.mp4') || newProject.image.includes('.webm') ? (
                        <video 
                          src={newProject.image} 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                      ) : (
                        <img 
                          src={newProject.image} 
                          alt="프로젝트 미리보기"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => setNewProject({...newProject, image: ""})}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <input
                        id="project-upload"
                        type="file"
                        accept="image/*,video/mp4,video/webm"
                        onChange={async (e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          
                          const isVideo = file.type.includes('video')
                          const maxSize = isVideo ? 20 * 1024 * 1024 : 5 * 1024 * 1024
                          
                          if (file.size > maxSize) {
                            alert(`파일 크기는 ${isVideo ? '20MB' : '5MB'} 이하여야 합니다`)
                            return
                          }
                          
                          const formData = new FormData()
                          formData.append('file', file)
                          formData.append('purpose', `project-${Date.now()}`)
                          
                          try {
                            const response = await fetch(isVideo ? '/api/upload-video' : '/api/upload-image', {
                              method: 'POST',
                              body: formData
                            })
                            
                            const result = await response.json()
                            
                            if (result.success) {
                              setNewProject({...newProject, image: result.path})
                            } else {
                              alert(`❌ ${result.error}`)
                            }
                          } catch {
                            alert('업로드 중 오류가 발생했습니다')
                          }
                        }}
                        className="hidden"
                      />
                      <label
                        htmlFor="project-upload"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 cursor-pointer"
                      >
                        <Upload className="h-4 w-4 inline mr-2" />
                        파일 업로드
                      </label>
                      <input
                        type="text"
                        value={newProject.image}
                        onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                        placeholder="또는 URL 입력 (https://...)"
                        className="px-3 py-2 border rounded-lg bg-background text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* 프로젝트 제목 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 제목</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="예: 브랜드 리뉴얼 프로젝트"
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
              
              {/* 프로젝트 설명 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 설명</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  placeholder="예: 스타트업 A사의 전체 브랜딩 리뉴얼 및 UI/UX 개선"
                  className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button
                onClick={async () => {
                  if (newProject.title && newProject.description) {
                    // 비디오 URL 체크 및 처리
                    const isVideo = newProject.image && (newProject.image.includes('.mp4') || newProject.image.includes('.webm'))
                    const projectData = {
                      image: isVideo ? '' : newProject.image,
                      video: isVideo ? newProject.image : '',
                      title: newProject.title,
                      description: newProject.description
                    }
                    const updatedProjects = [...projectsInfo.projects, projectData]
                    const updatedInfo = {...projectsInfo, projects: updatedProjects}
                    setProjectsInfo(updatedInfo)
                    saveData('projects-info', updatedInfo)
                    
                    // 파일에도 저장
                    const success = await saveToFile('projects', 'Info', updatedInfo)
                    if (success) {
                      alert('✅ 프로젝트가 추가되고 파일에 저장되었습니다!')
                    }
                    
                    setNewProject({ image: "", title: "", description: "" })
                    setShowProjectModal(false)
                  } else {
                    alert('제목과 설명을 입력해주세요')
                  }
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                추가
              </button>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 표시 설정 모달 */}
      {showDisplaySettings && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">더보기 설정</h3>
              <button
                onClick={() => setShowDisplaySettings(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 초기 표시 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  처음에 보여줄 프로젝트 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => {
                        updateProjectsInfo('initialDisplay', num)
                        setDisplayCount(Math.min(displayCount, num))
                      }}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.initialDisplay === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.initialDisplay}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('initialDisplay', value)
                      setDisplayCount(Math.min(displayCount, value))
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 더보기 클릭 시 추가 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  더보기 클릭 시 추가로 보여줄 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => updateProjectsInfo('loadMoreCount', num)}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.loadMoreCount === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.loadMoreCount}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('loadMoreCount', value)
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 현재 상태 미리보기 */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-2">현재 설정:</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• 전체 프로젝트: {validProjects.length}개</p>
                  <p>• 처음 표시: {projectsInfo.initialDisplay}개</p>
                  <p>• 더보기 클릭당: {projectsInfo.loadMoreCount}개씩 추가</p>
                  {validProjects.length > projectsInfo.initialDisplay && (
                    <p className="text-primary mt-2">
                      → 더보기 버튼 {Math.ceil((validProjects.length - projectsInfo.initialDisplay) / projectsInfo.loadMoreCount)}번 클릭 필요
                    </p>
                  )}
                </div>
              </div>
              
              {/* 팁 */}
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-xs font-medium mb-1">💡 추천 설정:</p>
                <p className="text-xs text-muted-foreground">
                  • 프로젝트가 많은 경우: 6개 표시, 3개씩 추가<br/>
                  • 프로젝트가 적은 경우: 3개 표시, 3개씩 추가<br/>
                  • 모바일 고려: 3의 배수로 설정 권장
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  // 초기화
                  updateProjectsInfo('initialDisplay', 6)
                  updateProjectsInfo('loadMoreCount', 3)
                  setDisplayCount(6)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                기본값으로 초기화
              </button>
              <button
                onClick={async () => {
                  // 파일에 저장
                  const success = await saveToFile('projects', 'Info', projectsInfo)
                  if (success) {
                    alert('✅ 프로젝트 설정이 파일에 저장되었습니다!')
                  }
                  setShowDisplaySettings(false)
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                📁 저장 & 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}