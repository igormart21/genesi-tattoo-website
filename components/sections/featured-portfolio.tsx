"use client";

import Image from "next/image";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Placeholder data - in a real app this would come from a CMS or config file
const portfolioItems = [1, 2, 3, 4, 5, 6].map((i) => ({
    id: i,
    image: `https://images.unsplash.com/photo-${1560000000000 + i}?q=80&w=600&auto=format&fit=crop`,
    // Just using a consistent placeholder logic or specific Unsplash IDs if I had them. 
    // I'll use specific nature/tattoo keywords for Unsplash source to get variety
    imageSrc: `https://source.unsplash.com/random/800x800?tattoo,ink&sig=${i}`,
    title: `Trabalho Autoral #${i}`,
    style: i % 2 === 0 ? "Blackwork" : "Fine Line",
}));

// Unsplash source is deprecated, so I'll use a direct reliable placeholder service or static Unsplash IDs.
// I will use fixed URLs for reliability.
const fixedPortfolio = [
    { id: 1, src: "/images/comics/05.jpg", style: "Comics", title: "Full Color Anime" },
    { id: 2, src: "/images/2026-02-06 08_41_13.070-0300.jpg", style: "Aquarela", title: "Aquarela Autoral" },
    { id: 3, src: "/images/comics/14.jpg", style: "Comics", title: "Geek / Comics" },
    { id: 4, src: "/images/IMG-20231024-WA0039.jpg", style: "Aquarela", title: "Floral Aquarelado" },
    { id: 5, src: "/images/comics/08.jpg", style: "Comics", title: "Personagem Geek" },
    { id: 6, src: "/images/20250723_174957.jpg", style: "Aquarela", title: "Arte Fluida" },
];

export function FeaturedPortfolio() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-3 opacity-60">
                            <div className="w-8 h-px bg-primary"></div>
                            <span className="text-xs font-mono text-primary tracking-widest uppercase">Galeria</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-4">Portfólio em Destaque</h2>
                        <p className="text-muted-foreground max-w-lg">
                            Uma seleção de trabalhos recentes que representam nossa identidade e compromisso com a arte.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
                        <Link href="/portfolio">Ver Portfólio Completo</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fixedPortfolio.map((item) => (
                        <Dialog key={item.id}>
                            <DialogTrigger asChild>
                                <div className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer border border-white/5">
                                    <div className="absolute inset-0 z-20 pointer-events-none">
                                        <GlowingEffect
                                            spread={40}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                            borderWidth={4}
                                        />
                                    </div>
                                    <div className="relative z-10 w-full h-full">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                            <p className="text-white font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {item.title}
                                            </p>
                                            <span className="text-primary text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                {item.style}
                                            </span>
                                            <Button size="sm" variant="secondary" className="mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                Ver detalhes
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="relative aspect-square md:aspect-auto h-full min-h-[300px] md:min-h-[400px]">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center space-y-6">
                                        <DialogHeader>
                                            <Badge className="w-fit bg-primary/20 text-primary hover:bg-primary/20">{item.style}</Badge>
                                            <DialogTitle className="text-3xl font-serif pt-4">{item.title}</DialogTitle>
                                            <DialogDescription className="text-lg">
                                                Trabalho autoral desenvolvido exclusivamente para o cliente.
                                                <br />Cada detalhe pensado para harmonizar com a anatomia do corpo.
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="space-y-4 pt-4">
                                            <div className="flex gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1"><i className="bi bi-clock"></i> 4-6 horas</div>
                                                <div className="flex items-center gap-1"><i className="bi bi-person"></i> Artista Sênior</div>
                                            </div>
                                            <Separator className="bg-white/10" />
                                            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                                <Link
                                                    href={`https://wa.me/5511951321091?text=${encodeURIComponent(`Olá! Vi o trabalho "${item.title}" no site e gostaria de um orçamento similar.`)}`}
                                                    target="_blank"
                                                >
                                                    <i className="bi bi-whatsapp mr-2"></i>
                                                    Quero um orçamento dessa ideia
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
