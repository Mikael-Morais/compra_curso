"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, BookOpen, Award, Users } from "lucide-react"
import { useState } from "react"

const courses = [
  {
    id: 1,
    title: "Redação Presencial",
    description:
      "Experiência imersiva com orientação direta do professor. Ideal para quem busca disciplina e ambiente estruturado.",
    price: "R$ 225,00",
    period: "/mês",
    features: [
      "Todo sábado pela manhã",
      "Aula, proposta e correção individualizada",
      "Foco no vestibular ENEM e UEMA",
      "Material incluso",
    ],
    icon: Users,
    highlight: false,
  },
  {
    id: 2,
    title: "Redação Online - ENEM/UEMA",
    description:
      "Aprenda a produzir redações bem estruturadas com aulas gravadas e encontros ao vivo. Praticidade e eficácia.",
    price: "R$ 54,90",
    period: "/mês (12x)",
    features: [
      "Aulas gravadas e encontros ao vivo",
      "Correção individualizada",
      "Foco no ENEM e UEMA",
      "Material incluso",
    ],
    icon: BookOpen,
    highlight: true,
  },
  {
    id: 3,
    title: "Mentoria Intensiva",
    description: "Acompanhamento exclusivo e personalizado para quem busca resultados excepcionais em curto prazo.",
    price: "R$ 450,00",
    period: "/mês",
    features: [
      "Aulas particulares semanais",
      "Suporte via WhatsApp",
      "Análise de desempenho",
      "Material premium incluso",
    ],
    icon: Award,
    highlight: false,
  },
]

export function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
  }

  return (
    <section id="cursos" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance mb-4">Nossos Cursos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Escolha o curso ideal para sua jornada de aprovação. Métodos comprovados, acompanhamento próximo e
            resultados reais.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: Show all 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Mobile/Tablet: Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {courses.map((course) => (
                  <div key={course.id} className="w-full flex-shrink-0 px-4">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-background shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {courses.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  const Icon = course.icon

  return (
    <Card
      className={`relative overflow-hidden h-full flex flex-col ${
        course.highlight ? "border-accent border-2 shadow-lg" : ""
      }`}
    >
      {course.highlight && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}

      <CardHeader className="pb-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
            course.highlight ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl">{course.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{course.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">{course.price}</span>
            <span className="text-muted-foreground">{course.period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full ${
            course.highlight ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90"
          }`}
        >
          Matricule-se Agora
        </Button>
      </CardFooter>
    </Card>
  )
}
