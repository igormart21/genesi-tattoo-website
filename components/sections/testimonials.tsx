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
    { name: "Carolina Silva", text: "Experiência incrível! O traço é impecável e o ambiente super acolhedor. Fiz minha primeira tattoo e me senti super segura.", stars: 5, date: "2 semanas atrás" },
    { name: "Rafael Mendes", text: "Profissionalismo nota 10. O estúdio é lindo, higienizado e o tatuador entendeu exatamente o que eu queria. Recomendo demais!", stars: 5, date: "1 mês atrás" },
    { name: "Beatriz Costa", text: "Amei o resultado da minha Fine Line. Delicada e perfeita. O atendimento pelo WhatsApp foi super rápido também.", stars: 5, date: "3 dias atrás" },
    { name: "João Pedro", text: "Melhor estúdio de Moema. Já fiz três tatuagens com eles e todas cicatrizaram perfeitamente. O estilo Old School deles é sensacional.", stars: 5, date: "2 meses atrás" },
    { name: "Fernanda Lima", text: "O curso online deles me ajudou muito a começar. A didática é ótima e agora sou cliente também!", stars: 5, date: "3 meses atrás" },
    { name: "Lucas Santos", text: "Ambiente muito vibe, música boa e arte de primeira. O tatuador teve muita paciência para criar o desenho comigo na hora.", stars: 5, date: "4 meses atrás" },
    { name: "Marina Oliveira", text: "Fiz uma cobertura (cover-up) e ficou perfeito, nem parece que tinha algo embaixo. Muito obrigada!", stars: 5, date: "5 meses atrás" },
    { name: "Thiago Almeida", text: "Preço justo pela qualidade entregue. Vale cada centavo. Voltarei em breve para fechar o braço.", stars: 5, date: "6 meses atrás" },
    { name: "Juliana Rodrigues", text: "Fiz minha tatuagem aquarela e o resultado superou todas as expectativas! As cores ficaram vibrantes e a cicatrização foi perfeita. Rafael é um artista de verdade!", stars: 5, date: "3 semanas atrás" },
    { name: "André Martins", text: "Atendimento excepcional do início ao fim. Tiraram todas as minhas dúvidas, o estúdio é impecável e o resultado da tattoo ficou incrível. Super recomendo!", stars: 5, date: "1 semana atrás" },
    { name: "Camila Fernandes", text: "Fiz uma tattoo delicada no pulso e estou apaixonada! Traço fino perfeito, sem borrar nada. O cuidado com os detalhes é impressionante.", stars: 5, date: "2 dias atrás" },
    { name: "Roberto Silva", text: "Já tinha outras tatuagens mas essa do Gênesis foi diferente. Trabalho limpo, profissional e com muito cuidado. Virei cliente fiel!", stars: 5, date: "1 mês atrás" },
    { name: "Patrícia Souza", text: "Melhor experiência! Desde o orçamento até a execução foi tudo perfeito. A tattoo cicatrizou super bem e as cores continuam vivas. Voltarei com certeza!", stars: 5, date: "2 meses atrás" },
    { name: "Felipe Moreira", text: "Fiz uma tattoo grande em estilo comics e ficou sensacional! O Rafael captou exatamente a vibe que eu queria. Estúdio top, equipamentos de primeira. Nota 1000!", stars: 5, date: "3 semanas atrás" },
    { name: "Renata Cardoso", text: "Simplesmente perfeito! A atenção aos detalhes, o cuidado com a higiene e o talento do tatuador são impressionantes. Minha tattoo ficou exatamente como eu sonhei. Recomendo de olhos fechados!", stars: 5, date: "5 dias atrás" },
];

export function Testimonials() {
    return (
        <section className="py-20 relative overflow-hidden bg-background border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-soft-light"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center space-y-6 mb-12">
                    <Badge className="bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 px-4 py-1.5 text-sm backdrop-blur-sm">
                        <i className="bi bi-google mr-2"></i>
                        Avaliações Verificadas
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Depoimentos
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A satisfação de quem já transformou sua pele conosco.
                    </p>

                    {/* Google Rating */}
                    <div className="flex items-center justify-center gap-3 pt-4">
                        <div className="text-5xl font-serif font-bold text-primary">5.0</div>
                        <div className="flex flex-col items-start">
                            <div className="flex text-primary text-lg">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <span className="text-sm text-muted-foreground">(Google Reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
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
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-background/50 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,161,91,0.15)] h-full">
                                    <CardContent className="p-6 space-y-4 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <div className="flex text-primary text-sm">
                                                {[...Array(review.stars)].map((_, j) => (
                                                    <i key={j} className="bi bi-star-fill"></i>
                                                ))}
                                            </div>
                                            <Badge variant="outline" className="border-primary/30 text-primary/70 text-xs">
                                                {review.date}
                                            </Badge>
                                        </div>

                                        {/* Review Text */}
                                        <div className="flex-grow">
                                            <p className="text-muted-foreground italic leading-relaxed">
                                                "{review.text}"
                                            </p>
                                        </div>

                                        {/* Author */}
                                        <div className="pt-2 border-t border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <i className="bi bi-person-fill text-primary"></i>
                                                </div>
                                                <div>
                                                    <div className="font-serif font-bold text-foreground">{review.name}</div>
                                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <i className="bi bi-google text-[10px]"></i>
                                                        Google Review
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation */}
                    <div className="flex justify-center mt-8 gap-2">
                        <CarouselPrevious className="static translate-y-0 translate-x-0 bg-background/50 border-white/20 hover:bg-primary hover:text-white" />
                        <CarouselNext className="static translate-y-0 translate-x-0 bg-background/50 border-white/20 hover:bg-primary hover:text-white" />
                    </div>
                </Carousel>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="https://share.google/K5W6G3kxexRKUmwnk" target="_blank">
                            <i className="bi bi-google mr-2"></i>
                            Ver todas as avaliações no Google
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
