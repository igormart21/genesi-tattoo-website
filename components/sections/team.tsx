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
        role: "Tatuador Senior & Especialista em Realismo", // Keeping this as per prompt reference, but bio says other styles. Let's trust the bio for details.
        image: "/images/team/Bio-Rafael.webp",
        bio: `Rafael Oliveira, tatuador profissional, são mais de 23 anos de experiência no mercado. Especialista nos estilos Aquarela, Colorido, Comics e Glitter, construiu uma carreira sólida e reconhecida nacionalmente.

Ao longo de sua trajetória, Rafael conquistou mais de 70 prêmios, incluindo 7 premiações na Tattoo Week, um dos maiores eventos de tatuagem do mundo.

Com toda a vivência prática e conhecimento técnico acumulados ao longo dos anos, ministra workshop e mentorias presenciais além de atuara como jurado em convenções de tatuagem.`,
        instagram: "https://www.instagram.com/genesistattooart",
        specialties: ["Aquarela", "Colorido", "Comics", "Glitter", "Realismo"]
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
                            GENESIS <span className="text-primary italic">ARTISTA</span>
                        </h2>
                        <div className="absolute -inset-2 bg-primary/5 blur-xl -z-10 rounded-full"></div>
                    </div>

                    <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-xs md:text-sm tracking-wide border-l border-primary/30 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        // PROTOCOL: EXCELLENCE <br />
                        Mestres na arte de eternizar momentos. Técnica, precisão e alma.
                    </p>
                </div>

                <div className="flex justify-center">
                    {team.map((member) => (
                        <div key={member.id} className="group relative w-full max-w-4xl">
                            {/* Card Border / Technical Frame */}
                            <div className="absolute -inset-px border border-white/10 z-0"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-primary/20 pointer-events-none"></div>

                            <Card className="relative bg-transparent border-0 overflow-hidden h-full rounded-none">
                                <CardContent className="p-0 flex flex-col md:flex-row h-full">
                                    {/* Image Section - Left on desktop */}
                                    <div className="relative aspect-[3/4] md:aspect-[3/4] md:w-2/5 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 md:opacity-60"></div>

                                        {/* Technical Overlay on Image */}
                                        <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                                            <div className="text-[8px] font-mono text-white/40">ID: {member.id.toUpperCase()}</div>
                                            <div className="w-8 h-px bg-primary/40"></div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-full p-6 md:hidden">
                                            <h3 className="text-2xl font-serif font-bold text-white mb-1 tracking-wider">{member.name}</h3>
                                            <p className="text-primary font-mono text-xs tracking-widest uppercase">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* Text Section - Right on desktop */}
                                    <div className="p-6 md:p-10 flex flex-col flex-grow space-y-6 bg-black/50 backdrop-blur-sm md:w-3/5 justify-center">
                                        <div className="hidden md:block mb-2">
                                            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2 tracking-wider">{member.name}</h3>
                                            <p className="text-primary font-mono text-sm tracking-widest uppercase">{member.role}</p>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-primary text-xs font-mono mt-1">{">"}</span>
                                            <div className="text-gray-400 text-sm md:text-base leading-relaxed font-light whitespace-pre-line space-y-4">
                                                {member.bio}
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Specialties_Loader</div>
                                            <div className="flex flex-wrap gap-2">
                                                {member.specialties.map(spec => (
                                                    <Badge key={spec} variant="outline" className="border-white/10 text-white/70 hover:border-primary/50 hover:text-primary transition-colors text-[10px] md:text-xs uppercase tracking-wide rounded-none font-mono py-1 px-3">
                                                        {spec}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-8 mt-auto w-full space-y-3 md:max-w-md">
                                            <Button asChild className="w-full bg-primary/10 text-primary border border-primary/40 hover:bg-primary hover:text-black rounded-none uppercase font-mono text-xs tracking-widest transition-all group/btn h-12 relative overflow-hidden">
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

                                            <Button asChild variant="ghost" className="w-full text-white/30 hover:text-white hover:bg-white/5 rounded-none uppercase font-mono text-[10px] tracking-widest transition-all h-8 hover:tracking-[0.2em] duration-300">
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
