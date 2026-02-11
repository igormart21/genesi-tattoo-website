"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function CoursePage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 z-0"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bbce65074?q=80&w=2070')" }}
                ></div>
                <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary px-4 py-1 text-sm">Disponível na Hotmart</Badge>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
                        Masterclass <br /><span className="text-primary">Gênesis Tattoo</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        Aprenda a metodologia completa para criar tatuagens autorais com excelência técnica e identidade artística.
                    </p>
                    <div className="pt-8">
                        <Button asChild size="lg" className="bg-[#ff4f00] text-white hover:bg-[#ff4f00]/90 h-16 px-8 text-xl font-bold shadow-lg animate-pulse">
                            <Link href="https://hotmart.com" target="_blank">
                                <i className="bi bi-fire mr-2"></i> Inscrever-se Agora
                            </Link>
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Acesso imediato • 7 dias de garantia • Certificado incluso</p>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-muted/30 border-white/5 p-6 hover:border-primary/30 transition-colors">
                            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
                                <i className="bi bi-pencil-fill"></i>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-2">Fundamentos do Desenho</h3>
                            <p className="text-muted-foreground">Domine anatomia, luz e sombra, e composição para criar designs que fluem com o corpo.</p>
                        </Card>
                        <Card className="bg-muted/30 border-white/5 p-6 hover:border-primary/30 transition-colors">
                            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
                                <i className="bi bi-lightning-charge-fill"></i>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-2">Técnicas de Aplicação</h3>
                            <p className="text-muted-foreground">Aprenda a regular sua máquina para traços finos (Fine Line) e preenchimentos sólidos.</p>
                        </Card>
                        <Card className="bg-muted/30 border-white/5 p-6 hover:border-primary/30 transition-colors">
                            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
                                <i className="bi bi-camera-reels-fill"></i>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-2">Marketing & Portfólio</h3>
                            <p className="text-muted-foreground">Como fotografar seus trabalhos e atrair os clientes certos nas redes sociais.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-center mb-12">Conteúdo Programático</h2>
                    <Accordion type="single" collapsible className="w-full bg-background border border-white/5 rounded-xl px-6">
                        <AccordionItem value="mod1">
                            <AccordionTrigger className="text-lg font-medium">Módulo 1: Introdução e Biossegurança</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                História da tatuagem, tipos de pele, contraindicações, montagem de bancada estéril e descarte correto.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mod2">
                            <AccordionTrigger className="text-lg font-medium">Módulo 2: Materiais e Equipamentos</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Tipos de máquinas (rotativa vs bobina), agulhas e cartuchos, tintas e diluentes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mod3">
                            <AccordionTrigger className="text-lg font-medium">Módulo 3: Workshop de Fine Line</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Exercícios de traço, voltagem correta, profundidade da agulha e como evitar estouros.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mod4">
                            <AccordionTrigger className="text-lg font-medium">Módulo 4: Workshop de Rasterlizado (Whipshading)</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Técnica de sombra riscada para texturas e volume.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mod5">
                            <AccordionTrigger className="text-lg font-medium">Módulo 5: Prática em Pele Artificial</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Passo a passo completo de uma arte do início ao fim em pele sintética.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-background border-t border-white/5 text-center">
                <div className="container mx-auto px-4 space-y-8">
                    <h2 className="text-4xl font-serif font-bold">Comece sua jornada hoje</h2>
                    <p className="text-xl text-muted-foreground">
                        De R$ 997,00 por <span className="text-primary font-bold">R$ 497,00</span>
                    </p>
                    <Button asChild size="lg" className="bg-[#ff4f00] text-white hover:bg-[#ff4f00]/90 h-16 px-12 text-xl font-bold rounded-full">
                        <Link href="https://hotmart.com" target="_blank">
                            GARANTIR MINHA VAGA
                        </Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
