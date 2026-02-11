"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Enhanced dummy data
const categories = ["Todos", "Fine Line", "Blackwork", "Old School", "Realismo"];

const portfolioItems = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    image: `https://source.unsplash.com/random/800x800?tattoo,ink&sig=${i + 10}`, // Placeholder
    // Using reliable sources
    src: i % 2 === 0
        ? "https://images.unsplash.com/photo-1598371839696-5c5bbce65074?q=80&w=800"
        : "https://images.unsplash.com/photo-1611501275019-9b5cda994e11?q=80&w=800",
    title: `Projeto Autoral #${i + 1}`,
    category: i % 4 === 0 ? "Fine Line" : i % 3 === 0 ? "Blackwork" : i % 2 === 0 ? "Old School" : "Realismo",
    description: "Arte desenvolvida exclusivamente para o cliente com base em referências de natureza e geometria sagrada."
}));

export default function PortfolioPage() {
    const [filter, setFilter] = useState("Todos");

    const filteredItems = filter === "Todos"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Hero */}
            <section className="pt-32 pb-12 bg-muted/20 border-b border-white/5">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Portfólio</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore nossa galeria de trabalhos realizados. Cada arte carrega uma história única.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 space-y-12">

                    {/* Filters */}
                    <div className="flex justify-center">
                        <Tabs defaultValue="Todos" value={filter} onValueChange={setFilter} className="w-full max-w-3xl">
                            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center p-0">
                                {categories.map(cat => (
                                    <TabsTrigger
                                        key={cat}
                                        value={cat}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-white/10 rounded-full px-6 py-2"
                                    >
                                        {cat}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {filteredItems.map((item) => (
                            <Dialog key={item.id}>
                                <DialogTrigger asChild>
                                    <div className="group relative aspect-square overflow-hidden rounded-sm bg-muted cursor-pointer shadow-md hover:shadow-xl transition-all">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <Badge className="w-fit mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                                            <h3 className="text-white font-serif font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden h-[90vh] md:h-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                        <div className="relative h-1/2 md:h-full min-h-[300px] md:min-h-[500px]">
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-8 flex flex-col justify-center space-y-6 overflow-y-auto">
                                            <DialogHeader>
                                                <div className="flex items-center justify-between">
                                                    <Badge variant="outline" className="border-primary/50 text-primary">{item.category}</Badge>
                                                    <span className="text-xs text-muted-foreground">ID: #{item.id}</span>
                                                </div>
                                                <DialogTitle className="text-3xl font-serif pt-4">{item.title}</DialogTitle>
                                                <DialogDescription className="text-lg pt-2 leading-relaxed">
                                                    {item.description}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="space-y-6 pt-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-lg bg-muted/30 border border-white/5">
                                                        <div className="text-sm text-muted-foreground mb-1">Tempo de sessão</div>
                                                        <div className="font-medium text-foreground">Aprox. 4 horas</div>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-muted/30 border border-white/5">
                                                        <div className="text-sm text-muted-foreground mb-1">Artista</div>
                                                        <div className="font-medium text-foreground">Gênesis Team</div>
                                                    </div>
                                                </div>

                                                <Separator className="bg-white/10" />

                                                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                                    <Link
                                                        href={`https://wa.me/5511951321091?text=${encodeURIComponent(`Olá! Gostei muito do trabalho "${item.title}" (${item.category}) e gostaria de um orçamento para algo nesse estilo.`)}`}
                                                        target="_blank"
                                                    >
                                                        <i className="bi bi-whatsapp mr-2"></i>
                                                        Quero orçamento dessa ideia
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>

                    <div className="flex justify-center pt-12">
                        <div className="text-center space-y-4">
                            <p className="text-muted-foreground">Gostou do que viu?</p>
                            <Button asChild size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
                                <Link href="https://www.instagram.com/genesistattooart" target="_blank">
                                    <i className="bi bi-instagram mr-2"></i>
                                    Ver mais no Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
