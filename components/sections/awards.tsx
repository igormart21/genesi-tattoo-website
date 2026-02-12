"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const awards = [
    { src: "/images/studio/award_1.jpeg", alt: "Tattoo Week Award 1" },
    { src: "/images/studio/award_2.jpeg", alt: "Tattoo Week Award 2" },
    { src: "/images/studio/award_3.jpeg", alt: "Tattoo Week Award 3" },
    { src: "/images/studio/award_4.jpeg", alt: "Tattoo Week Award 4" },
];

export function Awards() {
    return (
        <section className="relative py-24 bg-black overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                            Excellence Verified
                        </span>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                            7x <span className="text-primary">TATTOO WEEK</span> WINNER
                        </h2>
                        <div className="h-1 w-24 bg-primary/50 mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed">
                            Reconhecimento na maior convenção de tatuagem do mundo. <br className="hidden md:block" />
                            A prova de que arte, técnica e dedicação constroem um legado.
                        </p>
                    </div>
                </div>

                {/* Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, i) => (
                        <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-white/5">
                            {/* Image */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <Image
                                    src={award.src}
                                    alt={award.alt}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Tech Corners */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-primary font-mono text-[10px] tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    AWARD_ID: 00{i + 1}
                                </div>
                                <div className="h-px w-0 group-hover:w-full bg-primary/50 transition-all duration-500 ease-out" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Ribbon */}
                <div className="mt-16 flex justify-center">
                    <div className="flex items-center gap-8 py-4 px-12 border-t border-b border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white font-serif">23+</div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Anos de XP</div>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white font-serif">70+</div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Prêmios</div>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white font-serif">Elite</div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Artist Rank</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
