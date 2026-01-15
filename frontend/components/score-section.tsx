"use client"

import { ScoreCard } from "./testimonials/score.card"
import { topScores, centralHighlight, otherScores } from "@/lib/scores-data"
import { CentralHighlight } from "./testimonials/central-highlight"

export function ScoresSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-(--navy)">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-(--navy-light) blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-(--navy-light) blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-600px h-600px rounded-full bg-(--navy-light) blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-top-4 duration-700 text-white">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Nossos Alunos <span className="text-(--orange)">Conquistam</span> as Melhores Notas
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Veja alguns dos resultados extraordinários alcançados por quem estudou com o Método
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-14 px-4">
          {topScores.map((student, index) => (
            <ScoreCard
              key={student.name}
              {...student}
              delay={index * 150}
              variant="featured"
            />
          ))}
        </div>

        {/* Central highlight - Agora ocupa mais largura */}
        <div className="w-full px-4 mb-16 md:mb-12 mt-8">
          <CentralHighlight {...centralHighlight} />
        </div>

        <div className="space-y-6 w-full">
          <h3 className="text-center text-lg font-semibold text-muted-foreground animate-in fade-in duration-700" style={{ animationDelay: "800ms" }}>
            Outras notas de destaque
          </h3>

          <div className="
            flex gap-3 md:gap-4 px-4 pb-4
            overflow-x-auto snap-x snap-mandatory 
            scrollbar-hide  {/* <--- CLASSE NOVA AQUI */}
            sm:flex-wrap sm:justify-center sm:overflow-visible
          ">
            {otherScores.map((student, index) => (
              <div key={student.name + index} className="snap-center">
                <ScoreCard {...student} delay={900 + index * 100} variant="standard" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-8 text-center animate-in fade-in duration-700" style={{ animationDelay: "300ms" }}>
          <p className="text-muted-foreground">
            Quer fazer parte dessa lista?{" "}
            <span className="text-(--orange) font-semibold cursor-pointer hover:underline">Comece agora</span>
          </p>
        </div>
      </div>
    </section>
  )
}
