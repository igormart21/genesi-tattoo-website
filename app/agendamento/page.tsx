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
                                            <div className="space-y-4 text-muted-foreground">
                                                <div>
                                                    <p className="font-semibold mb-2 text-foreground">✦ CUIDADOS ANTES DA TATUAGEM (Pré-procedimento)</p>
                                                    <p className="font-medium mb-2">Nas 48h anteriores:</p>
                                                    <ul className="list-disc list-inside space-y-1.5 ml-2">
                                                        <li>Hidrate bem a pele (uso de hidratante corporal comum)</li>
                                                        <li>Beba bastante água</li>
                                                        <li>Tenha uma boa noite de sono</li>
                                                        <li>Alimente-se normalmente no dia do procedimento</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium mb-2">Evite:</p>
                                                    <ul className="list-disc list-inside space-y-1.5 ml-2">
                                                        <li>🚫 Bebidas alcoólicas (24–48h antes)</li>
                                                        <li>🚫 Exposição solar ou bronzeamento na área</li>
                                                        <li>🚫 Praia, piscina e sauna</li>
                                                        <li>🚫 Uso de ácidos, peeling ou esfoliação</li>
                                                        <li>🚫 Anti-inflamatórios e anticoagulantes sem orientação médica</li>
                                                        <li>🚫 Café em excesso no dia (aumenta sensibilidade e sangramento)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium mb-2">Não realize a tatuagem se estiver:</p>
                                                    <ul className="list-disc list-inside space-y-1.5 ml-2">
                                                        <li>Com febre ou gripado</li>
                                                        <li>Com a pele irritada, ferida ou descamando</li>
                                                        <li>Em crise alérgica ou dermatite ativa</li>
                                                        <li>Em uso recente de Roacutan/Isotretinoína (até 6–12 meses)</li>
                                                        <li>Gestante ou amamentando sem liberação médica</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium mb-2">No dia:</p>
                                                    <ul className="list-disc list-inside space-y-1.5 ml-2">
                                                        <li>✔ Venha alimentado</li>
                                                        <li>✔ Use roupas confortáveis</li>
                                                        <li>✔ Não venha em jejum</li>
                                                    </ul>
                                                </div>
                                            </div>
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
