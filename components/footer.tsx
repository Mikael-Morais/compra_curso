import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container max-w-7xl mx-auto py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Curso Método"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold">Curso Método</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Democratizando o acesso à educação de qualidade desde 2023. Transformando histórias através da educação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#cursos" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Cursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Redação Presencial
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Redação Online
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Mentoria Intensiva
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">(98) 98888-8888</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">contato@cursometodo.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">São Luís, Maranhão</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Curso Método. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-white/70 hover:text-accent transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-white/70 hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
