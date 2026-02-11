import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <section className="py-24 bg-primary/10 relative overflow-hidden border-y border-primary/20">
            <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>
            <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                    Pronto para transformar sua ideia em arte?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Entre em contato agora mesmo e garanta sua sessão com nossos especialistas.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 min-w-[200px] text-lg shadow-xl">
                        <Link href="https://wa.me/5511951321091" target="_blank">
                            <i className="bi bi-whatsapp mr-2"></i> Orçamento Instantâneo
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 h-14 min-w-[200px] text-lg">
                        <Link href="/agendamento">
                            Ver Disponibilidade
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
