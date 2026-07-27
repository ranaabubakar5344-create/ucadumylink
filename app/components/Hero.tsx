"use client";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1414]">
      <div className="relative h-[520px] md:h-[620px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero/robot-1.jpg"
        >
          <source src="/backs.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}