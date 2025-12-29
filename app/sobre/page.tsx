import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Target, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance mb-6">
                Nossa História
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Conheça a trajetória do Curso Método e como estamos transformando a educação e a vida de nossos alunos.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted">
                  <Image src="/logo.png" alt="Professor William Cutrim" fill className="object-contain p-12" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
                  Fundado em 2023 pelo Prof. William Cutrim
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O Curso Método foi fundado em 11 de dezembro de 2023 pelo professor William Cutrim, aprovado em 4º
                    lugar no CFO da Polícia Militar do Maranhão (PMMA), por meio do PAES UEMA, alcançando nota máxima na
                    redação.
                  </p>
                  <p>
                    Antes da criação da modalidade presencial e da consolidação do curso, William já atuava desde 2020
                    com aulas particulares de redação. Nesse período, diversos alunos conquistaram notas acima de 900,
                    resultado de um ensino próximo, estratégico e focado na forma como as bancas avaliam.
                  </p>
                  <p>
                    Nascido em uma comunidade humilde e formado integralmente em escola pública, William sempre
                    acreditou que a educação é a principal ferramenta de transformação social. Essa vivência deu origem
                    a um propósito claro: democratizar o acesso à educação de qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance mb-4">Nossos Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O que nos guia em nossa missão de transformar vidas através da educação
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excelência",
                  description: "Compromisso com a qualidade em cada detalhe do ensino",
                },
                {
                  icon: Users,
                  title: "Proximidade",
                  description: "Acompanhamento individual e turmas reduzidas",
                },
                {
                  icon: Target,
                  title: "Foco",
                  description: "Método estratégico voltado para resultados reais",
                },
                {
                  icon: TrendingUp,
                  title: "Evolução",
                  description: "Crescimento constante do aluno com orientação dedicada",
                },
              ].map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border">
                  <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance mb-6">Nossa Consolidação</h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Há mais de dois anos no mercado, o Curso Método conquistou a confiança de muitos alunos e se
                  consolidou pela sua maior característica: o ensino individualizado. Com turmas reduzidas,
                  acompanhamento próximo e salas de estudo voltadas para monitorias e orientação, o Método criou um
                  ambiente em que cada aluno é verdadeiramente acompanhado em sua evolução.
                </p>
                <p>
                  E o próximo passo já está definido. Em 2026, o Curso Método dará mais um grande avanço em seu
                  propósito de democratizar a educação, ampliando o alcance do seu ensino por meio de uma plataforma
                  on-line estruturada, sem abrir mão da qualidade, da proximidade e do método que sempre foram sua marca
                  registrada.
                </p>
                <p className="text-primary font-semibold text-lg">
                  O Método segue fiel à sua essência: transformar histórias, construir resultados e mostrar que, com
                  orientação certa, a aprovação é uma consequência.
                </p>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/#cursos">Conheça Nossos Cursos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
