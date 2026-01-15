"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface ScoreCardProps {
    name: string
    score: string
    image: string
    exam: string
    subtitle?: string
    delay?: number
    variant?: "featured" | "standard"
}

export function ScoreCard({
    name,
    score,
    image,
    exam,
    subtitle,
    delay = 0,
    variant = "standard"
}: ScoreCardProps) {

    const isFeatured = variant === "featured"

    return (
        <div
            className={cn(
                "group relative flex overflow-hidden rounded-[14px] bg-card border border-(--navy-light)",
                "transition-all duration-500 hover:scale-105 hover:border-primary/50",
                "animate-in fade-in slide-in-from-bottom-4",
                // LÓGICA DE LAYOUT:
                // Mobile Featured: Row (lado a lado), items-start (alinha texto ao topo)
                // Desktop Featured/Standard: Col (vertical)
                isFeatured
                    ? "w-full flex-row items-start sm:flex-col sm:w-64 md:w-72"
                    : "flex-col w-36 md:w-44 shrink-0",
            )}
            style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* --- CONTAINER DA IMAGEM --- */}
            <div className={cn(
                "relative overflow-hidden shrink-0", // shrink-0 impede que a imagem amasse no mobile
                // Fundo sutil atrás da pessoa (opcional, ajuda se a foto for PNG transparente)
                "bg-muted/30",

                // DIMENSÕES:
                isFeatured
                    ? "w-40 h-40 sm:w-full sm:h-64 md:h-72" // Mobile: Quadrado fixo 32 | Desktop: Alto
                    : "w-full h-32 md:h-36"
            )}>
                <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110 z-0"
                />

                {/* --- CORREÇÃO 3: GRADIENTE OVERLAY --- */}
                {/* Isso cria o efeito de 'fade' na base da foto para a cor do card */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-card z-10" />

                {/* Badge */}
                <div className={cn(
                    "absolute px-2 py-0.5 rounded-full bg-secondary/90 backdrop-blur-sm text-xs font-semibold text-secondary-foreground z-20",
                    // No mobile featured, joga a badge para baixo esquerda para não cobrir rosto
                    isFeatured
                        ? "left-2 bottom-2 sm:left-auto sm:bottom-auto sm:top-2 sm:right-2"
                        : "top-2 right-2"
                )}>
                    {exam}
                </div>
            </div>

            {/* --- CONTEÚDO --- */}
            <div className={cn(
                "flex flex-col gap-1 p-3 z-20 relative",
                // CORREÇÃO 1: Alinhamento
                // isFeatured Mobile: items-start (esquerda) e justify-start (topo)
                isFeatured
                    ? "items-start text-left sm:items-start sm:text-left flex-1 pt-4"
                    : "items-center text-center w-full"
            )}>
                <p className="text-sm font-medium text-foreground line-clamp-1">{name}</p>
                <div className={cn("flex flex-col", isFeatured ? "items-start sm:items-start" : "items-center")}>
                    <span className="text-2xl md:text-3xl font-black text-primary tracking-tight">{score}</span>
                    {subtitle && <span className="text-[10px] text-muted-foreground mt-0.5">{subtitle}</span>}
                </div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />
        </div>
    )
}