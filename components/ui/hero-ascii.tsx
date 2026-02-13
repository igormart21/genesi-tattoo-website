'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HeroAscii() {
    useEffect(() => {
        const embedScript = document.createElement('script');
        embedScript.type = 'text/javascript';
        embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
        document.head.appendChild(embedScript);

        // Add CSS to hide branding elements and crop canvas
        const style = document.createElement('style');
        style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      
      /* Mobile: No clip path or less aggressive */
      [data-us-project] canvas {
        clip-path: none !important;
      }
      
      /* Desktop: Clip bottom */
      @media (min-width: 1024px) {
        [data-us-project] canvas {
          clip-path: inset(0 0 10% 0) !important;
        }
      }
      
      [data-us-project] * {
        pointer-events: none !important;
      }
      /* Aggressive branding removal */
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"],
      /* Mobile specific branding - CSS Only */
      /* DO NOT USE :has() ON WRAPPER DIVS AS IT HIDES THE CANVAS TOO */
      a[href*="unicorn.studio"],
      .unicorn-embed-branding,
      [class*="unicorn-studio"] {
        visibility: hidden !important; 
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Target the specific branding link if it's a direct child, but be careful */
      [data-us-project] > a[href*="unicorn.studio"] {
        display: none !important;
      }
    `;
        document.head.appendChild(style);

        // CSS-only approach for branding removal to avoid accidentally killing the canvas
        // The style block above handles the hiding of 'unicorn' links and 'made with' text
        // safely by targeting attributes and classes without removing DOM nodes.

        return () => {
            document.head.removeChild(embedScript);
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            {/* Vitruvian man animation - Visible on all devices now */}
            <div className="absolute inset-0 w-full h-full block">
                <div
                    data-us-project="whwOGlfJ5Rz2rHaEUgHl"
                    style={{ width: '100%', height: '100%', minHeight: '100vh' }}
                />
            </div>

            {/* Stars background - Always consistent */}
            <div className="absolute inset-0 w-full h-full stars-bg opacity-30 pointer-events-none"></div>

            {/* Top Header Information */}
            <div className="absolute top-20 left-0 right-0 z-20">
                <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 lg:gap-4">
                        <div className="font-serif text-primary text-xl lg:text-3xl font-bold tracking-widest italic transform">
                            GÊNESIS.
                        </div>
                        <div className="h-3 lg:h-4 w-px bg-white/40"></div>
                        <span className="text-white/60 text-[8px] lg:text-[10px] font-mono">EST. 2024</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-white/60">
                        <span>LAT: -23.5924°</span>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <span>LONG: -46.6644°</span>
                    </div>
                </div>
            </div>

            {/* Corner Frame Accents */}
            <div className="absolute top-20 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-primary/30 z-20"></div>
            <div className="absolute top-20 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-primary/30 z-20"></div>
            <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-primary/30 z-20" style={{ bottom: '5vh' }}></div>
            <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-primary/30 z-20" style={{ bottom: '5vh' }}></div>

            <div className="relative z-10 flex min-h-screen items-center pt-16 lg:pt-0" style={{ marginTop: '5vh' }}>
                <div className="container mx-auto px-6 lg:px-16 lg:ml-[10%]">
                    <div className="max-w-lg relative">
                        {/* Top decorative line */}
                        <div className="flex items-center gap-2 mb-3 opacity-60">
                            <div className="w-8 h-px bg-primary"></div>
                            <span className="text-primary text-[10px] font-mono tracking-wider">001</span>
                            <div className="flex-1 h-px bg-primary"></div>
                        </div>

                        {/* Title with dithered accent */}
                        <div className="relative">
                            <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-40"></div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-[0.9] font-serif tracking-wide" style={{ letterSpacing: '0.05em' }}>
                                ARTE NA
                                <span className="block text-primary mt-2 opacity-90">
                                    PELE.
                                </span>
                            </h1>
                        </div>

                        {/* Decorative dots pattern - desktop only */}
                        <div className="hidden lg:flex gap-1 mb-3 opacity-40">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div key={i} className="w-0.5 h-0.5 bg-primary rounded-full"></div>
                            ))}
                        </div>

                        {/* Description with subtle grid pattern */}
                        <div className="relative">
                            <p className="text-xs lg:text-base text-gray-300 mb-5 lg:mb-6 leading-relaxed font-sans font-light opacity-80 max-w-md">
                                Quando a experiência é única, o valor é percebido em cada detalhe.
                            </p>

                            {/* Technical corner accent - desktop only */}
                            <div className="hidden lg:block absolute -right-4 top-1/2 w-3 h-3 border border-primary opacity-30" style={{ transform: 'translateY(-50%)' }}>
                                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary" style={{ transform: 'translate(-50%, -50%)' }}></div>
                            </div>
                        </div>

                        {/* Buttons with technical accents */}
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                            <Link href="https://wa.me/5511951321091" target="_blank">
                                <button className="relative px-5 lg:px-6 py-3 bg-primary/10 text-primary font-mono text-xs lg:text-sm border border-primary hover:bg-primary hover:text-black transition-all duration-300 group w-full lg:w-auto">
                                    <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    SOLICITAR ORÇAMENTO
                                </button>
                            </Link>

                            <Link href="/portfolio">
                                <button className="relative px-5 lg:px-6 py-3 bg-transparent border border-white/30 text-white font-mono text-xs lg:text-sm hover:bg-white hover:text-black transition-all duration-300 w-full lg:w-auto">
                                    VER PORTFÓLIO
                                </button>
                            </Link>
                        </div>

                        {/* Bottom technical notation - desktop only */}
                        <div className="hidden lg:flex items-center gap-2 mt-6 opacity-40">
                            <span className="text-white text-[9px] font-mono">∞</span>
                            <div className="flex-1 h-px bg-white"></div>
                            <span className="text-white text-[9px] font-mono">GENESIS.ART</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="absolute left-0 right-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-sm" style={{ bottom: '5vh' }}>
                <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
                        <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
                        <span className="lg:hidden">VINTAGE.MOD</span>
                        <div className="hidden lg:flex gap-1">
                            {[12, 8, 16, 6, 10, 14, 7, 9].map((height, i) => (
                                <div key={i} className="w-1 h-3 bg-primary/30" style={{ height: `${height}px` }}></div>
                            ))}
                        </div>
                        <span>V2.0.0</span>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
                        <span className="hidden lg:inline">◐ RENDERING</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="hidden lg:inline">MOEMA.SP</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .dither-pattern {
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, #C6A15B 1px, #C6A15B 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, #C6A15B 1px, #C6A15B 2px);
          background-size: 3px 3px;
        }
        
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent);
          background-size: 200% 200%, 180% 180%, 250% 250%, 220% 220%, 190% 190%, 240% 240%, 210% 210%, 230% 230%;
          background-position: 0% 0%, 40% 40%, 60% 60%, 20% 20%, 80% 80%, 30% 30%, 70% 70%, 50% 50%;
          opacity: 0.3;
        }
      `}</style>
        </section >
    );
}
