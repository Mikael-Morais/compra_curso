import { Check } from "lucide-react"

const benefits = [
  "Planos flexíveis: Contrate apenas o que você precisa",
  "Opção de Correção AO VIVO: Feedback instantâneo e diálogo direto",
  "Específico para UEMA: Obras literárias e conteúdos regionais",
  "Focado no ENEM: Estratégias para maximizar sua nota no SISU",
  "Plataforma intuitiva para envio de redações e dúvidas",
  "Economia inteligente: Combos de Monitoria + Redação com desconto",
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-(--navy) text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-(--orange) rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Por que estudar com o Método Online?
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          Tecnologia e pedagogia alinhadas para garantir sua alta performance, onde quer que você esteja.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-(--orange)/30"
              >
                <div className="shrink-0 w-8 h-8 bg-(--orange) rounded-full flex items-center justify-center mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg leading-relaxed font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}