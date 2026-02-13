import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Dither pattern top border */}
            <div className="absolute top-0 left-0 right-0 h-1 dither-pattern opacity-50"></div>

            {/* Stars Background */}
            <div className="absolute inset-0 w-full h-full stars-bg opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-serif text-3xl font-bold text-foreground tracking-wider italic">
                                GÊNESIS.
                            </h3>
                            <div className="text-[10px] font-mono text-primary/60 mt-1 tracking-widest">EST. 2026 • MOEMA SP</div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-light border-l border-primary/20 pl-4">
                            Arte na pele. História na alma. Estúdio especializado em tatuagem autoral com estética vintage moderna.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="https://www.instagram.com/genesistattooart?igsh=NXZmZm84M2h1eWFk"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                            >
                                <i className="bi bi-instagram text-lg group-hover:scale-110 transition-transform"></i>
                            </Link>
                            <Link
                                href="https://wa.me/5511951321091"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                            >
                                <i className="bi bi-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 border border-primary"></span>
                            Navegação
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                            <li><Link href="/" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>Início</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>Portfólio</Link></li>
                            <li><Link href="/agendamento" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>Agendamento</Link></li>
                            <li><Link href="/curso" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>Curso</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 border border-primary"></span>
                            Contato
                        </h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <i className="bi bi-geo-alt text-primary mt-1"></i>
                                <span className="font-light">Moema, São Paulo - SP<br /><span className="text-xs text-white/30 font-mono">LAT: -23.5924° • LONG: -46.6644°</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="bi bi-whatsapp text-primary"></i>
                                <a href="https://wa.me/5511951321091" target="_blank" className="hover:text-primary transition-colors font-mono tracking-wide">
                                    (11) 95132-1091
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="bi bi-envelope text-primary"></i>
                                <a href="mailto:contato@genesistattoo.com.br" className="hover:text-primary transition-colors font-mono tracking-wide">
                                    contato@genesistattoo.com.br
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Status Panel */}
                    <div className="space-y-6">
                        <h4 className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 border border-primary"></span>
                            Status
                        </h4>
                        <div className="border border-white/10 bg-white/5 p-4 space-y-3 font-mono text-xs">
                            <div className="flex justify-between items-center text-white/70">
                                <span>SYSTEM:</span>
                                <span className="text-green-500">ONLINE</span>
                            </div>
                            <div className="flex justify-between items-center text-white/70">
                                <span>STUDIO:</span>
                                <span className="text-primary">OPEN</span>
                            </div>
                            <div className="w-full h-px bg-white/10 my-2"></div>
                            <div className="flex justify-between items-center text-white/50">
                                <span>V2.0.0</span>
                                <span>© {currentYear}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-[10px] font-mono text-muted-foreground text-center md:text-left tracking-wider uppercase">
                        <p>ALL RIGHTS RESERVED • GÊNESIS TATTOO ART</p>
                        <p className="mt-1 flex items-center justify-center md:justify-start gap-1">
                            Produzido com <span className="text-yellow-500 text-sm">♥</span> por <Link href="https://camaly.com.br" target="_blank" className="hover:text-primary transition-colors">Camaly</Link>
                        </p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0 text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
                        <Link href="/politicas" className="hover:text-primary transition-colors">Políticas</Link>
                        <Link href="/termos" className="hover:text-primary transition-colors">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
