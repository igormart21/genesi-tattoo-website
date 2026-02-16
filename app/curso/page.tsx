"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
    {
        id: 1,
        title: "Círculo Cromático",
        subtitle: "A Matemática das Cores",
        description: "aplicada à Tatuagem",
        tagline: "A maioria dos tatuadores não erra no traço… erra na cor.",
        fullDescription: "Cores que cicatrizam opacas, tons que viram \"lama\", falta de contraste e desperdício de tinta não acontecem por falta de talento — acontecem por falta de método.",
        rating: 5.0,
        reviews: 1,
        badge: "Bem Avaliado",
        image: "/images/cusros/capainfbasicashotmart.jpeg.webp",
        hotmartUrl: "https://hotmart.com/pt-br/marketplace/produtos/workshop-circulo-cromatico-a-matematica-das-cores/A94294965H",
        features: [
            "5 módulos completos",
            "Método exclusivo com 5 cores base",
            "Certificado de conclusão",
            "Acesso vitalício"
        ]
    },
    {
        id: 2,
        title: "Mentoria Presencial",
        subtitle: "Tatuagem Colorida",
        description: "com Rafael Oliveira",
        tagline: "Se você já tatua, mas ainda sofre com cores que cicatrizam apagadas, mistura de pigmentos sem controle ou falta de confiança ao trabalhar com colorido, essa mentoria foi criada para corrigir sua base técnica.",
        fullDescription: "Aqui você não aprende apenas técnicas — você entende o funcionamento real das cores na pele para prever o resultado antes de tatuar. A proposta é eliminar o método de tentativa e erro e trazer previsibilidade ao seu trabalho.",
        rating: null,
        reviews: null,
        badge: "Presencial",
        image: "/images/cusros/Estatico13GENESISTATOO1.png.webp",
        hotmartUrl: "https://hotmart.com/pt-br/marketplace/produtos/mentoria-presencial-com-rafael-oliveira-genesis-tattoo/S98278624L",
        features: [
            "3 dias de imersão presencial",
            "Demonstração profissional ao vivo",
            "Execução guiada com correções",
            "3 meses de suporte direto"
        ]
    },
    {
        id: 3,
        title: "Workshop de Tatuagem Glitter",
        subtitle: "Método Exclusivo",
        description: "Passo a Passo Profissional",
        tagline: "A maioria dos tatuadores não domina o efeito Glitter por falta de método, prática direcionada e entendimento técnico da pigmentação.",
        fullDescription: "Neste workshop, você aprende exatamente como executar o efeito Glitter do zero, com um passo a passo validado, aplicado em pele artificial e pele humana, evitando erros comuns como contaminação de cores, excesso de branco, falhas de transição e acabamento irregular.",
        rating: null,
        reviews: null,
        badge: "5 horas",
        image: "/images/cusros/WhatsAppImage20241001at202608.jpeg.webp",
        hotmartUrl: "https://hotmart.com/pt-br/marketplace/produtos/workshop-tatuagem-glitter/J94467437W",
        features: [
            "5 horas de workshop prático",
            "Acesso por 12 meses",
            "Demonstrações em pele artificial e humana",
            "Método exclusivo e replicável"
        ]
    },
    {
        id: 4,
        title: "Workshop Tatuagem Aquarela",
        subtitle: "Método Rafael Oliveira",
        description: "Técnicas e Efeitos Impactantes",
        tagline: "Domine todas as técnicas necessárias para realizar uma tatuagem Aquarela com efeitos impactantes que transformam a pele em uma verdadeira obra de arte.",
        fullDescription: "Aprenda passo a passo desde pigmentação a técnicas como splash, blush, respingos e pinceladas sem causar contaminação de cores para obter resultados incríveis. Este estilo de tatuagem é fascinante e vibrante.",
        rating: null,
        reviews: null,
        badge: "8 módulos",
        image: "/images/cusros/CpiadeMiniaturaparaYoutubeCapadeVdeoparacanal200x200px2048x1capafinalaqua600x600.png.webp",
        hotmartUrl: "https://hotmart.com/pt-br/marketplace/produtos/workshop-tattoo-aquarela/F94733792L",
        features: [
            "8 módulos completos",
            "Técnicas splash, blush e pinceladas",
            "Preparação de decalque digital",
            "Bônus: Círculo Cromático incluído"
        ]
    }
];

