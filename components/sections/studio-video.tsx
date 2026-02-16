"use client";

export function StudioVideo() {
    return (
        <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Technical Column */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col justify-between h-full py-12 text-right font-mono text-xs text-white/40 tracking-widest border-r border-white/5 pr-8">
                        <div className="space-y-4">
                            <div className="flex items-center justify-end gap-2 text-primary/80">
                                <span className="font-bold">LIVE FEED</span>
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                            </div>
                            <div className="opacity-70">CAM_02 • REC</div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-primary/50">SENSOR</span>
                                <span>ISO 800</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-primary/50">APERTURE</span>
                                <span>f/1.8</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-primary/50">SHUTTER</span>
                                <span>1/120</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-primary/50">INDEX</span>
                                <span>002</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 opacity-50">
                            <div>-23.5924° S</div>
                            <div>-46.6644° W</div>
                        </div>
                    </div>

                    {/* Center Video Frame */}
                    <div className="lg:col-span-5 relative group">
                        {/* Frame borders */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-primary/50 transition-all duration-500 group-hover:w-16 group-hover:h-16"></div>
                        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-primary/50 transition-all duration-500 group-hover:w-16 group-hover:h-16"></div>

                        {/* Video Container */}
                        <div className="relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-sm border border-white/10 bg-zinc-900 shadow-2xl">
                            <video
                                className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/images/studio/VID-20250415-WA0012.mp4"
                            />

                            {/* Overlay Scan Line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] w-full animate-scan pointer-events-none"></div>

                            {/* Inner UI Overlay */}
                            <div className="absolute inset-4 border border-white/5 pointer-events-none">
                                <div className="absolute top-2 left-2 w-1 h-3 bg-white/20"></div>
                                <div className="absolute top-2 left-2 w-3 h-1 bg-white/20"></div>
                                <div className="absolute bottom-2 right-2 w-1 h-3 bg-white/20"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-1 bg-white/20"></div>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30 tracking-[0.2em]">
                                    GENESIS_DATA_STREAM
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Column */}
                    <div className="lg:col-span-4 space-y-8 lg:pl-4 text-center lg:text-left">
                        <div>
                            <div className="text-primary font-mono text-xs tracking-[0.5em] mb-4 inline-block border-b border-primary/30 pb-1">
                                THE SPACE
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-none">
                                O ESTÚDIO.
                            </h2>
                            <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>
                        </div>

                        <p className="text-muted-foreground text-lg font-light leading-relaxed">
                            Um santuário de arte e expressão, projetado para sua máxima segurança e conforto.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3 text-sm text-white/50 justify-center lg:justify-start">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                <span>Biossegurança Nível Hospitalar</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/50 justify-center lg:justify-start">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                <span>Ambiente Climatizado</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/50 justify-center lg:justify-start">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                <span>Wi-Fi & Lounge</span>
                            </div>
                        </div>

                        {/* Mobile Technical Info (Hidden on Desktop) */}
                        <div className="lg:hidden pt-8 border-t border-white/5 mt-8 flex justify-between font-mono text-xs text-white/40 tracking-widest">
                            <div className="flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                <span>LIVE</span>
                            </div>
                            <span>CAM_02</span>
                            <span>ISO 800</span>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(500%); opacity: 0; }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </section>
    );
}
