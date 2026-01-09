import { Button } from "@/components/ui/button"
import { Target } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-linear-to-br from-(--navy) via-(--navy-light) to-(--navy) text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-(--orange) rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--orange-light) rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-(--orange) text-white px-4 py-2 rounded-full text-sm font-semibold">
            <Target className="w-4 h-4" />
            ÚLTIMA CHAMADA
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-balance">🎯 Sua Aprovação Começa Aqui</h2>

          <p className="text-xl md:text-2xl text-gray-300 text-pretty max-w-2xl mx-auto">
            Junte-se aos nossos alunos aprovados e domine a redação do ENEM/UEMA com o Método mais eficiente do mercado
          </p>

          <div className="pt-4 space-y-4">
            <Button
              size="lg"
              className="bg-(--orange) hover:bg-(--orange-light) text-white text-xl px-12 py-8 rounded-full font-bold shadow-2xl transition-transform hover:scale-105"
            >
              Matricule-se Agora
            </Button>

            <p className="text-sm text-gray-400">Início das turmas: 15 de janeiro | Vagas limitadas</p>
          </div>

          {/* Social proof */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-(--orange)">960+</div>
                <div className="text-sm text-gray-400">Nota Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--orange)">500+</div>
                <div className="text-sm text-gray-400">Alunos Aprovados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--orange)">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
