import { BookOpen, Video, PenTool, Target } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Foco: ENEM ou UEMA?",
    description: "Planos de monitoria desenhados especificamente para o edital do seu vestibular prioritário.",
  },
  {
    icon: PenTool,
    title: "Correção de Redação ao Vivo",
    description: "Tenha sua redação corrigida em tempo real pelo professor, um diferencial exclusivo para acelerar sua evolução.",
  },
  {
    icon: Video,
    title: "Monitoria Estratégica",
    description: "Acompanhamento focado em resolução de questões e revisão objetiva dos conteúdos de maior peso.",
  },
  {
    icon: BookOpen,
    title: "Metodologia Flexível",
    description: "Escolha entre focar apenas na Redação ou garantir a preparação completa com as Monitorias.",
  },
]

export function PresentationSection() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-(--navy)">
            O Método Definitivo para sua Aprovação Online
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Seja para o ENEM ou para o PAES UEMA, nossa plataforma oferece a estrutura exata
            que você precisa: da correção detalhada à monitoria especializada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-(--orange)"
            >
              <div className="w-14 h-14 bg-(--orange)/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-(--orange)" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-(--navy)">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
