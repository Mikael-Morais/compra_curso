'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Zap, BookOpen, PenTool, Target } from "lucide-react"

const offerings = [
  {
    title: "Redação Método",
    icon: PenTool,
    description: "Domine a escrita para ENEM e UEMA",
    color: "border-blue-500",
    bgAccent: "bg-blue-50",
    textAccent: "text-blue-600",
    commonFeatures: [
      "Aulas de estrutura e repertório",
      "Foco nos critérios ENEM e UEMA",
      "Material de apoio incluso",
    ],
    tiers: [
      {
        name: "Clássico",
        badge: "Plataforma",
        priceMonthly: "64,90",
        priceAnnual: "650,00",
        diff: "Correção detalhada via plataforma",
        buttonText: "Assinar Clássico",
      },
      {
        name: "Pro",
        badge: "Recomendado",
        isPopular: true,
        priceMonthly: "74,90",
        priceAnnual: "750,00",
        diff: "Correção AO VIVO com professor",
        buttonText: "Assinar Pro (Ao Vivo)",
      },
    ],
  },
  {
    title: "Plano ENEM",
    icon: BookOpen,
    description: "Monitoria estratégica para o SISU",
    color: "border-(--orange)", // Assumindo uso da variável CSS ou substitua por orange-500
    bgAccent: "bg-orange-50",
    textAccent: "text-(--orange)",
    commonFeatures: [
      "Cronograma de estudos individual",
      "Monitoria de todas as disciplinas",
      "Simulados padrão ENEM",
    ],
    tiers: [
      {
        name: "Monitoria",
        badge: "Essencial",
        priceMonthly: "74,90",
        priceAnnual: "750,00",
        diff: "Apenas Monitoria e Simulados",
        buttonText: "Assinar Monitoria",
      },
      {
        name: "Combo",
        badge: "+ Redação",
        isPopular: true,
        priceMonthly: "99,90",
        priceAnnual: "950,00",
        diff: "Monitoria + Redação (Plataforma)",
        buttonText: "Assinar Combo",
      },
    ],
  },
  {
    title: "Plano UEMA",
    icon: Target,
    description: "Foco total no PAES e obras literárias",
    color: "border-red-500", // Diferenciando UEMA com vermelho/vinho
    bgAccent: "bg-red-50",
    textAccent: "text-red-600",
    commonFeatures: [
      "Aulas de História e Geo. do Maranhão",
      "Análise das obras literárias",
      "Foco em cursos de alta concorrência",
    ],
    tiers: [
      {
        name: "Monitoria",
        badge: "Essencial",
        priceMonthly: "74,90",
        priceAnnual: "750,00",
        diff: "Apenas Monitoria e Específicas",
        buttonText: "Assinar Monitoria",
      },
      {
        name: "Combo",
        badge: "+ Redação",
        isPopular: true,
        priceMonthly: "99,90",
        priceAnnual: "950,00",
        diff: "Monitoria + Redação (Plataforma)",
        buttonText: "Assinar Combo",
      },
    ],
  },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-(--navy)">
            Invista na sua Aprovação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha o nível de acompanhamento ideal para o seu objetivo em 2026.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-(--navy)" : "text-gray-400"}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-16 h-8 bg-(--navy) rounded-full p-1 transition-colors"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === "annual" ? "translate-x-8" : "translate-x-0"
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === "annual" ? "text-(--navy)" : "text-gray-400"}`}>
              Anual <span className="text-(--orange) text-xs font-bold ml-1">(Desconto)</span>
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 ${offer.color} hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Card Header */}
              <div className={`p-8 pb-4 ${offer.bgAccent}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm`}>
                  <offer.icon className={`w-7 h-7 ${offer.textAccent}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{offer.title}</h3>
                <p className="text-gray-600 mt-2 text-sm font-medium">{offer.description}</p>
              </div>

              {/* Tiers Section */}
              <div className="p-6 flex-1 flex flex-col gap-6">
                {offer.tiers.map((tier, tIndex) => (
                  <div
                    key={tIndex}
                    className={`relative rounded-xl border-2 p-5 transition-all ${tier.isPopular ? `border-(--orange) bg-orange-50/30` : "border-gray-100 bg-gray-50/50"
                      }`}
                  >
                    {tier.isPopular && (
                      <span className="absolute -top-3 right-4 bg-(--orange) text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                        Mais Escolhido
                      </span>
                    )}

                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          {tier.name}
                        </span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-sm text-gray-500">R$</span>
                          <span className="text-3xl font-extrabold text-gray-900">
                            {billingCycle === "monthly" ? tier.priceMonthly : tier.priceAnnual}
                          </span>
                          {billingCycle === "annual" && <span className="text-xs text-gray-400">/ano</span>}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Zap className={`w-4 h-4 ${tier.isPopular ? "text-(--orange)" : "text-gray-400"}`} />
                      <p className={`text-sm font-medium ${tier.isPopular ? "text-gray-800" : "text-gray-500"}`}>
                        {tier.diff}
                      </p>
                    </div>

                    <Button
                      className={`w-full font-bold rounded-lg ${tier.isPopular
                        ? "bg-(--orange) hover:bg-orange-600 text-white"
                        : "bg-white border-2 border-(--navy) text-(--navy) hover:bg-gray-50"
                        }`}
                    >
                      {tier.buttonText}
                    </Button>
                  </div>
                ))}

                {/* Common Features */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3">Incluso em ambos:</p>
                  <ul className="space-y-3">
                    {offer.commonFeatures.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Nos Planos "Combo" (Monitoria + Redação), a correção é realizada exclusivamente pela plataforma.
            <br />
            Para correção ao vivo, consulte o plano "Redação Método Pro".
          </p>
        </div>
      </div>
    </section>
  )
}