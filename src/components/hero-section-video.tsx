"use client";

export function HeroSectionVideo() {
  return (
    <section className="min-h-[85vh] md:min-h-screen bg-[#250063] relative flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Background gradient that complements video colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#250063] to-[#000000] opacity-100">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(circle at center, rgba(37, 0, 99, 0.4) 0%, transparent 70%)'
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#250063]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#250063]/20 via-transparent to-[#250063]/20"></div>
      </div>
      
      {/* Video Background */}
      <div className="relative w-full max-w-[19.6vw] md:max-w-[19vw] h-[15vh] md:h-[17vh] relative z-10 overflow-hidden rounded-2xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rounded-2xl"
        >
          <source src="/octopishero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

