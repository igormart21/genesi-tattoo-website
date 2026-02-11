import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const steps = [
    {
        step: "01",
        title: "Ideia & Referência",
        description: "Envie sua ideia, referências visuais e local do corpo. Entendemos sua visão.",
        icon: "bi bi-lightbulb",
    },
    {
        step: "02",
        title: "Orçamento",
        description: "Analisamos a complexidade e tempo. Você recebe uma estimativa transparente.",
        icon: "bi bi-chat-dots",
    },
    {
        step: "03",
        title: "Agendamento",
        description: "Sinal para garantir a data. Escolhemos o melhor horário para sua sessão.",
        icon: "bi bi-calendar-event",
    },
    {
        step: "04",
        title: "Sessão & Arte",
        description: "Dia de tatuar. Ambiente seguro, materiais estéreis e foco total na sua arte.",
        icon: "bi bi-stars",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-muted/20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
                    <div className="flex items-center justify-center gap-2 opacity-60">
                        <div className="w-12 h-px bg-primary"></div>
                        <span className="text-xs font-mono text-primary tracking-widest uppercase">Processo</span>
                        <div className="w-12 h-px bg-primary"></div>
                    </div>
                    <h2 className="text-4xl font-serif font-bold">Como Funciona</h2>
                    <p className="text-muted-foreground">Do conceito à cicatrização, nosso processo é simples e transparente.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <Card key={index} className="bg-background border-white/5 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={4}
                                />
                            </div>
                            <div className="relative z-10 p-1 rounded-xl h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl font-bold group-hover:opacity-20 transition-opacity">
                                    {item.step}
                                </div>
                                <CardContent className="pt-10 pb-8 px-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                                <div className="h-1 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
