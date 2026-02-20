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
// Enhanced dummy data
const categories = ["Todos", "Aquarela", "Comics", "Glitter", "Pet", "Preto e branco", "Delicadas", "Cobertura de cicatriz", "Cover up"];

const aquarelaFiles = [
    "2026-02-06 08_41_13.070-0300.jpg",
    "20220926_152540.jpg",
    "20221202_193610.jpg",
    "20230418_022204.jpg",
    "20230813_113733.jpg",
    "1000062113.jpg",
    "20240714_223219.jpg",
    "20240824_183248.jpg",
    "20241115_223557.jpg",
    "20241117_191445.jpg",
    "20250120_224632.jpg",
    "20250224_014545.jpg",
    "20250322_222030.jpg",
    "20250615_164427.jpg",
    "20250723_174957.jpg",
    "20250725_175601.jpg",
    "20250915_155552.jpg",
    "20251115_193224.jpg",
    "IMG-20231024-WA0039.jpg",
    "Rio Janeiro 3.jpg"
];

const comicsFiles = [
    "01 .jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "19.jpg",
    "20.jpg"
];

const glitterFiles = [
    "glitter-1.jpg",
    "glitter-2.jpg",
    "glitter-3.jpg",
    "glitter-4.jpg",
    "glitter-5.jpg",
    "glitter-6.jpg",
    "glitter-7.jpg",
    "glitter-8.jpg",
    "glitter-9.jpg",
    "glitter-10.jpg",
    "glitter-11.jpg",
    "glitter-12.jpg",
    "glitter-13.jpg",
    "glitter-14.jpg",
    "glitter-15.jpg",
    "glitter-16.jpg",
    "glitter-17.jpg",
    "glitter-18.jpg"
];

const aquarelaItems = aquarelaFiles.map((file, i) => ({
    id: `aq-${i}`,
    title: `Aquarela Autoral #${i + 1}`,
    category: "Aquarela",
    src: `/images/${file}`,
    image: `/images/${file}`,
    description: "Arte exclusiva com técnica de aquarela, trazendo cores vibrantes e fluidez para a pele."
}));

const comicsItems = comicsFiles.map((file, i) => ({
    id: `cm-${i}`,
    title: `Comics / Geek #${i + 1}`,
    category: "Comics",
    src: `/images/comics/${file}`,
    image: `/images/comics/${file}`,
    description: "Arte inspirada no universo geek, animes e quadrinhos. Reproduções fiéis e homenagens aos seus personagens favoritos."
}));

const glitterItems = glitterFiles.map((file, i) => ({
    id: `gl-${i}`,
    title: `Glitter Tattoo #${i + 1}`,
    category: "Glitter",
    src: `/images/glitter/${file}`,
    image: `/images/glitter/${file}`,
    description: "Técnica que simula o efeito de brilho e glitter, trazendo um toque mágico e único para a tatuagem."
}));

// Placeholder items for new categories
const generatePlaceholders = (category: string, count: number, startId: number) =>
    Array.from({ length: count }).map((_, i) => ({
        id: `ph-${startId + i}`,
        title: `${category} #${i + 1}`,
        category: category,
        src: `https://source.unsplash.com/random/800x800?tattoo,${category.replace(/ /g, ',')}&sig=${startId + i}`,
        image: `https://source.unsplash.com/random/800x800?tattoo,${category.replace(/ /g, ',')}&sig=${startId + i}`,
        description: `Arte exclusiva na categoria ${category}.`
    }));

const petFiles = [
    "IMG-20250925-WA0075.jpg",
    "Pet 1.jpg",
    "Pet 2.jpg",
    "Pet 3.jpg",
    "Pet 4.jpg",
    "Pet 5.jpg",
    "Pet 6.jpg",
    "Pet 7.jpg",
    "Pet 8.jpg",
    "Pet 9.jpg",
    "Pet 10.jpg",
    "Pet 11.jpg",
    "Pet 12.jpg",
    "Pet 13.jpg",
    "Pet 14.jpg",
    "InCollage_20230629_181043618.jpg",
    "InCollage_20230714_233801102.jpg",
    "InCollage_20230714_234054088.jpg"
];

const petItems = petFiles.map((file, i) => ({
    id: `pt-${i}`,
    title: `Pet Tattoo #${i + 1}`,
    category: "Pet",
    src: `/images/pets/${file}`,
    image: `/images/pets/${file}`,
    description: "Homenageie seu melhor amigo com um retrato fiel ou uma arte estilizada."
}));

const pretoBrancoFiles = [
    "Pb1.jpg",
    "PB 3.jpg",
    "PB 4.jpg",
    "PB 5.jpg",
    "PB 6.jpg",
    "PB 8.jpg",
    "PB 9.jpg",
    "PB 10.jpg",
    "PB 11.jpg",
    "PB 12.jpg"
];

const pretoBrancoItems = pretoBrancoFiles.map((file, i) => ({
    id: `pb-${i}`,
    title: `Preto e Branco #${i + 1}`,
    category: "Preto e branco",
    src: `/images/preto e branco/${file}`,
    image: `/images/preto e branco/${file}`,
    description: "Elegância e contraste em composições monocromáticas atemporais. Cicatrização otimizada, materiais premium."
}));

