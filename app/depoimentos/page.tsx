"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allReviews = [
    { name: "Carolina Silva", text: "Experiência incrível! O traço é impecável e o ambiente super acolhedor. Fiz minha primeira tattoo e me senti super segura.", stars: 5, date: "2 semanas atrás" },
    { name: "Rafael Mendes", text: "Profissionalismo nota 10. O estúdio é lindo, higienizado e o tatuador entendeu exatamente o que eu queria. Recomendo demais!", stars: 5, date: "1 mês atrás" },
    { name: "Beatriz Costa", text: "Amei o resultado da minha Fine Line. Delicada e perfeita. O atendimento pelo WhatsApp foi super rápido também.", stars: 5, date: "3 dias atrás" },
    { name: "João Pedro", text: "Melhor estúdio de Moema. Já fiz três tatuagens com eles e todas cicatrizaram perfeitamente. O estilo Old School deles é sensacional.", stars: 5, date: "2 meses atrás" },
    { name: "Fernanda Lima", text: "O curso online deles me ajudou muito a começar. A didática é ótima e agora sou cliente também!", stars: 5, date: "3 meses atrás" },
    { name: "Lucas Santos", text: "Ambiente muito vibe, música boa e arte de primeira. O tatuador teve muita paciência para criar o desenho comigo na hora.", stars: 5, date: "4 meses atrás" },
    { name: "Marina Oliveira", text: "Fiz uma cobertura (cover-up) e ficou perfeito, nem parece que tinha algo embaixo. Muito obrigada!", stars: 5, date: "5 meses atrás" },
    { name: "Thiago Almeida", text: "Preço justo pela qualidade entregue. Vale cada centavo. Voltarei em breve para fechar o braço.", stars: 5, date: "6 meses atrás" },
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-32 pb-12 bg-muted/20 border-b border-white/5">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Depoimentos</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A satisfação de quem já transformou sua pele conosco.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary font-bold text-xl pt-2">
                        <span>5.0</span>
                        <div className="flex text-primary text-sm">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <span className="text-muted-foreground font-normal text-sm ml-2">(Google Reviews)</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allReviews.map((review, i) => (
                            <Card key={i} className="bg-muted/30 border-white/5 hover:border-primary/30 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex text-primary text-xs">
                                            {[...Array(review.stars)].map((_, j) => (
                                                <i key={j} className="bi bi-star-fill mr-1"></i>
                                            ))}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{review.date}</span>
                                    </div>
                                    <p className="text-muted-foreground italic leading-relaxed">"{review.text}"</p>
                                    <div className="pt-2 font-serif font-bold text-foreground">{review.name}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="https://share.google/K5W6G3kxexRKUmwnk" target="_blank">
                                <i className="bi bi-google mr-2"></i> Ver todas as avaliações no Google
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
