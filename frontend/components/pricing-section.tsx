'use client';

import { Button } from "@/components/ui/button"
import { Check, BookOpen, Target, Crown, Gift } from "lucide-react"

const plans = [
  {
    title: "Redação UEMA + Monitoria",
    icon: Target,
    description: "Foco total no PAES e obras literárias",
    color: "border-red-500",
    bgAccent: "bg-red-50",
    textAccent: "text-red-600",
    priceMonthly: "89,90",
    priceMonthlyInCents: 8990,
    priceAnnual: "950,00",
    priceAnnualInCents: 95000,
    features: [
      "Correções de redação por chamada",
      "Aulas de História e Geo. do Maranhão",
      "Análise das obras literárias",
      "Cronograma de estudos individual",
      "Monitoria completa para UEMA",
    ],
  },
  {
    title: "Redação ENEM + Monitoria",
    icon: BookOpen,
    description: "Monitoria estratégica para o SISU",
    color: "border-blue-500",
    bgAccent: "bg-blue-50",
    textAccent: "text-blue-600",
    priceMonthly: "89,90",
    priceMonthlyInCents: 8990,
    priceAnnual: "950,00",
    priceAnnualInCents: 95000,
    features: [
      "Correções de redação por chamada",
      "Foco nos critérios do ENEM",
      "Cronograma de estudos individual",
      "Monitoria de todas as disciplinas",
      "Simulados padrão ENEM",
    ],
  },
  {
    title: "Acesso Completo",
    icon: Crown,
    description: "Monitoria e redação ENEM + UEMA",
    color: "border-orange-500",
    bgAccent: "bg-orange-50",
    textAccent: "text-orange-600",
    isPopular: true,
    priceMonthly: "110,00",
    priceMonthlyInCents: 11000,
    priceAnnual: "1.300,00",
    priceAnnualInCents: 130000,
    features: [
      "Correções de redação por chamada",
      "Preparação completa ENEM + UEMA",
      "Monitoria de todas as disciplinas",
      "Aulas de História e Geo. do Maranhão",
      "Análise das obras literárias",
      "Simulados padrão ENEM e UEMA",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        {/* Promo Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left flex-1">
                <span className="inline-block bg-white/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  Promocao de Lancamento
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  30 dias de Acesso Livre
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  Faca seu cadastro agora e experimente a plataforma completa gratuitamente!
                </p>
              </div>
              <Button
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl shrink-0"
                onClick={() => window.location.href = "https://cursometodo.ensinoagil.com.br/register"}
              >
                Cadastrar Gratis
              </Button>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Invista na sua Aprovacao
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos disponiveis em breve. Cadastre-se e aproveite 30 dias gratis!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 ${plan.color} hover:shadow-2xl transition-shadow duration-300`}
            >
              {plan.isPopular && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Mais Escolhido
                </span>
              )}

              {/* Card Header */}
              <div className={`p-8 pb-6 ${plan.bgAccent}`}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
                  <plan.icon className={`w-7 h-7 ${plan.textAccent}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                <p className="text-gray-600 mt-2 text-sm font-medium">{plan.description}</p>
              </div>

{/* Pricing Options */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Mensal */}
                  <div className="rounded-xl border-2 border-gray-100 bg-gray-50/50 p-5 mb-4 opacity-60">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Mensal
                    </span>
                    <div className="flex items-baseline gap-1 mt-1 mb-4">
                      <span className="text-sm text-gray-400 line-through">R$</span>
                      <span className="text-3xl font-extrabold text-gray-400 line-through">
                        {plan.priceMonthly}
                      </span>
                      <span className="text-sm text-gray-400 line-through">/mes</span>
                    </div>
                    <Button
                      disabled
                      className="w-full font-bold rounded-lg bg-gray-200 border-2 border-gray-300 text-gray-400 cursor-not-allowed"
                    >
                      Em breve
                    </Button>
                  </div>

                  {/* Anual */}
                  <div className="rounded-xl border-2 border-gray-200 bg-white p-5 mb-6 opacity-60">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        Anual
                      </span>
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        Economia
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1 mb-1">
                      <span className="text-sm text-gray-400 line-through">R$</span>
                      <span className="text-3xl font-extrabold text-gray-400 line-through">
                        {plan.priceAnnual}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4 line-through">em ate 12x no cartao</p>
                    <Button
                      disabled
                      className="w-full font-bold rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed"
                    >
                      Em breve
                    </Button>
                  </div>

                {/* Features */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3">
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
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
            * Todas as correcoes de redacao sao realizadas por chamada de video com o professor.
          </p>
          <p className="text-emerald-600 font-semibold mt-2">
            Cadastre-se agora e garanta 30 dias de acesso gratis!
          </p>
        </div>
      </div>
    </section>
  )
}
