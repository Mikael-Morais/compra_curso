import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
            Transforme Seu Futuro com Educação de Qualidade
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl text-pretty leading-relaxed">
            Aprenda com métodos comprovados e conquiste sua aprovação no ENEM e UEMA. Mais de 2 anos de experiência
            formando alunos com notas acima de 900.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8">
              <Link href="#cursos">
                Ver Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg h-14 px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/sobre">Nossa História</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {["Acompanhamento Individual", "Correções Detalhadas", "Método Comprovado"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 text-white/95 transition-all duration-300 hover:scale-110 hover:text-accent cursor-pointer group"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
