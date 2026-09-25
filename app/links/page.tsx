"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function LinksPage() {
    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
            {/* Background with Image and Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                {/* Image Background */}
                <div
                    className="w-full h-full bg-cover"
                    style={{
                        backgroundImage: "url('/images/studio/20260210_193923.jpg')",
                        backgroundPosition: "center bottom",
                        transform: "scale(1.4) translateY(15%)",
                        transformOrigin: "bottom center"
                    }}
                />

                {/* Base Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />

                {/* Global Overlays */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {/* Dither Pattern */}
                    <div className="absolute inset-0 opacity-20 dither-pattern" />

                    {/* Scanlines/Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60" />
                </div>
            </div>

            {/* Tech HUD Overlays */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                {/* Top Left: Live Feed */}
                <div className="absolute top-8 left-8 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-primary/80 font-mono text-[10px] tracking-widest">LIVE FEED</span>
                    </div>
                    <span className="text-white/40 font-mono text-[10px]">CAM_03</span>
                </div>

                {/* Top Right: Camera Settings */}
                <div className="absolute top-8 right-8 flex flex-col items-end gap-1 text-[10px] font-mono text-white/40">
                    <span>ISO 800</span>
                    <span>f/1.8</span>
                    <span>1/120</span>
                </div>

                {/* Bottom Left: Coordinates */}
                <div className="absolute bottom-8 left-8">
                    <div className="w-24 h-24 border-l border-b border-white/20 relative hidden sm:block">
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary" />
                        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/40">
                            COORD: <br />
                            -23.5924° S <br />
                            -46.6644° W
                        </div>
                    </div>
                    {/* Mobile Coord Fallback */}
                    <div className="sm:hidden text-[10px] border-l border-white/20 pl-2 ml-2 mb-2 font-mono text-white/40">
                        COORD: <br />
                        -23.5924° S <br />
                        -46.6644° W
                    </div>
                </div>

                {/* Bottom Right: Studio ID */}
                <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
                    <span className="text-white/30 text-[10px] font-mono">GENESIS TATTOO STUDIO</span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-primary' : 'bg-white/10'}`} />
                        ))}
                    </div>
                </div>

                {/* Corner Borders */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-t-2 border-l-2 border-white/10" />
                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-t-2 border-r-2 border-white/10" />
                <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-b-2 border-l-2 border-white/10" />
                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-b-2 border-r-2 border-white/10" />
            </div>

            <div className="container relative z-30 px-4 py-12 flex flex-col items-center justify-center min-h-[100dvh]">
                <div className="w-full max-w-md space-y-10 animate-fade-in-up">
                    {/* Header Profile */}
                    <div className="text-center space-y-6">
                        {/* Premium Brand Icon Block */}
                        <div className="relative inline-block">
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border border-primary/30 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(198,161,91,0.15)] group transition-all duration-500 hover:border-primary/60">
                                {/* Dithered accent circle */}
                                <div className="absolute inset-0 dither-pattern opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>

                                <span className="text-5xl font-serif font-bold text-primary italic tracking-tighter drop-shadow-[0_0_10px_rgba(198,161,91,0.5)]">
                                    G.
                                </span>
                            </div>

                            {/* Technical notations around the circle */}
                            <div className="absolute -top-2 -right-6 text-[8px] font-mono text-primary/60 tracking-widest uppercase">
                                EST. 2026
                            </div>
                            <div className="absolute -bottom-1 -left-4 text-[8px] font-mono text-white/40 tracking-widest uppercase">
                                MOEMA • SP
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-widest uppercase italic">
                                Gênesis Tattoo Art<span className="text-primary text-3xl sm:text-4xl leading-none">.</span>
                            </h1>
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-px w-8 bg-primary/40"></div>
                                <p className="text-muted-foreground font-light text-sm tracking-widest uppercase">
                                    Arte na pele. História na alma.
                                </p>
                                <div className="h-px w-8 bg-primary/40"></div>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base shadow-[0_0_15px_rgba(198,161,91,0.2)] transition-all hover:shadow-[0_0_20px_rgba(198,161,91,0.4)] hover:-translate-y-1">
                            <Link href="/">
                                Nosso Site Oficial
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary h-14 text-base backdrop-blur-sm transition-all hover:-translate-y-1">
                            <Link href="/agendamento">
                                Agendar Sessão
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary h-14 text-base backdrop-blur-sm transition-all hover:-translate-y-1">
                            <Link href="/portfolio">
                                Ver Portfólio
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary h-14 text-base backdrop-blur-sm transition-all hover:-translate-y-1">
                            <Link href="/curso">
                                Cursos para Tatuadores
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary h-14 text-base backdrop-blur-sm transition-all hover:-translate-y-1">
                            <Link href="https://wa.me/5511951321091" target="_blank">
                                <i className="bi bi-whatsapp mr-2 text-green-500"></i> Falar no WhatsApp
                            </Link>
                        </Button>

                        {/* Bloco de Parceria - Remoção de Tatuagem a Laser (Dra. Alessandra Rocha) */}
                        <div className="relative group rounded-2xl border border-primary/40 bg-black/70 backdrop-blur-md p-6 space-y-4 text-left transition-all duration-300 hover:border-primary/80 shadow-[0_0_25px_rgba(198,161,91,0.12)]">
                            {/* Header do Card com Badge e Profissional */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                                <Badge variant="outline" className="border-primary/60 text-primary text-[11px] uppercase tracking-widest font-mono bg-primary/10 px-3 py-1 w-fit">
                                    <i className="bi bi-handshake mr-1.5"></i> Parceria Especializada
                                </Badge>
                                <span className="text-xs font-mono text-white/80 flex items-center gap-1.5">
                                    <i className="bi bi-patch-check-fill text-primary"></i> Dra. Alessandra Rocha
                                </span>
                            </div>

                            {/* Conteúdo Principal */}
                            <div className="space-y-2">
                                <h3 className="font-serif font-bold text-xl text-white tracking-wide">
                                    Remoção de Tatuagem a Laser
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Quer remover ou clarear uma tatuagem para um novo projeto (cover-up)? Atendimento especializado de remoção e clareamento a laser em parceria com a Dra. Alessandra Rocha.
                                </p>
                            </div>

                            {/* Botão de Agendamento */}
                            <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-semibold shadow-md transition-all hover:scale-[1.01]">
                                <Link href="https://maapp.com.br/alessandarocha?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-calendar-check mr-2"></i> Agendar Avaliação para Remoção
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-8">
                        <p className="text-xs text-muted-foreground/60">
                            © {new Date().getFullYear()} Gênesis Tattoo Art
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .dither-pattern {
                    background-image: 
                        repeating-linear-gradient(0deg, transparent 0px, transparent 1px, #C6A15B 1px, #C6A15B 2px),
                        repeating-linear-gradient(90deg, transparent 0px, transparent 1px, #C6A15B 1px, #C6A15B 2px);
                    background-size: 3px 3px;
                }
                .bg-radial-gradient-vignette {
                    background-image: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
                }
            `}</style>
        </main>
    );
}
