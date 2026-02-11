import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SchedulingForm } from "@/components/forms/scheduling-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SchedulingPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-32 pb-12 bg-muted/20 border-b border-white/5">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Agendamento & Orçamento</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Preencha o formulário abaixo para iniciarmos o seu projeto. Retornaremos via WhatsApp com os valores e disponibilidade.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form Side */}
                        <div>
                            <SchedulingForm />
                        </div>

                        {/* Info Side */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-primary">Informações Importantes</h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex gap-3">
                                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                                        <span>O orçamento é uma estimativa baseada nas informações enviadas. O valor final pode variar após análise detalhada.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                                        <span>Para garantir o agendamento, solicitamos um sinal de 30% do valor total (abatido no dia da sessão).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <i className="bi bi-check-circle-fill text-primary mt-1"></i>
                                        <span>Atendemos apenas maiores de 18 anos.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold">Dúvidas Frequentes</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Como devo me preparar para a sessão?</AccordionTrigger>
                                        <AccordionContent>
                                            Descanse bem, hidrate-se e faça uma refeição leve antes de vir. Evite bebidas alcoólicas nas 24h anteriores.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Posso levar acompanhante?</AccordionTrigger>
                                        <AccordionContent>
                                            Para manter o ambiente tranquilo e focado, recomendamos vir sozinho(a). Se precisar muito, limite a 1 acompanhante.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Vocês cobrem tatuagens antigas (Cover-up)?</AccordionTrigger>
                                        <AccordionContent>
                                            Sim, fazemos coberturas. Envie uma foto da tatuagem atual no campo de referência para avaliarmos a possibilidade.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
