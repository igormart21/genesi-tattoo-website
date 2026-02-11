import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Location() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-serif font-bold">Onde Estamos</h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p className="flex items-start gap-4">
                                <i className="bi bi-geo-alt-fill text-primary text-2xl"></i>
                                <span>
                                    Moema, São Paulo - SP<br />
                                    <span className="text-sm opacity-70">Próximo ao Shopping Ibirapuera</span>
                                </span>
                            </p>
                            <p className="flex items-center gap-4">
                                <i className="bi bi-clock-fill text-primary text-2xl"></i>
                                <span>
                                    Terça a Sexta: 10h às 20h<br />
                                    Sábado: 10h às 18h
                                </span>
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[150px]">
                                <Link href="https://wa.me/5511951321091" target="_blank">
                                    <i className="bi bi-whatsapp mr-2"></i> Agendar Visita
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="min-w-[150px]">
                                <Link href="https://maps.google.com" target="_blank">
                                    Como Chegar
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="w-full h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 shadow-lg relative bg-muted">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.331206684717!2d-46.6644265!3d-23.5924269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a08e1e7e7a7%3A0xe53238618f020822!2sMoema%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Mapa de Localização"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
