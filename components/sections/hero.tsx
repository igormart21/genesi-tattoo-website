import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background with Image and Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bbce65074?q=80&w=2070&auto=format&fit=crop')" }}
                ></div>
                {/* Noise overlay */}
                <div className="absolute inset-0 bg-noise opacity-30 z-20 pointer-events-none mix-blend-soft-light"></div>
            </div>

            <div className="container relative z-30 px-4 text-center space-y-8 pt-20">
                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up">
                    <Badge variant="outline" className="bg-background/20 backdrop-blur-sm border-primary/30 text-foreground px-4 py-1 tracking-wider uppercase text-xs">
                        Moema • São Paulo
                    </Badge>
                    <Badge variant="outline" className="bg-background/20 backdrop-blur-sm border-primary/30 text-foreground px-4 py-1 tracking-wider uppercase text-xs">
                        Atendimento Personalizado
                    </Badge>
                </div>

                {/* Headings */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground drop-shadow-lg">
                        Gênesis Tattoo Art
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                        Vintage moderno. Arte na pele. História na alma.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] h-14 text-base shadow-[0_0_20px_rgba(198,161,91,0.3)] transition-all hover:shadow-[0_0_30px_rgba(198,161,91,0.5)]">
                        <Link href="https://wa.me/5511951321091" target="_blank">
                            <i className="bi bi-whatsapp mr-2"></i> Solicitar Orçamento
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary min-w-[180px] h-14 text-base backdrop-blur-sm">
                        <Link href="/portfolio">Ver Trabalhos</Link>
                    </Button>

                    <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground hover:bg-white/5 min-w-[180px] h-14 text-base">
                        <Link href="/agendamento">Agendar Sessão</Link>
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30 opacity-70">
                <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
                    <div className="w-1 h-3 bg-primary rounded-full animate-scroll-pill"></div>
                </div>
            </div>
        </section>
    );
}
