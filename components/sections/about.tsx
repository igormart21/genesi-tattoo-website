import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function About() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 w-full h-full stars-bg opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1 group max-w-xl mx-auto lg:mx-0">
                        {/* Technical Corners */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/30 z-20 group-hover:border-primary transition-colors duration-500"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/30 z-20 group-hover:border-primary transition-colors duration-500"></div>

                        <div className="relative aspect-[3/4] overflow-hidden border border-white/5 shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('/images/IMG_8990-2048x1365-1.jpg.webp')" }}
                            ></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                            {/* Technical Overlay */}
                            <div className="absolute inset-0 pointer-events-none border border-white/5">
                                <div className="absolute top-4 left-4 text-[10px] font-mono text-white/50 tracking-widest">FIG. 001</div>
                                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/50 tracking-widest">EST. 2024</div>
                            </div>
                        </div>

                        {/* Texture decoration - kept subtle */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
                        <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/10 -z-10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8 order-1 lg:order-2 relative z-20">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-xs font-mono text-primary tracking-widest uppercase">Sobre o Estúdio</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                                Mais que tinta, <br />
                                <span className="text-primary italic">uma experiência.</span>
                            </h2>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                            <p>
                                Na <strong className="text-foreground font-semibold">Gênesis Tattoo Art</strong>, cada tatuagem é construída com intenção.
                                Localizados no coração de Moema, transformamos ideias em arte autoral com uma estética vintage moderna inconfundível.
                            </p>
                            <p>
                                Do primeiro contato ao cuidado pós-sessão, entregamos um atendimento humano, em um ambiente seguro e acolhedor, onde sua história ganha vida na pele através de técnicas refinadas e traços precisos.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button asChild size="lg" className="relative overflow-hidden border-primary/50 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group" variant="outline">
                                <Link href="/portfolio">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Conhecer o Portfólio
                                        <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