const delicadasFiles = [
    "Deli 1 .jpg",
    "Deli 2 .jpg",
    "Deli 3 .jpg",
    "Deli 4.jpg",
    "Deli 5.jpg",
    "Deli 6 .jpg",
    "Deli 8 .jpg",
    "Deli 8.jpg",
    "Deli 9 .jpg",
    "Deli 11.jpg",
    "Deli 12.jpg"
];

const delicadasItems = delicadasFiles.map((file, i) => ({
    id: `dl-${i}`,
    title: `Delicadas #${i + 1}`,
    category: "Delicadas",
    src: `/images/delicadas/${file}`,
    image: `/images/delicadas/${file}`,
    description: "Traços finos e sutis que realçam a beleza natural com leveza e delicadeza."
}));

const coberturaFiles = [
    "FB_IMG_1771413704576.jpg",
    "FB_IMG_1771414048860.jpg",
    "InCollage_20260217_193616144.jpg",
    "InCollage_20260218_164513859.jpg",
    "InCollage_20260217_194202017.jpg",
    "InCollage_20260217_193458355.jpg",
    "SaveClip.App_563279142_18535591009014372_2296656215453028895_n.jpg",
    "SaveClip.App_564334853_18535591018014372_1398082041535650288_n.jpg",
    "SaveClip.App_566036303_18535590973014372_3242002517998529309_n.jpg"
];

const coberturaItems = coberturaFiles.map((file, i) => ({
    id: `co-${i}`,
    title: `Cobertura #${i + 1}`,
    category: "Cobertura de cicatriz",
    src: `/images/cobertura de cicatriz/${file}`,
    image: `/images/cobertura de cicatriz/${file}`,
    description: "Dominamos diversas técnicas para materializar sua visão com maestria. Transformação de marcas em arte com projetos especializados."
}));


const coverUpFiles = [
    "FB_IMG_1771413846293.jpg",
    "FB_IMG_1771413881832.jpg",
    "InCollage_20260217_192838488.jpg",
    "InCollage_20260217_193042550.jpg",
    "InCollage_20260217_193229593.jpg",
    "InCollage_20260217_193339728.jpg",
    "InCollage_20260217_200111660.jpg",
    "InCollage_20260217_200303790.jpg",
    "InCollage_20260217_201201438.jpg",
    "InCollage_20260217_201413875.jpg",
    "InCollage_20260218_085335416.jpg",
    "InCollage_20260218_085650781.jpg",
    "InCollage_20260218_085915880.jpg",
    "InCollage_20260218_093810861.jpg",
    "InCollage_20260218_094239206.jpg",
    "InCollage_20260218_094913302.jpg"
];

const coverUpItems = coverUpFiles.map((file, i) => ({
    id: `cu-${i}`,
    title: `Cover Up #${i + 1}`,
    category: "Cover up",
    src: `/images/cover Up/${file}`,
    image: `/images/cover Up/${file}`,
    description: "Renove ou cubra tatuagens antigas com uma nova arte exclusiva. Especialidade em transformar antigas marcas em novas obras de arte."
}));

const portfolioItems = [
    ...aquarelaItems,
    ...comicsItems,
    ...glitterItems,
    ...petItems,
    ...pretoBrancoItems,
    ...delicadasItems,
    ...coberturaItems,
    ...coverUpItems
];

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
                                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-white/10 rounded-full px-6 py-2 w-auto flex-none whitespace-nowrap"
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
                                <DialogContent className="max-w-4xl w-[95vw] bg-zinc-950/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden max-h-[90vh] md:h-auto flex flex-col md:block rounded-xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-auto overflow-y-auto md:overflow-hidden">
                                        <div className="relative h-[50vh] md:h-auto min-h-[300px] md:min-h-[500px] bg-black/50">
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
                                            <DialogHeader className="text-left">
                                                <div className="flex items-center justify-between mb-2">
                                                    <Badge variant="outline" className="border-primary/50 text-primary">{item.category}</Badge>
                                                    <span className="text-xs text-muted-foreground">ID: #{item.id}</span>
                                                </div>
                                                <DialogTitle className="text-2xl md:text-3xl font-serif font-bold leading-tight">{item.title}</DialogTitle>
                                                <DialogDescription className="text-base text-muted-foreground md:text-lg pt-2 leading-relaxed">
                                                    {item.description}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="space-y-6 pt-2">
                                                <div className="grid grid-cols-1 gap-3">
                                                    <div className="p-3 rounded border border-white/10 bg-white/5">
                                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Artista</div>
                                                        <div className="font-medium text-sm text-foreground">Artista Rafael Oliveira</div>
                                                    </div>
                                                </div>

                                                <Separator className="bg-white/10" />

                                                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-auto py-3 whitespace-normal text-xs sm:text-sm uppercase tracking-wide font-medium">
                                                    <Link
                                                        href={`https://wa.me/5511951321091?text=${encodeURIComponent(`Olá! Gostei muito do trabalho "${item.title}" (${item.category}) e gostaria de um orçamento para algo nesse estilo.`)}`}
                                                        target="_blank"
                                                        className="flex items-center justify-center gap-2 text-center leading-tight"
                                                    >
                                                        <i className="bi bi-whatsapp text-lg shrink-0"></i>
                                                        <span>Quero orçamento dessa ideia</span>
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
