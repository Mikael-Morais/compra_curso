'use client'

import { Button } from "@/components/ui/button"
import { Rocket, Trophy, LaptopMinimal, Headset } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="relative overflow-hidden bg-(--navy) text-white">
      {/* Hero imagem background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero-imagem.png"
          alt="Aluna e militar fardado representando vestibular e concursos"
          fill
          className="object-cover max-w-350 m-auto object-center opacity-100"
          priority
        />
        {/* Gradientes para mesclagem com o fundo */}
        <div className="absolute inset-0 bg-linear-to-t from-(--navy) via-(--navy)/50 to-(--navy)/80" />
        <div className="absolute inset-0 bg-linear-to-r from-(--navy)/50 via-transparent to-(--navy)/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-(--orange) rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--orange-light) rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 pt-12 md:pt-20">
        <div className="flex justify-center">
          <Image
            src="/images/logo-metodo-nfundo.png"
            alt="Método - Vestibular & Concursos"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-(--orange) text-white px-6 py-2 rounded-full md:text-lg sm: text-sm font-bold shadow-lg">
            <Rocket className="w-5 h-5" />
            Curso Método. Agora com turmas online
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance">
            Transforme o <span className="text-(--orange) relative inline-block">sonho</span> da aprovação em{" "}
            <span className="text-(--orange) relative inline-block">
              REALIDADE
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-(--orange) opacity-30 blur-sm"></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 text-pretty max-w-3xl mx-auto leading-relaxed font-medium">
            Método comprovado com alunos aprovados no <span className="text-(--orange) font-bold">ENEM</span> e{" "}
            <span className="text-(--orange) font-bold">UEMA</span>
          </p>

          <div className="bg-linear-to-r from-(--orange) to-(--orange-light) rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <LaptopMinimal className="w-10 h-10 mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold">100%</div>
                <div className="text-sm font-medium">Agora Online</div>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="w-10 h-10 mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold">980</div>
                <div className="text-sm font-medium">Notas Máximas</div>
              </div>
              <div className="flex flex-col items-center">
                <Headset className="w-10 h-10 mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold">100%</div>
                <div className="text-sm font-medium">Acompanhamento Exclusivo</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              size="lg"
              onClick={scrollPricing}
              className="bg-(--orange) hover:bg-(--orange-light) text-white text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,138,0,0.6)]"
            >
              Garanta Sua Vaga
            </Button>
            <p className="text-sm text-gray-400 mt-3">Vagas limitadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
