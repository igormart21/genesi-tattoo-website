"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Início" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/agendamento", label: "Agendamento" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/curso", label: "Curso" },
    { href: "/contato", label: "Contato" },
];

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md py-3 shadow-md border-b-border/40"
                    : "bg-background/0 py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        Gênesis<span className="text-primary">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative",
                                pathname === link.href
                                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-primary hover:bg-transparent"
                    >
                        <Link
                            href="https://www.instagram.com/genesistattooart?igsh=NXZmZm84M2h1eWFk"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram text-xl"></i>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide"
                    >
                        <Link
                            href="https://wa.me/5511951321091"
                            target="_blank"
                            aria-label="Orçamento no WhatsApp"
                        >
                            <i className="bi bi-whatsapp mr-2"></i>
                            Orçamento
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex items-center gap-4">
                    <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="bg-primary text-primary-foreground lg:hidden"
                    >
                        <Link
                            href="https://wa.me/5511951321091"
                            target="_blank"
                            aria-label="Orçamento no WhatsApp"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </Link>
                    </Button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <i className="bi bi-list text-2xl"></i>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l-border">
                            <div className="flex flex-col h-full pt-10">
                                <nav className="flex flex-col gap-6 items-center">
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-xl font-serif font-medium transition-colors hover:text-primary",
                                                pathname === link.href ? "text-primary" : "text-muted-foreground"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="my-4 w-12 h-[1px] bg-border"></div>
                                    <Link
                                        href="https://www.instagram.com/genesistattooart?igsh=NXZmZm84M2h1eWFk"
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <i className="bi bi-instagram text-xl"></i>
                                        <span className="text-sm">@genesistattooart</span>
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
