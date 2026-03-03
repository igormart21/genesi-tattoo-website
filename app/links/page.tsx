"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function LinksPage() {
    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
            {/* Background Carousel Setup equivalent (using static image for now per user request, but adding exactly the same overlays) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-110"
                    style={{ backgroundImage: "url('/images/studio/20260210_193923.jpg')" }}
                />
                {/* Dark Overlay per slide */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Global Overlays exactly like studio.tsx */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Dither Pattern */}
                <div className="absolute inset-0 opacity-20 dither-pattern" />

                {/* Scanlines/Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60" />
            </div>

            {/* Corner Borders exactly like studio.tsx */}
            <div className="absolute top-8 left-8 w-10 h-10 md:w-16 md:h-16 border-t-2 border-l-2 border-white/10 pointer-events-none z-20" />
            <div className="absolute top-8 right-8 w-10 h-10 md:w-16 md:h-16 border-t-2 border-r-2 border-white/10 pointer-events-none z-20" />
            <div className="absolute bottom-8 left-8 w-10 h-10 md:w-16 md:h-16 border-b-2 border-l-2 border-white/10 pointer-events-none z-20" />
            <div className="absolute bottom-8 right-8 w-10 h-10 md:w-16 md:h-16 border-b-2 border-r-2 border-white/10 pointer-events-none z-20" />

            {/* Header Tech Markers from studio.tsx */}
            <div className="absolute top-10 left-6 md:left-12 right-6 md:right-12 z-30 flex justify-between items-start pointer-events-none">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-primary/80 font-mono text-[10px] tracking-widest">LIVE FEED</span>
                    </div>
                    <span className="text-white/40 font-mono text-[10px]">CAM_01</span>
                </div>

                <div className="flex flex-col items-end lg:flex-row lg:items-center gap-1 lg:gap-8 text-[10px] font-mono text-white/40">
                    <span>ISO 800</span>
                    <span className="hidden lg:inline">f/1.8</span>
                    <span className="hidden lg:inline">1/120</span>
                </div>
            </div>

            <div className="container relative z-30 px-4 py-20 flex flex-col items-center justify-center min-h-[100dvh]">
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