export default function CoursePage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-background">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bbce65074?q=80&w=2070')" }}
                    ></div>
                    <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-soft-light"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="flex justify-center gap-3 flex-wrap">
                            <Badge className="bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 px-4 py-1.5 text-sm backdrop-blur-sm">
                                <i className="bi bi-award-fill mr-2"></i>
                                Certificados Reconhecidos
                            </Badge>
                            <Badge className="bg-background/50 border border-white/10 text-foreground hover:bg-background/70 px-4 py-1.5 text-sm backdrop-blur-sm">
                                <i className="bi bi-calendar-check mr-2"></i>
                                Acesso Imediato
                            </Badge>
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight">
                                Gênesis <span className="text-primary italic">Academy</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                                Onde a técnica encontra a arte: métodos exclusivos desenvolvidos em <strong className="text-foreground">23 anos de carreira</strong> premiada
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                            <div className="bg-muted/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-serif">23+</div>
                                <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
                            </div>
                            <div className="bg-muted/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-serif">70+</div>
                                <div className="text-sm text-muted-foreground mt-1">Premiações</div>
                            </div>
                            <div className="bg-muted/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-serif">7x</div>
                                <div className="text-sm text-muted-foreground mt-1">Tattoo Week</div>
                            </div>
                            <div className="bg-muted/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-serif">100%</div>
                                <div className="text-sm text-muted-foreground mt-1">Online</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="pt-6">
                            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                                Aprenda técnicas profissionais de tatuagem com quem é <strong className="text-foreground">referência em colorido, aquarela e glitter</strong>. Cursos desenvolvidos para eliminar tentativa e erro, trazendo previsibilidade e excelência ao seu trabalho.
                            </p>
                        </div>

                        {/* Scroll indicator */}
                        <div className="pt-8">
                            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                <i className="bi bi-arrow-down animate-bounce"></i>
                                <span>Explore nossos workshops</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {courses.map((course) => (
                            <Card
                                key={course.id}
                                className="bg-muted/20 border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,161,91,0.2)] group"
                            >
                                <CardContent className="p-0 flex flex-col h-full">
                                    {/* Card Header */}
                                    <div className="relative bg-secondary/10 p-8 border-b border-white/5">
                                        {course.image ? (
                                            <div
                                                className="absolute inset-0 bg-cover opacity-30"
                                                style={{ backgroundImage: `url('${course.image}')`, backgroundPosition: 'center 30%' }}
                                            ></div>
                                        ) : (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
                                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bbce65074?q=80&w=2070')" }}
                                            ></div>
                                        )}
                                        <div className="relative z-10 space-y-3">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                {course.rating && (
                                                    <Badge variant="outline" className="bg-background/20 backdrop-blur-sm border-primary/30 text-foreground px-3 py-1 text-xs">
                                                        {course.rating} ⭐ ({course.reviews})
                                                    </Badge>
                                                )}
                                                <Badge variant="outline" className="bg-background/20 backdrop-blur-sm border-primary/30 text-foreground px-3 py-1 text-xs">
                                                    {course.badge}
                                                </Badge>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                                                {course.title}
                                            </h2>
                                            <p className="text-xl md:text-2xl font-serif text-primary">
                                                {course.subtitle}
                                            </p>
                                            <p className="text-lg text-muted-foreground">
                                                {course.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8 space-y-6 flex-grow flex flex-col">
                                        <div className="space-y-3">
                                            <p className="text-foreground font-medium text-lg">
                                                {course.tagline}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {course.fullDescription}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {course.features.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <i className="bi bi-check-circle-fill text-primary text-sm mt-0.5"></i>
                                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="pt-4 space-y-3 mt-auto">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="w-full bg-[#ff4f00] text-white hover:bg-[#ff4f00]/90 h-14 text-lg font-bold shadow-lg hover:shadow-[0_0_30px_rgba(255,79,0,0.5)] transition-all"
                                            >
                                                <Link href={course.hotmartUrl} target="_blank">
                                                    <i className="bi bi-cart-fill mr-2"></i> Inscrever-se Agora
                                                </Link>
                                            </Button>
                                            <p className="text-xs text-center text-muted-foreground">
                                                Acesso imediato • 7 dias de garantia • Certificado de Conclusão
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Instructor */}
            <section className="py-20 bg-muted/20 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
                    <h2 className="text-4xl font-serif font-bold">Sobre o Instrutor</h2>
                    <div className="flex justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-primary/30 overflow-hidden relative">
                            <Image
                                src="/images/cusros/fotorafaperfil.jpeg.webp"
                                alt="Rafael Oliveira"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold">Rafael Oliveira</h3>
                        <p className="text-primary font-medium">Fundador • Gênesis Tattoo Art</p>
                        <div className="flex justify-center gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary">23+</div>
                                <div className="text-sm text-muted-foreground">Anos de experiência</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">70+</div>
                                <div className="text-sm text-muted-foreground">Premiações</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">7x</div>
                                <div className="text-sm text-muted-foreground">Tattoo Week</div>
                            </div>
                        </div>
                        <p className="text-muted-foreground max-w-2xl mx-auto pt-4">
                            Especialista em Aquarela, Colorido, Comics e Glitter. Referência em domínio técnico de pigmentação e previsibilidade de cicatrização, com método próprio de ensino focado em eliminar tentativa e erro.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
