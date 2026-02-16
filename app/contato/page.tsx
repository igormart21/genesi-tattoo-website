"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-32 pb-12 bg-muted/20 border-b border-white/5">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Contato</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Estamos prontos para atender você. Fale conosco pelo WhatsApp, Instagram ou visite nosso estúdio.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="bg-muted/30 border-white/5">
                                    <CardContent className="p-6 space-y-4 text-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mx-auto">
                                            <i className="bi bi-whatsapp"></i>
                                        </div>
                                        <h3 className="font-serif font-bold text-lg">WhatsApp</h3>
                                        <p className="text-muted-foreground text-sm">Respostas rápidas para orçamentos e agendamentos.</p>
                                        <Button asChild variant="link" className="text-primary hover:text-primary/80">
                                            <Link href="https://wa.me/5511951321091" target="_blank">(11) 95132-1091</Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/30 border-white/5">
                                    <CardContent className="p-6 space-y-4 text-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mx-auto">
                                            <i className="bi bi-instagram"></i>
                                        </div>
                                        <h3 className="font-serif font-bold text-lg">Instagram</h3>
                                        <p className="text-muted-foreground text-sm">Acompanhe nosso portfólio atualizado diariamente.</p>
                                        <Button asChild variant="link" className="text-primary hover:text-primary/80">
                                            <Link href="https://www.instagram.com/genesistattooart" target="_blank">@genesistattooart</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif font-bold">Localização</h3>
                                <div className="text-muted-foreground space-y-4">
                                    <p className="flex items-start gap-4">
                                        <i className="bi bi-geo-alt-fill text-primary text-xl mt-1"></i>
                                        <span>
                                            Alameda dos Maracatins, 1217<br />
                                            <span className="text-sm opacity-70">Cj. 214 - Edifício Superia - Indianópolis, SP</span>
                                        </span>
                                    </p>
                                    <p className="flex items-center gap-4">
                                        <i className="bi bi-clock-fill text-primary text-xl"></i>
                                        <span>
                                            Terça a Sexta: 10h às 20h<br />
                                            Sábado: 10h às 18h
                                        </span>
                                    </p>
                                    <p className="flex items-center gap-4">
                                        <i className="bi bi-whatsapp text-primary text-xl"></i>
                                        <span>(11) 95132-1091</span>
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                        <Link href="https://wa.me/5511951321091" target="_blank">
                                            <i className="bi bi-whatsapp mr-2"></i> Agendar Visita
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full mt-3">
                                        <Link href="https://maps.app.goo.gl/K5W6G3kxexRKUmwnk" target="_blank">
                                            <i className="bi bi-geo-alt mr-2"></i> Como Chegar
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-[300px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 shadow-lg relative bg-muted lg:col-span-2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.126048566144!2d-46.66635332375836!3d-23.61091297876801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a08e1e7e7a7%3A0x4f2f8b4dd0c8df97!2sG%C3%AAnesis%20Tattoo!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Mapa de Localização"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>

                        {/* Quick Contact Form */}
                        <div className="bg-muted/30 p-8 rounded-xl border border-white/5 h-fit lg:col-span-2">
                            <h3 className="text-2xl font-serif font-bold mb-6">Mensagem Rápida</h3>
                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                // Mock submit
                                alert("Mensagem enviada! Retornaremos em breve.");
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Nome</label>
                                        <Input placeholder="Seu nome" className="bg-background/50 border-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email (Opcional)</label>
                                        <Input placeholder="seu@email.com" className="bg-background/50 border-white/10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Assunto</label>
                                    <Input placeholder="Dúvida, Parceria, Outros" className="bg-background/50 border-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Mensagem</label>
                                    <Textarea placeholder="Como podemos ajudar?" className="bg-background/50 border-white/10 min-h-[120px]" />
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
