"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function LinksPage() {
    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
            {/* Background with Image and Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay"
                    style={{ backgroundImage: "url('/images/studio/20260210_164313.jpg')" }}
                ></div>
                {/* Noise overlay */}
                <div className="absolute inset-0 bg-noise opacity-30 z-20 pointer-events-none mix-blend-soft-light"></div>
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
