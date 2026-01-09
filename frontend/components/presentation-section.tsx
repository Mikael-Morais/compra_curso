import { BookOpen, Video, Award, Users } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Videoaulas Completas",
    description: "Conteúdo atualizado conforme os últimos editais do ENEM e UEMA",
  },
  {
    icon: BookOpen,
    title: "Correções Personalizadas",
    description: "Feedback detalhado para evoluir sua escrita a cada redação",
  },
  {
    icon: Award,
    title: "Simulados Realistas",
    description: "Questões estilo ENEM/UEMA para testar seus conhecimentos",
  },
  {
    icon: Users,
    title: "Acompanhamento",
    description: "Suporte pedagógico e comunidade ativa de estudantes",
  },
]

export function PresentationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--navy)]">
            O Curso Mais Completo para sua Aprovação
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Metodologia prática com videoaulas, exercícios personalizados e acompanhamento individual. Tudo que você
            precisa para dominar a redação do ENEM e UEMA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[var(--orange)]"
            >
              <div className="w-14 h-14 bg-[var(--orange)]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-[var(--orange)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--navy)]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
