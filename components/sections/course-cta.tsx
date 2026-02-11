import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CourseCTA() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/20 z-0" />
            <div
                className="absolute inset-0 bg-cover bg-fixed opacity-10 mix-blend-overlay z-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bbce65074?q=80&w=2070')" }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center space-y-8 shadow-2xl">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary">Lançamento</Badge>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Aprenda a Tatuar do Zero ao Avançado
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Domine as técnicas de Fine Line, Blackwork e Realismo com o método Gênesis.
                        Curso online completo com certificado e mentorias.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] h-14 text-lg">
                            <Link href="/curso">
                                Ver Conteúdo do Curso
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 min-w-[200px] h-14 text-lg">
                            <Link href="https://hotmart.com" target="_blank">
                                Ir para Hotmart <i className="bi bi-box-arrow-up-right ml-2 text-xs"></i>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
