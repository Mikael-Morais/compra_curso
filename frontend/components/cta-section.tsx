'use client'

import { Button } from "@/components/ui/button"
// Adicionei os ícones de contato e social aqui
import { Target, Instagram, MessageCircle, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  const scrollPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-linear-to-br from-(--navy) via-(--navy-light) to-(--navy) text-white relative overflow-hidden flex flex-col justify-between min-h-[80vh]">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-(--orange) rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--orange-light) rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-(--orange) text-white px-6 py-2 rounded-full md:text-lg sm: text-sm font-bold shadow-lg">
            <Target className="w-5 h-5" />
            Última Chamada
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-balance">Sua Aprovação Começa Aqui</h2>

          <p className="text-xl md:text-2xl text-gray-300 text-pretty max-w-2xl mx-auto">
            Junte-se aos nossos alunos aprovados e domine a redação do ENEM/UEMA com o Método mais eficiente do mercado
          </p>

          <div className="pt-3">
            <Button
              size="lg"
              onClick={scrollPricing}
              className="bg-(--orange) hover:bg-(--orange-light) text-white text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,138,0,0.6)]"
            >
              Matricule-se Agora
            </Button>
          </div>

          {/* Social proof */}
          <div className="">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-(--orange)">900+</div>
                <div className="text-sm text-gray-400">Nota Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--orange)">500+</div>
                <div className="text-sm text-gray-400">Alunos Aprovados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--orange)">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RODAPÉ INTEGRADO --- */}
      <div className="relative z-10 border-t border-white/10 mt-auto">
        <div className="container mx-auto px-4 pt-12 pb-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Logo e Nome */}
            <div className="flex items-center gap-4">
              {/* Espaço reservado para LOGO (pode substituir a div pelo componente Image do Next) */}
              <div className="relative w-12 h-12 bg-white/10 rounded-lg border border-white/20 overflow-hidden shrink-0">
                <Image
                  src="/images/logo-metodo.png"  // Coloque sua imagem na pasta 'public'
                  alt="Logo Curso Método"
                  fill // Isso faz a imagem preencher a div pai (w-12 h-12)
                  className="object-cover" // Ajusta a imagem sem distorcer
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold leading-none">Curso Método</h3>
                <span className="text-sm text-gray-400">Redação de Alta Performance</span>
              </div>
            </div>

            {/* Contatos Sociais */}
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#eb65f7] transition-colors"
                aria-label="Instagram"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="#"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="mailto:contato@cursometodo.com"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-(--orange) transition-colors"
                aria-label="Email"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Copyright & Devs Escondidos */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Curso Método. Todos os direitos reservados.</p>

            {/* Área dos Desenvolvedores "Escondida" */}
            <div className="flex items-center gap-4 mt-4 md:mt-0 opacity-20 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs">Devs:</span>
              <Link href="#" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}