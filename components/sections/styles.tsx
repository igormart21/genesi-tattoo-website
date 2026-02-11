"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-background/50 border border-white/5 p-1">
                        {styles.map((style) => (
                            <TabsTrigger
                                key={style.id}
                                value={style.id}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
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
                                        <div className="h-64 md:h-[400px] relative">
                                            <Image
                                                src={style.image}
                                                alt={style.label}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20" />
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
