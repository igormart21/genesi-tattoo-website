"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const team = [
    {
        id: "rafael",
        name: "Rafael Oliveira",
        role: "Tatuador Senior & Especialista em Realismo",
        image: "/images/team/Bio-Rafael.webp",
        bio: "Com anos de experiência e um olhar apurado para detalhes, Rafael transforma histórias em arte viva na pele. Especialista em realismo e sombreamento, suas obras capturam a essência e a profundidade de cada referência.",
        instagram: "https://www.instagram.com/genesistattooart", // Placeholder if specific one not provided
        specialties: ["Realismo", "Blackwork", "Portrait"]
    }
];

export function Team() {
    return (
        <section className="py-12 md:py-24 bg-black relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
            {/* Stars Background */}
            <div className="absolute inset-0 w-full h-full stars-bg opacity-30"></div>

            {/* Corner Frame Accents - hidden on very small screens or adjusted */}
            <div className="hidden sm:block absolute top-12 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30 z-20"></div>
            <div className="hidden sm:block absolute top-12 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 z-20"></div>
            <div className="hidden sm:block absolute bottom-12 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30 z-20"></div>
            <div className="hidden sm:block absolute bottom-12 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30 z-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10 md:mb-16 space-y-4 md:space-y-6">
                    {/* Technical Header Info */}
                    <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-white/50 mb-2">
                        <span>MÓDULO.EQUIPE</span>
                        <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
                        <span>STATUS: ATIVO</span>
                    </div>

                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-widest relative z-10">
                            GENESIS <span className="text-primary italic">ARTISTAS</span>
                        </h2>
                        <div className="absolute -inset-2 bg-primary/5 blur-xl -z-10 rounded-full"></div>
                    </div>

                    <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-xs md:text-sm tracking-wide border-l border-primary/30 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        // PROTOCOL: EXCELLENCE <br />
                        Mestres na arte de eternizar momentos. Técnica, precisão e alma.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {team.map((member) => (
                        <div key={member.id} className="group relative">
                            {/* Card Border / Technical Frame */}
                            <div className="absolute -inset-px border border-white/10 z-0"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-primary/20 pointer-events-none"></div>

                            <Card className="relative bg-transparent border-0 overflow-hidden h-full rounded-none">
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="relative aspect-[3/4] overflow-hidden border-b border-white/5">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                                        {/* Technical Overlay on Image */}
                                        <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                                            <div className="text-[8px] font-mono text-white/40">ID: {member.id.toUpperCase()}</div>
                                            <div className="w-8 h-px bg-primary/40"></div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-full p-6">
                                            <h3 className="text-2xl font-serif font-bold text-white mb-1 tracking-wider">{member.name}</h3>
                                            <p className="text-primary font-mono text-xs tracking-widest uppercase">{member.role}</p>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow space-y-6 bg-black/50 backdrop-blur-sm">
                                        <div className="flex items-start gap-2">
                                            <span className="text-primary text-xs font-mono mt-1">{">"}</span>
                                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                                {member.bio}
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Specialties_Loader</div>
                                            <div className="flex flex-wrap gap-2">
                                                {member.specialties.map(spec => (
                                                    <Badge key={spec} variant="outline" className="border-white/10 text-white/70 hover:border-primary/50 hover:text-primary transition-colors text-[10px] uppercase tracking-wide rounded-none font-mono">
                                                        {spec}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4 mt-auto w-full space-y-3">
                                            <Button asChild className="w-full bg-primary/10 text-primary border border-primary/40 hover:bg-primary hover:text-black rounded-none uppercase font-mono text-xs tracking-widest transition-all group/btn h-10 relative overflow-hidden">
                                                <Link
                                                    href={`https://wa.me/5511951321091?text=${encodeURIComponent(`Olá! Gostaria de agendar um horário com o tatuador ${member.name}.`)}`}
                                                    target="_blank"
                                                >
                                                    <span className="absolute inset-0 bg-primary/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                                                    <span className="relative flex items-center gap-2 z-10 font-bold">
                                                        <i className="bi bi-whatsapp"></i>
                                                        AGENDAR_SESSÃO
                                                    </span>
                                                </Link>
                                            </Button>

                                            <Button asChild variant="ghost" className="w-full text-white/30 hover:text-white hover:bg-white/5 rounded-none uppercase font-mono text-[10px] tracking-widest transition-all h-6 hover:tracking-[0.2em] duration-300">
                                                <Link href={member.instagram} target="_blank">
                                                    <span>[ VER_PORTFÓLIO ]</span>
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Bottom Technical Bar */}
                <div className="mt-16 border-t border-white/5 pt-4 flex justify-between items-center text-[8px] font-mono text-white/30">
                    <div className="hidden md:block">GENESIS.SYSTEM.V2</div>
                    <div className="flex gap-1">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className={`w-1 h-2 ${i % 3 === 0 ? 'bg-primary/20' : 'bg-white/5'}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
