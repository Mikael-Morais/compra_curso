"use client"

import Image from "next/image"
import { Trophy, Star, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface CentralHighlightProps {
    name: string
    achievement: string
    subtitle: string
    image: string
}

export function CentralHighlight({ name, achievement, subtitle, image }: CentralHighlightProps) {
    return (
        <div className="relative w-full max-w-5xl mx-auto group">
            {/* 1. ANIMAÇÃO DE FUNDO ROBUSTA (Atmosphere Glow) */}
            {/* Um brilho grande e difuso que pulsa atrás do card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] bg-primary/20 blur-[80px] rounded-full animate-pulse pointer-events-none" />

            {/* Efeito de rotação suave atrás (Conic Gradient) */}
            <div className="absolute -inset-1 rounded-[14px] bg-linear-to-r from-primary via-secondary to-primary opacity-30 blur-lg transition-all duration-1000 group-hover:opacity-60 group-hover:blur-xl animate-tilt" />

            {/* 2. CARD PRINCIPAL (Layout Horizontal) */}
            <div className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-card/80 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row">

                {/* --- SEÇÃO DA IMAGEM (HORIZONTAL) --- */}
                {/* Ocupa largura total no mobile, e 60% no desktop */}
                <div className="relative w-full h-64 md:h-auto md:w-[60%] shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay" />
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradiente para misturar a imagem com o painel de texto no mobile */}
                    <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-card z-20" />

                    {/* Badge de Troféu Flutuante */}
                    <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-lg">
                        <Trophy className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                </div>

                {/* --- SEÇÃO DE CONTEÚDO --- */}
                <div className="relative flex flex-col justify-center items-center md:items-start p-6 md:p-10 w-full md:w-[40%] text-center md:text-left z-30">

                    <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{name}</h3>
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
                        </div>

                        <p className="text-sm font-medium uppercase tracking-widest text-primary/80">
                            Pontuação Máxima
                        </p>
                    </div>

                    {/* Score Gigante */}
                    <div className="my-6 relative">
                        <span className="text-4xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-primary via-primary to-secondary drop-shadow-sm">
                            {achievement}
                        </span>
                        {/* Brilho atrás do número */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl -z-10 rounded-full" />
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
                        {subtitle}
                    </p>

                    {/* Botão ou Indicador Visual (Opcional) */}
                    <div className="mt-6 w-16 h-1 rounded-full bg-primary/20 overflow-hidden">
                        <div className="h-full bg-primary w-2/3 animate-[shimmer_2s_infinite]" />
                    </div>
                    <div className="mt-6 w-16 max-h-none sm:h-1 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 animate-[shimmer_2s_infinite]" />
                    </div>
                    <div className="mt-6 w-16 max-h-none sm:h-1 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 animate-[shimmer_2s_infinite]" />
                    </div>
                </div>
            </div>
        </div>
    )
}