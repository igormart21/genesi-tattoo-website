"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

const images = [
    "/images/studio/20260210_193758.jpg",
    "/images/studio/20260210_193923.jpg",
    "/images/studio/20260210_194420.jpg",
];

export function Studio() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            {/* Background Carousel */}
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                opts={{
                    loop: true,
                    duration: 60,
                }}
                className="absolute inset-0 w-full h-full"
            >
                <CarouselContent className="h-full ml-0">
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="pl-0 relative w-full h-screen">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-110"
                                style={{
                                    backgroundImage: `url('${src}')`,
                                }}
                            />
                            {/* Dark Overlay per slide */}
                            <div className="absolute inset-0 bg-black/50" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Global Overlays */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Dither Pattern */}
                <div className="absolute inset-0 opacity-20 dither-pattern" />

                {/* Scanlines/Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60" />
            </div>

            {/* Content Container */}
            <div className="relative z-30 h-screen flex flex-col justify-between container mx-auto px-6 py-12 lg:px-16">

                {/* Header Tech Markers */}
                <div className="flex justify-between items-start pt-10 lg:pt-20">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-primary/80 font-mono text-[10px] tracking-widest">LIVE FEED</span>
                        </div>
                        <span className="text-white/40 font-mono text-[10px]">CAM_0{current + 1}</span>
                    </div>

                    <div className="hidden lg:flex gap-8 text-[10px] font-mono text-white/40">
                        <span>ISO 800</span>
                        <span>f/1.8</span>
                        <span>1/120</span>
                    </div>
                </div>

                {/* Main Title Area */}
                <div className="max-w-4xl space-y-6">
                    <div className="flex items-center gap-3 opacity-60 mb-2">
                        <span className="text-primary text-xs font-mono tracking-widest">002</span>
                        <div className="w-12 h-px bg-primary" />
                        <span className="text-primary text-xs font-mono tracking-widest">THE SPACE</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white tracking-tight leading-none">
                        O ESTÚDIO<span className="text-primary">.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed border-l-2 border-primary/30 pl-6 backdrop-blur-sm bg-black/20 py-2">
                        Um santuário de arte e expressão. Ambiente estéril, acolhedor e projetado para sua máxima segurança e conforto.
                    </p>

                    {/* Slide Indicators */}
                    <div className="flex gap-3 mt-8">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={`h-1 transition-all duration-300 ${current === i ? "w-12 bg-primary" : "w-4 bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer Tech Details */}
                <div className="flex justify-between items-end pb-10">
                    <div className="hidden lg:block">
                        <div className="w-24 h-24 border-l border-b border-white/20 relative">
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary" />
                            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/40">
                                COORD: <br />
                                -23.5924° S <br />
                                -46.6644° W
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <span className="text-white/30 text-[10px] font-mono">GENESIS TATTOO STUDIO</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-primary' : 'bg-white/10'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Borders */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/10 pointer-events-none z-20" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/10 pointer-events-none z-20" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/10 pointer-events-none z-20" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/10 pointer-events-none z-20" />

            <style jsx global>{`
        .dither-pattern {
          background-image: repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 1px,
              #c6a15b 1px,
              #c6a15b 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 1px,
              #c6a15b 1px,
              #c6a15b 2px
            );
          background-size: 3px 3px;
        }
        .bg-radial-gradient-vignette {
            background-image: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
        }
      `}</style>
        </section>
    );
}
