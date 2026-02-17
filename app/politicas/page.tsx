"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PoliticasPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />
            <section className="pt-32 pb-16 px-4 container mx-auto flex-1">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="border-b border-primary/20 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Política de Privacidade</h1>
                        <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                    </div>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">1. Introdução</h2>
                            <p>
                                O Gênesis Tattoo Studio ("nós", "nosso") respeita a sua privacidade e está comprometido em proteger os dados pessoais que você compartilha conosco. Esta política descreve como coletamos, usamos e protegemos suas informações.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">2. Coleta de Dados</h2>
                            <p>
                                Coletamos informações que você nos fornece diretamente, principalmente quando:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Solicita um orçamento ou agendamento via site, WhatsApp ou Instagram;</li>
                                <li>Preenche nossa ficha de anamnese presencialmente;</li>
                                <li>Interage com nossas redes sociais.</li>
                            </ul>
                            <p>
                                Os dados podem incluir: nome, telefone, e-mail, data de nascimento e informações de saúde relevantes para o procedimento de tatuagem.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">3. Uso das Informações</h2>
                            <p>Utilizamos seus dados exclusivamente para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gerenciar agendamentos e orçamentos;</li>
                                <li>Garantir a segurança do procedimento (anamnese);</li>
                                <li>Entrar em contato para confirmações ou orientações pós-tattoo;</li>
                                <li>Melhorar nossos serviços e atendimento.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">4. Compartilhamento de Dados</h2>
                            <p>
                                Não vendemos nem alugamos seus dados pessoais. Podemos compartilhar informações apenas com:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Nossa equipe de artistas e atendentes, estritamente para a prestação do serviço;</li>
                                <li>Autoridades legais, se exigido por lei.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">5. Segurança</h2>
                            <p>
                                Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Suas fichas de anamnese são armazenadas com confidencialidade.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">6. Seus Direitos</h2>
                            <p>
                                Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais, salvo quando a manutenção for exigida por lei (como registros de saúde/anamnese). Para exercer esses direitos, entre em contato conosco.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground">7. Contato</h2>
                            <p>
                                Para dúvidas sobre esta política, entre em contato pelo e-mail: <a href="mailto:contato@genesistattoo.com.br" className="text-primary hover:underline">contato@genesistattoo.com.br</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
