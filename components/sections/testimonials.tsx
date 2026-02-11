"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const reviews = [
    {
        name: "Carolina Silva",
        text: "Experiência incrível! O traço é impecável e o ambiente super acolhedor. Fiz minha primeira tattoo e me senti super segura.",
        stars: 5,
        date: "Há 2 semanas",
    },
    {
        name: "Rafael Mendes",
        text: "Profissionalismo nota 10. O estúdio é lindo, higienizado e o tatuador entendeu exatamente o que eu queria. Recomendo demais!",
        stars: 5,
        date: "Há 1 mês",
    },
    {
        name: "Beatriz Costa",
        text: "Amei o resultado da minha Fine Line. Delicada e perfeita. O atendimento pelo WhatsApp foi super rápido também.",
        stars: 5,
        date: "Há 3 dias",
    },
    {
        name: "João Pedro",
        text: "Melhor estúdio de Moema. Já fiz três tatuagens com eles e todas cicatrizaram perfeitamente. O estilo Old School deles é sensacional.",
        stars: 5,
        date: "Há 2 meses",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 text-center space-y-12">
                <div className="space-y-4">
                    <Badge variant="outline" className="border-primary/20 text-primary">Depoimentos</Badge>
                    <h2 className="text-4xl font-serif font-bold">O que dizem nossos clientes</h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-muted/30 border-white/5 h-full">
                                        <CardContent className="flex flex-col justify-between p-6 h-[250px]">
                                            <div className="space-y-4">
                                                <div className="flex text-primary">
                                                    {[...Array(review.stars)].map((_, i) => (
                                                        <i key={i} className="bi bi-star-fill text-xs mr-1"></i>
                                                    ))}
                                                </div>
                                                <p className="text-muted-foreground text-sm italic leading-relaxed">
                                                    "{review.text}"
                                                </p>
                                            </div>
                                            <div className="pt-4 mt-auto border-t border-white/5 flex justify-between items-center">
                                                <span className="font-serif font-bold text-foreground">{review.name}</span>
                                                <span className="text-xs text-muted-foreground opacity-50">{review.date}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                    <CarouselNext className="hidden md:flex -right-12 border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                </Carousel>

                <div className="pt-8">
                    <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                        <i className="bi bi-google"></i>
                        Média <strong>5.0</strong> de 5 baseada em avaliações no Google
                    </p>
                </div>
            </div>
        </section>
    );
}
