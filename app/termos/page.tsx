"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermosPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />
            <section className="pt-32 pb-16 px-4 container mx-auto flex-1">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="border-b border-primary/20 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Termos de Uso</h1>
                        <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                    </div>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">1. Aceitação dos Termos</h2>
                            <p>
                                Ao agendar um serviço ou utilizar o site do Gênesis Tattoo Studio, você concorda com estes Termos de Uso. Se não concordar, por favor, não utilize nossos serviços.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">2. Restrições de Idade</h2>
                            <p>
                                A realização de tatuagens é <strong>estritamente proibida para menores de 18 anos</strong>, conforme legislação vigente (Lei Estadual nº 9.828/97 em SP). Não realizamos procedimentos em menores, mesmo com autorização dos pais. É obrigatória a apresentação de documento de identidade original com foto no dia da sessão.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">3. Agendamento e Sinal</h2>
                            <p>
                                Para confirmar o agendamento, é necessário o pagamento de um sinal (valor a ser informado no orçamento).
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>O valor do sinal é descontado do valor total da tatuagem;</li>
                                <li><strong>Cancelamentos ou reagendamentos:</strong> devem ser feitos com no mínimo 48 horas de antecedência para manter o valor do sinal;</li>
                                <li>Em caso de não comparecimento sem aviso prévio ou cancelamento tardio, o sinal não será devolvido, servindo para cobrir o tempo de estúdio reservado.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">4. Saúde e Segurança</h2>
                            <p>
                                O cliente deve preencher a ficha de anamnese com informações verdadeiras sobre seu estado de saúde, alergias ou condições preexistentes. O estúdio não se responsabiliza por complicações decorrentes de omissão de informações. Não realizamos tatuagens em pessoas sob efeito de álcool ou drogas, ou em gestantes/lactantes (salvo com autorização médica expressa).
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">5. Cuidados Pós-Tatuagem</h2>
                            <p>
                                O resultado final e a cicatrização da tatuagem dependem dos cuidados do cliente. O estúdio fornece todas as orientações necessárias. Não nos responsabilizamos por retoques decorrentes de má cicatrização causada por falta de cuidados (ex: exposição ao sol, mar, piscina, coçar).
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">6. Propriedade Intelectual</h2>
                            <p>
                                Os desenhos e projetos desenvolvidos pelos nossos artistas são de propriedade intelectual do autor. É proibida a reprodução, cópia ou uso comercial sem autorização prévia por escrito.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">7. Alterações</h2>
                            <p>
                                Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram em vigor assim que publicadas no site.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">8. Contato</h2>
                            <p>
                                Dúvidas? Entre em contato pelo e-mail: <a href="mailto:contato@genesistattoo.com.br" className="text-primary hover:underline">contato@genesistattoo.com.br</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
