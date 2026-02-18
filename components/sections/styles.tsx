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
        description: "Inspirado em HQs, animes e cultura pop. Reproduções fiéis com cores sólidas e traços marcantes.",
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
    },
    {
        id: "pet",
        label: "Pet",
        description: "Homenageie seu melhor amigo com um retrato fiel ou uma arte estilizada.",
        image: "/images/pets/Pet 5.jpg",
        gallery: [
            "/images/pets/IMG-20250925-WA0075.jpg",
            "/images/pets/Pet 1.jpg",
            "/images/pets/Pet 2.jpg",
            "/images/pets/Pet 3.jpg",
            "/images/pets/Pet 4.jpg",
            "/images/pets/Pet 5.jpg",
            "/images/pets/Pet 6.jpg",
            "/images/pets/Pet 7.jpg",
            "/images/pets/Pet 8.jpg",
            "/images/pets/Pet 9.jpg",
            "/images/pets/Pet 10.jpg",
            "/images/pets/Pet 11.jpg",
            "/images/pets/Pet 12.jpg",
            "/images/pets/Pet 13.jpg",
            "/images/pets/Pet 14.jpg",
            "/images/pets/InCollage_20230629_181043618.jpg",
            "/images/pets/InCollage_20230714_233801102.jpg",
            "/images/pets/InCollage_20230714_234054088.jpg"
        ]
    },
    {
        id: "preto-branco",
        label: "Preto e Branco",
        description: "Elegância e contraste em composições monocromáticas atemporais.",
        image: "https://images.unsplash.com/photo-1590246294326-003884cb954a?q=80&w=1974&auto=format&fit=crop",
        gallery: [
            "/images/preto e branco/Pb1.jpg",
            "/images/preto e branco/PB 3.jpg",
            "/images/preto e branco/PB 4.jpg",
            "/images/preto e branco/PB 5.jpg",
            "/images/preto e branco/PB 6.jpg",
            "/images/preto e branco/PB 8.jpg",
            "/images/preto e branco/PB 9.jpg",
            "/images/preto e branco/PB 10.jpg",
            "/images/preto e branco/PB 11.jpg",
            "/images/preto e branco/PB 12.jpg"
        ]
    },
    {
        id: "delicadas",
        label: "Delicadas",
        description: "Traços finos e sutis que realçam a beleza natural com leveza.",
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e11?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "/images/delicadas/Deli 1 .jpg",
            "/images/delicadas/Deli 2 .jpg",
            "/images/delicadas/Deli 3 .jpg",
            "/images/delicadas/Deli 4.jpg",
            "/images/delicadas/Deli 5.jpg",
            "/images/delicadas/Deli 6 .jpg",
            "/images/delicadas/Deli 8 .jpg",
            "/images/delicadas/Deli 8.jpg",
            "/images/delicadas/Deli 9 .jpg",
            "/images/delicadas/Deli 11.jpg",
            "/images/delicadas/Deli 12.jpg"
        ]
    },
    {
        id: "cobertura",
        label: "Cobertura de Cicatriz",
        description: "Transforme marcas em arte com projetos especializados para cobertura.",
        image: "https://images.unsplash.com/photo-1562962245-e2dca1c045b4?q=80&w=1976&auto=format&fit=crop",
        gallery: [
            "/images/cobertura de cicatriz/FB_IMG_1771413704576.jpg",
            "/images/cobertura de cicatriz/FB_IMG_1771414048860.jpg",
            "/images/cobertura de cicatriz/InCollage_20260217_193616144.jpg",
            "/images/cobertura de cicatriz/InCollage_20260218_164513859.jpg",
            "/images/cobertura de cicatriz/InCollage_20260217_194202017.jpg",
            "/images/cobertura de cicatriz/SaveClip.App_563279142_18535591009014372_2296656215453028895_n.jpg",
            "/images/cobertura de cicatriz/SaveClip.App_564334853_18535591018014372_1398082041535650288_n.jpg",
            "/images/cobertura de cicatriz/SaveClip.App_566036303_18535590973014372_3242002517998529309_n.jpg"
        ]
    },
    {
        id: "coverup",
        label: "Cover Up",
        description: "Renove ou cubra tatuagens antigas com uma nova arte exclusiva.",
        image: "https://images.unsplash.com/photo-1606709772863-78c633a682ac?q=80&w=2670&auto=format&fit=crop",
        gallery: [
            "/images/cover Up/FB_IMG_1771413846293.jpg",
            "/images/cover Up/FB_IMG_1771413881832.jpg",
            "/images/cover Up/InCollage_20260217_192838488.jpg",
            "/images/cover Up/InCollage_20260217_193042550.jpg",
            "/images/cover Up/InCollage_20260217_193229593.jpg",
            "/images/cover Up/InCollage_20260217_193339728.jpg",
            "/images/cover Up/InCollage_20260217_200111660.jpg",
            "/images/cover Up/InCollage_20260217_200303790.jpg",
            "/images/cover Up/InCollage_20260217_201201438.jpg",
            "/images/cover Up/InCollage_20260217_201413875.jpg",
            "/images/cover Up/InCollage_20260218_085335416.jpg",
            "/images/cover Up/InCollage_20260218_085650781.jpg",
            "/images/cover Up/InCollage_20260218_085915880.jpg",
            "/images/cover Up/InCollage_20260218_093810861.jpg",
            "/images/cover Up/InCollage_20260218_094239206.jpg",
            "/images/cover Up/InCollage_20260218_094913302.jpg"
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
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium py-3 px-6 rounded-none w-auto flex-none whitespace-nowrap transition-all duration-300"
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
                                                                <div className="w-full h-full relative bg-black/40">
                                                                    <Image
                                                                        src={img}
                                                                        alt={`${style.label} ${index + 1}`}
                                                                        fill
                                                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
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
                                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
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
