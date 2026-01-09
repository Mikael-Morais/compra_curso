import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap } from "lucide-react"

const plans = [
  {
    name: "Plano Essencial",
    subtitle: "Correções em PDF",
    icon: Check,
    price: "49,90",
    description: "Ideal para quem quer começar com acompanhamento acessível",
    features: [
      "Aulas gravadas e encontros ao vivo",
      "Correção individualizada em PDF (2 por mês)",
      "Foco total no ENEM e UEMA",
      "Material incluso",
    ],
    popular: false,
    color: "border-gray-300",
  },
  {
    name: "Plano Avançado",
    subtitle: "Correções ao Vivo",
    icon: Zap,
    price: "69,90",
    description: "Perfeito para quem busca evolução rápida e feedback imediato",
    features: [
      "Aulas gravadas e encontros ao vivo",
      "Correção ao vivo com o professor (4 por mês)",
      "Foco no ENEM e UEMA",
      "Material premium incluso",
    ],
    popular: true,
    color: "border-[var(--orange)]",
  },
  {
    name: "Plano Premium",
    subtitle: "Mentoria Intensiva",
    icon: Sparkles,
    price: "199,90",
    description: "Para quem quer preparação de alto nível e acompanhamento individual",
    features: [
      "Aulas particulares semanais",
      "Suporte direto via WhatsApp",
      "Análise de desempenho contínua",
      "Material premium incluso",
    ],
    popular: false,
    color: "border-[var(--navy)]",
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--navy)]">💰 Escolha Seu Plano</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Investimento acessível para transformar seu futuro</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-4 ${plan.color} overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "md:-translate-y-4 ring-4 ring-[var(--orange)]/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[var(--orange)] text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                  MAIS POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.popular ? "bg-[var(--orange)]" : "bg-[var(--navy)]"
                  }`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2 text-[var(--navy)]">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-600 text-xl">R$</span>
                    <span
                      className={`text-5xl font-bold ${plan.popular ? "text-[var(--orange)]" : "text-[var(--navy)]"}`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[4rem]">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-[var(--orange)]" : "text-[var(--navy)]"
                        }`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full text-lg font-bold rounded-full ${
                    plan.popular
                      ? "bg-[var(--orange)] hover:bg-[var(--orange-light)] text-white"
                      : "bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white"
                  }`}
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">✓ Cancele quando quiser | ✓ Acesso imediato | ✓ Início das turmas: 15/01</p>
        </div>
      </div>
    </section>
  )
}
