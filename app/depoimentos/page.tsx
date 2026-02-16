"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

// Real Google My Business Review Screenshots
const reviewImages = [
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.35.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.36.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.38.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.39.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.40.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.41.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.42.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.49.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.50.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.51.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.52.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.53.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.54.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.55.jpeg",
    "/images/depoimentos/WhatsApp Image 2026-02-16 at 10.10.56.jpeg",
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-background">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
                    <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-soft-light"></div>
                </div>

                <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
                    <Badge className="bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 px-4 py-1.5 text-sm backdrop-blur-sm">
                        <i className="bi bi-google mr-2"></i>
                        Avaliações Verificadas
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Depoimentos
                    </h1>

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
            </section>

            {/* Carousel Section */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
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
                            {reviewImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="bg-background/50 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,161,91,0.15)] h-full overflow-hidden">
                                        <CardContent className="p-0 h-[400px] relative">
                                            <Image
                                                src={image}
                                                alt={`Depoimento cliente ${index + 1}`}
                                                fill
                                                className="object-contain"
                                            />
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

            <Footer />
        </main>
    );
}
