"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";

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
    {
        name: "Fernanda Lima",
        text: "O curso online deles me ajudou muito a começar. A didática é ótima e agora sou cliente também!",
        stars: 5,
        date: "Há 3 meses",
    },
    {
        name: "Lucas Santos",
        text: "Ambiente muito vibe, música boa e arte de primeira. O tatuador teve muita paciência para criar o desenho comigo na hora.",
        stars: 5,
        date: "Há 4 meses",
    },
    {
        name: "Marina Oliveira",
        text: "Fiz uma cobertura (cover-up) e ficou perfeito, nem parece que tinha algo embaixo. Muito obrigada!",
        stars: 5,
        date: "Há 5 meses",
    },
    {
        name: "Thiago Almeida",
        text: "Preço justo pela qualidade entregue. Vale cada centavo. Voltarei em breve para fechar o braço.",
        stars: 5,
        date: "Há 6 meses",
    },
    {
        name: "Juliana Rodrigues",
        text: "Fiz minha tatuagem aquarela e o resultado superou todas as expectativas! As cores ficaram vibrantes e a cicatrização foi perfeita. Rafael é um artista de verdade!",
        stars: 5,
        date: "Há 3 semanas",
    },
    {
        name: "André Martins",
        text: "Atendimento excepcional do início ao fim. Tiraram todas as minhas dúvidas, o estúdio é impecável e o resultado da tattoo ficou incrível. Super recomendo!",
        stars: 5,
        date: "Há 1 semana",
    },
    {
        name: "Camila Fernandes",
        text: "Fiz uma tattoo delicada no pulso e estou apaixonada! Traço fino perfeito, sem borrar nada. O cuidado com os detalhes é impressionante.",
        stars: 5,
        date: "Há 2 dias",
    },
    {
        name: "Roberto Silva",
        text: "Já tinha outras tatuagens mas essa do Gênesis foi diferente. Trabalho limpo, profissional e com muito cuidado. Virei cliente fiel!",
        stars: 5,
        date: "Há 1 mês",
    },
    {
        name: "Patrícia Souza",
        text: "Melhor experiência! Desde o orçamento até a execução foi tudo perfeito. A tattoo cicatrizou super bem e as cores continuam vivas. Voltarei com certeza!",
        stars: 5,
        date: "Há 2 meses",
    },
    {
        name: "Felipe Moreira",
        text: "Fiz uma tattoo grande em estilo comics e ficou sensacional! O Rafael captou exatamente a vibe que eu queria. Estúdio top, equipamentos de primeira. Nota 1000!",
        stars: 5,
        date: "Há 3 semanas",
    },
    {
        name: "Renata Cardoso",
        text: "Simplesmente perfeito! A atenção aos detalhes, o cuidado com a higiene e o talento do tatuador são impressionantes. Minha tattoo ficou exatamente como eu sonhei. Recomendo de olhos fechados!",
        stars: 5,
        date: "Há 5 dias",
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
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-muted/30 border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,161,91,0.1)] h-full">
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

                <div className="pt-8 flex justify-center">
                    <Link href="https://share.google/K5W6G3kxexRKUmwnk" target="_blank">
                        <Button variant="outline" className="gap-2">
                            <i className="bi bi-google"></i>
                            Avaliar no Google
                        </Button>
                    </Link>
                </div>
                <div className="pt-2">
                    <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                        Média <strong>5.0</strong> de 5 baseada em avaliações no Google
                    </p>
                </div>
            </div>
        </section>
    );
}
