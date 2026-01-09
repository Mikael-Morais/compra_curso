import { Check } from "lucide-react"

const benefits = [
  "Acesso imediato a todos os módulos",
  "Correção individual de redações com feedback detalhado",
  "Simulados com questões estilo ENEM/UEMA",
  "Comunidade de alunos para troca de experiências",
  "Certificado de conclusão",
  "Suporte pedagógico completo",
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-[var(--navy)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--orange)] rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">✨ Benefícios de se Inscrever</h2>
        <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          Tudo que você precisa para alcançar sua nota máxima
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--orange)] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
