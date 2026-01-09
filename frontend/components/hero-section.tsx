import { Button } from "@/components/ui/button"
import { Rocket, Trophy, CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--orange)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--orange-light)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-metodo.png"
            alt="Método - Vestibular & Concursos"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--orange)] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
            <Rocket className="w-5 h-5" />
            MATRÍCULAS ABERTAS - INÍCIO: 15/01
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance">
            Transforme sua Redação em{" "}
            <span className="text-[var(--orange)] relative inline-block">
              NOTA MÁXIMA
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-[var(--orange)] opacity-30 blur-sm"></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 text-pretty max-w-3xl mx-auto leading-relaxed font-medium">
            Método comprovado com alunos aprovados no <span className="text-[var(--orange)] font-bold">ENEM</span> e{" "}
            <span className="text-[var(--orange)] font-bold">UEMA</span>
          </p>

          <div className="bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <Trophy className="w-10 h-10 mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold">960+</div>
                <div className="text-sm font-medium">Notas Máximas</div>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold">100%</div>
                <div className="text-sm font-medium">Aprovação</div>
              </div>
              <div className="flex flex-col items-center">
                <Rocket className="w-10 h-10 mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold">15/01</div>
                <div className="text-sm font-medium">Início das Turmas</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              size="lg"
              className="bg-[var(--orange)] hover:bg-[var(--orange-light)] text-white text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,138,0,0.6)]"
            >
              Garanta Sua Vaga Agora
            </Button>
            <p className="text-sm text-gray-400 mt-3">Vagas limitadas - Acesso imediato ao material</p>
          </div>
        </div>
      </div>
    </section>
  )
}
