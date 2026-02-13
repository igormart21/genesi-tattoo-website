"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const styles = [
    {
        id: "fineline",
        label: "Fine Line",
        description: "Traços finos, delicados e elegantes. Perfeito para escritas, botânicas e artes minimalistas.",
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e11?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "blackwork",
        label: "Blackwork",
        description: "Impacto visual com tinta preta sólida. Geometria, pontilhismo e ilustrações marcantes.",
        image: "https://images.unsplash.com/photo-1590246294326-003884cb954a?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: "oldschool",
        label: "Old School",
        description: "O clássico que nunca morre. Linhas grossas, cores sólidas e iconografia tradicional.",
        image: "https://images.unsplash.com/photo-1590246294326-003884cb954a?q=80&w=1974&auto=format&fit=crop", // Placeholder image
    },
    {
        id: "realismo",
        label: "Realismo",
        description: "Técnica focada na reprodução fiel de fotografias, retratos e texturas naturais.",
        image: "https://images.unsplash.com/photo-1562962245-e2dca1c045b4?q=80&w=1976&auto=format&fit=crop",
    },
    {
        id: "aquarela",
        label: "Aquarela",
        description: "Cores vibrantes e fluidas, imitando a técnica de pintura em aquarela com manchas e transições suaves.",
        image: "https://images.unsplash.com/photo-1598371839696-5c5bb6eb4327?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "/images/aquarela-1.jpg",
            "/images/aquarela-renata.jpg",
            "/images/2026-02-06 08_41_13.070-0300.jpg",
            "/images/20240714_223219.jpg",
            "/images/20241117_191445.jpg",
            "/images/20250723_174957.jpg",
            "/images/IMG-20231024-WA0039.jpg",
            "/images/Rio Janeiro 3.jpg"
        ]
    },
    {
        id: "comics",
        label: "Comics",
        description: "Inspirado em HQs, animes e cultura pop. Cores sólidas, traços marcantes e muita personalidade.",
        image: "https://images.unsplash.com/photo-1568515045052-5853e527d21c?q=80&w=1974&auto=format&fit=crop",
        gallery: [
            "/images/comics/01 .jpg",
            "/images/comics/02.jpg",
            "/images/comics/03.jpg",
            "/images/comics/04.jpg",
            "/images/comics/05.jpg",
            "/images/comics/06.jpg",
            "/images/comics/07.jpg",
            "/images/comics/08.jpg",
            "/images/comics/09.jpg",
            "/images/comics/10.jpg",
            "/images/comics/11.jpg",
            "/images/comics/12.jpg",
            "/images/comics/13.jpg",
            "/images/comics/14.jpg",
            "/images/comics/15.jpg",
            "/images/comics/16.jpg",
            "/images/comics/17.jpg",
            "/images/comics/19.jpg",
            "/images/comics/20.jpg"
        ]
    },
    {
        id: "glitter",
        label: "Glitter",
        description: "Técnica que simula o efeito de brilho e glitter, trazendo um toque mágico e único para a tatuagem.",
        image: "https://images.unsplash.com/photo-1531168551408-5dc2c3771804?q=80&w=1974&auto=format&fit=crop", // Placeholder
        gallery: [
            "/images/glitter/glitter-1.jpg",
            "/images/glitter/glitter-2.jpg",
            "/images/glitter/glitter-3.jpg",
            "/images/glitter/glitter-4.jpg",
            "/images/glitter/glitter-5.jpg",
            "/images/glitter/glitter-6.jpg",
            "/images/glitter/glitter-7.jpg",
            "/images/glitter/glitter-8.jpg",
            "/images/glitter/glitter-9.jpg",
            "/images/glitter/glitter-10.jpg",
            "/images/glitter/glitter-11.jpg",
            "/images/glitter/glitter-12.jpg",
            "/images/glitter/glitter-13.jpg",
            "/images/glitter/glitter-14.jpg",
            "/images/glitter/glitter-15.jpg",
            "/images/glitter/glitter-16.jpg",
            "/images/glitter/glitter-17.jpg",
            "/images/glitter/glitter-18.jpg"
        ]
    }
];

export function Styles() {
    return (
        <section className="py-24 bg-muted/30 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-serif font-bold">Estilos & Especialidades</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Dominamos diversas técnicas para materializar sua visão com maestria.
                    </p>
                </div>

                <Tabs defaultValue="fineline" className="w-full max-w-5xl mx-auto">
                    <TabsList className="justify-center flex flex-wrap gap-1 bg-background/50 border border-white/5 p-1 h-auto mb-8 rounded-none w-fit mx-auto">
                        {styles.map((style) => (
                            <TabsTrigger
                                key={style.id}
                                value={style.id}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium py-3 px-6 rounded-none min-w-[120px] transition-all duration-300"
                            >
                                {style.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {styles.map((style) => (
                        <TabsContent key={style.id} value={style.id} className="mt-8 animate-in fade-in zoom-in-95 duration-500">
                            <Card className="bg-background border-white/5 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="h-64 md:h-[400px] relative overflow-hidden group">
                                            {style.gallery ? (
                                                <Carousel
                                                    className="w-full h-full"
                                                    opts={{ loop: true }}
                                                    plugins={[
                                                        Autoplay({
                                                            delay: 3000,
                                                        }),
                                                    ]}
                                                >
                                                    <CarouselContent>
                                                        {style.gallery.map((img, index) => (
                                                            <CarouselItem key={index} className="relative h-64 md:h-[400px]">
                                                                <div className="w-full h-full relative">
                                                                    <Image
                                                                        src={img}
                                                                        alt={`${style.label} ${index + 1}`}
                                                                        fill
                                                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8 bg-black/50 border-white/20 hover:bg-primary hover:text-white" />
                                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8 bg-black/50 border-white/20 hover:bg-primary hover:text-white" />
                                                    </div>
                                                </Carousel>
                                            ) : (
                                                <>
                                                    <Image
                                                        src={style.image}
                                                        alt={style.label}
                                                        fill
                                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                                </>
                                            )}
                                        </div>
                                        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                                            <h3 className="text-3xl font-serif font-bold text-primary">{style.label}</h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed">
                                                {style.description}
                                            </p>

                                            <ul className="space-y-2 text-sm text-foreground/80">
                                                <li className="flex items-center gap-2">
                                                    <i className="bi bi-check2 text-primary"></i> Cicatrização otimizada
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <i className="bi bi-check2 text-primary"></i> Materiais premium
                                                </li>
                                            </ul>

                                            <div className="pt-4">
                                                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto">
                                                    <Link
                                                        href={`https://wa.me/5511951321091?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para uma tattoo no estilo ${style.label}.`)}`}
                                                        target="_blank"
                                                    >
                                                        <i className="bi bi-whatsapp mr-2"></i>
                                                        Quero esse estilo
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
