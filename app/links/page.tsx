"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function LinksPage() {
    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
            {/* Background with Image and Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Image Background */}
                <div
                    className="w-full h-full bg-cover opacity-80"
                    style={{
                        backgroundImage: "url('/images/studio/20260210_193923.jpg')",
                        backgroundPosition: "center bottom",
                        transform: "scale(1.4) translateY(15%)",
                        transformOrigin: "bottom center"
                    }}
                />

                {/* Noise overlay */}
                <div className="absolute inset-0 bg-noise opacity-30 z-20 pointer-events-none mix-blend-soft-light" />
            </div>

            <div className="container relative z-30 px-4 py-12 flex flex-col items-center justify-center min-h-[100dvh]">

                {/* Global Overlays (Camera aesthetic) */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Scanlines/Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60 pointer-events-none" />
                </div>

                {/* Corner Borders */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/10 pointer-events-none z-20" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/10 pointer-events-none z-20" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/10 pointer-events-none z-20" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/10 pointer-events-none z-20" />

                {/* Header Tech Markers */}
                <div className="absolute top-4 left-0 right-0 px-8 flex justify-between items-start z-20 pointer-events-none">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-primary/80 font-mono text-[10px] sm:text-xs tracking-widest">LIVE FEED</span>
                        </div>
                        <span className="text-white/40 font-mono text-[9px] sm:text-[10px]">CAM_01</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-[9px] sm:text-[10px] font-mono text-white/40 text-right sm:text-left">
                        <span>ISO 800</span>
                        <span>f/1.8</span>
                        <span>1/120</span>
                    </div>
                </div>

                <div className="w-full max-w-md space-y-10 animate-fade-in-up relative z-30">
                    {/* Header Profile */}
                    <div className="text-center space-y-6 pt-12 sm:pt-4">
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

                        <div className="space-y-4">
                            {/* Tech Title Label */}
                            <div className="flex items-center justify-center gap-3 opacity-80">
                                <span className="text-primary text-[10px] font-mono tracking-widest">002</span>
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[10px] font-mono tracking-widest">THE SPACE</span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-widest uppercase italic leading-none">
                                O ESTÚDIO<span className="text-primary text-3xl sm:text-4xl leading-none">.</span>
                            </h1>
                            <div className="flex items-center justify-center relative">
                                <p className="text-muted-foreground font-light text-xs sm:text-sm tracking-widest leading-relaxed border-l border-primary/30 pl-4 py-1 max-w-[280px] bg-black/20 backdrop-blur-sm">
                                    Um santuário de arte e expressão. Ambiente estéril, acolhedor e projetado para sua máxima segurança e conforto.
                                </p>
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
            `}</style>
        </main>
    );
}
