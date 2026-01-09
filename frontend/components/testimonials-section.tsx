import Image from "next/image"
import { Star, Award, Target, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Evandro Júnior",
    score: "980",
    exam: "ENEM",
    image: "/images/evandro-junior.jpeg",
    highlight: true,
  },
  {
    name: "William Cutrim",
    achievement: "4º LUGAR CFO-PM",
    note: "NOTA 10",
    exam: "UEMA",
    image: "/images/william-metodo-flag.jpeg",
    special: true,
  },
  {
    name: "William Cutrim",
    achievement: "APROVADO",
    subtitle: "CFO-PM",
    exam: "POLÍCIA MILITAR",
    image: "/images/william-uniform-1.jpeg",
    uniform: true,
  },
  {
    name: "Raíssa Colins",
    score: "960",
    exam: "ENEM",
    image: "/images/raissa-collins.jpeg",
  },
  {
    name: "Evellyn Ferreira",
    score: "960",
    exam: "ENEM",
    image: "/images/evellyn-ferreira.jpeg",
  },
  {
    name: "Camylla Mendes",
    score: "960",
    exam: "ENEM",
    image: "/images/camylla-mendes.jpeg",
  },
  {
    name: "Camylly Mendes",
    score: "960",
    exam: "ENEM",
    image: "/images/camylly-mendes-2.jpg",
  },
  {
    name: "Taíza Carla",
    score: "940",
    exam: "ENEM",
    image: "/images/taiza-carla.jpeg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[#1e3a5f] to-[var(--navy)]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--orange)] to-[var(--orange-light)] rounded-full blur-[120px] animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-[var(--orange-light)] to-[var(--orange)] rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-20 left-10 w-32 h-32 text-[var(--orange)]" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute bottom-20 right-20 w-40 h-40 text-[var(--orange-light)]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-bounce-subtle">
            <Sparkles className="w-5 h-5" />
            HISTÓRIAS DE SUCESSO
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white text-balance">
            Nossos Alunos{" "}
            <span className="text-[var(--orange)] inline-block relative">
              Campeões
              <svg
                className="absolute -bottom-4 left-0 w-full h-6"
                viewBox="0 0 200 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5,8 Q50,2 100,8 T195,8"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            Resultados reais de quem transformou suas redações com nossa metodologia
          </p>
        </div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {/* Featured students - horizontal cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Evandro - Maior nota ENEM */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(255,140,0,0.5)] transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[21/10] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-[var(--orange)]/30">
                <div className="absolute inset-0">
                  <Image
                    src="/images/evandro-junior.jpeg"
                    alt="Evandro Júnior"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/98 via-[var(--navy)]/80 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex items-center">
                  <div className="space-y-4 text-white max-w-xl">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-4 py-2 rounded-full shadow-lg">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase">REDAÇÃO ENEM</span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-7xl md:text-8xl font-extrabold text-[var(--orange)] drop-shadow-2xl">
                        980
                      </span>
                      <span className="text-2xl text-gray-300 font-medium">pontos</span>
                    </div>

                    <div className="text-3xl md:text-4xl font-bold drop-shadow-lg">Evandro Júnior</div>

                    <div className="flex items-center gap-2 text-[var(--orange)]">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-semibold">MAIOR NOTA</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-white text-[var(--navy)] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                  <Star className="w-4 h-4 fill-current text-[var(--orange)]" />
                  Verificado
                </div>
              </div>
            </div>

            {/* William - CFO-PM Nota 10 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(255,140,0,0.5)] transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[21/10] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-[var(--orange)]/30">
                <div className="absolute inset-0">
                  <Image
                    src="/images/william-metodo-flag.jpeg"
                    alt="William Cutrim"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/98 via-[var(--navy)]/75 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex items-center">
                  <div className="space-y-4 text-white max-w-xl">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-4 py-2 rounded-full shadow-lg">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase">REDAÇÃO UEMA</span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        4º LUGAR CFO-PM
                      </div>
                      <div className="text-6xl md:text-7xl font-extrabold text-[var(--orange)] drop-shadow-2xl">
                        NOTA 10
                      </div>
                    </div>

                    <div className="text-3xl md:text-4xl font-bold drop-shadow-lg">William Cutrim</div>

                    <div className="flex items-center gap-2 text-[var(--orange)]">
                      <Target className="w-5 h-5" />
                      <span className="text-sm font-semibold">EXCELÊNCIA</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-white text-[var(--navy)] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                  <Star className="w-4 h-4 fill-current text-[var(--orange)]" />
                  Verificado
                </div>
              </div>
            </div>
          </div>

          {/* William uniformizado - full width */}
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(255,140,0,0.5)] transition-all duration-500 hover:-translate-y-2">
            <div className="relative aspect-[24/9] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20">
              <div className="absolute inset-0">
                <Image
                  src="/images/william-uniform-1.jpeg"
                  alt="William Cutrim Aprovado"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/70 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 md:p-12 flex items-center">
                <div className="space-y-6 text-white max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-6 py-3 rounded-full shadow-lg">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase">POLÍCIA MILITAR DO MARANHÃO</span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-5xl md:text-7xl font-extrabold text-[var(--orange)] drop-shadow-2xl">
                      APROVADO
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                      Curso de Formação de Oficiais
                    </div>
                  </div>

                  <div className="text-3xl md:text-4xl font-bold drop-shadow-lg">William Cutrim</div>

                  <div className="flex items-center gap-2 text-[var(--orange)]">
                    <Target className="w-6 h-6" />
                    <span className="text-base font-semibold">SONHO REALIZADO</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 bg-white text-[var(--navy)] text-sm font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-xl">
                <Star className="w-5 h-5 fill-current text-[var(--orange)]" />
                Verificado
              </div>
            </div>
          </div>

          {/* Other students - grid of vertical cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {testimonials.slice(3).map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-[0_0_40px_rgba(255,140,0,0.4)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                  <div className="absolute inset-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/98 via-[var(--navy)]/60 to-transparent" />
                  </div>

                  <div className="absolute inset-0 p-4 flex items-end">
                    <div className="space-y-2 text-white w-full">
                      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] px-3 py-1.5 rounded-full shadow-lg">
                        <Award className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase">{testimonial.exam}</span>
                      </div>

                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl md:text-5xl font-extrabold text-[var(--orange)]">
                          {testimonial.score}
                        </span>
                        <span className="text-sm text-gray-300 font-medium">pts</span>
                      </div>

                      <div className="text-lg md:text-xl font-bold line-clamp-2">{testimonial.name}</div>

                      <div className="flex items-center gap-1.5 text-[var(--orange)]">
                        <Target className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-semibold">APROVADO</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-white text-[var(--navy)] text-[10px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current text-[var(--orange)]" />
                    <span className="hidden md:inline">Verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 space-y-4">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Você será o <span className="text-[var(--orange)]">próximo sucesso!</span>
            </p>
            <p className="text-gray-300 text-lg md:text-xl">
              Transforme sua redação e conquiste a aprovação dos seus sonhos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
