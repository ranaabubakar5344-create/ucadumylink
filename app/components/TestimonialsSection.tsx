"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed Hassan",
    course: "Graphic Design Student",
    image: "/s1.jpg",
    quote:
      "UCA UAE helped me build confidence, creativity and a strong portfolio for my future career.",
  },
  {
    name: "Sara Khan",
    course: "Digital Marketing Student",
    image: "/s2.jpg",
    quote:
      "The learning experience is practical, creative and connected to real industry expectations.",
  },
  {
    name: "Omar Ali",
    course: "Games Development Student",
    image: "/s3.jpg",
    quote:
      "I learned how to turn ideas into interactive experiences through projects and teamwork.",
  },
  {
    name: "Maya George",
    course: "Visual Communication Student",
    image: "/s4.jpg",
    quote:
      "The creative environment pushed me to think differently and develop my own design voice.",
  },
  {
    name: "Daniel Smith",
    course: "Computer Science Student",
    image: "/s5.jpg",
    quote:
      "UCA UAE gave me the technical and creative mindset needed for future-focused careers.",
  },
  // {
  //   name: "Rana Abubakar",
  //   course: "Business & Management Student",
  //   image: "/s6.jpg",
  //   quote:
  //     "The programme helped me understand leadership, creativity and business in a global context.",
  // }
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(2);

  const activeTestimonial = testimonials[active];

useEffect(() => {
  const timer = setInterval(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, 3500); // Speed

  return () => clearInterval(timer);
}, []);

  const visibleCards = useMemo(() => {
    const total = testimonials.length;

    return [-3, -2, -1, 0, 1, 2, 3].map((offset) => {
      const index = (active + offset + total) % total;
      return {
        ...testimonials[index],
        index,
        offset,
      };
    });
  }, [active]);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getCardStyle = (offset: number) => {
    const abs = Math.abs(offset);

    return {
      x: offset * 155,
      y: abs === 0 ? 0 : abs === 1 ? 28 : abs === 2 ? 56 : 82,
      rotate: offset * 5,
      scale: abs === 0 ? 1.12 : abs === 1 ? 0.96 : abs === 2 ? 0.82 : 0.68,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.78 : abs === 2 ? 0.45 : 0.22,
      zIndex: 10 - abs,
      filter: abs >= 3 ? "blur(2px)" : "blur(0px)",
    };
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F8F3] py-20 text-[#0A1414] md:py-28">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,#0A1414_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Student Voices
          </p>

          <h2 className="font-garage mt-4 text-[56px] font-black uppercase leading-[1] tracking-[-0.05em] md:text-[88px]">
            What Our
            <br />
            Students Say
          </h2>

          <p className="mt-6 text-base leading-7 text-black/65 md:text-lg">
            Creative minds, global ambitions and real stories from students
            building their future with UCA UAE.
          </p>
        </motion.div>

        <div
          className="relative mt-14 h-[430px]"

        >
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#0A1414]/15 bg-white text-[#0A1414] shadow-lg transition hover:bg-[#C8EB00] lg:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#0A1414]/15 bg-white text-[#0A1414] shadow-lg transition hover:bg-[#C8EB00] lg:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute left-1/2 top-4 h-[360px] w-[1px] -translate-x-1/2 bg-transparent">
            {visibleCards.map((card) => {
              const style = getCardStyle(card.offset);
              const isActive = card.offset === 0;

              return (
                <motion.button
                  key={`${card.index}-${card.offset}`}
                  onClick={() => setActive(card.index)}
                  animate={style}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className={`absolute left-1/2 top-0 h-[330px] w-[230px] -translate-x-1/2 overflow-hidden rounded-[26px] bg-[#0A1414] shadow-[0_20px_60px_rgba(10,20,20,0.18)] ${
                    isActive
                      ? "ring-4 ring-[#C8EB00]"
                      : "ring-1 ring-black/10"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="font-garage text-[24px] font-black uppercase leading-none text-white">
                      {card.name}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      {card.course}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto -mt-6 max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white px-6 py-8 shadow-[0_18px_55px_rgba(10,20,20,0.1)]"
            >
              <Quote className="mx-auto h-10 w-10 text-[#C8EB00]" />

              <div className="mt-4 flex justify-center gap-1 text-[#C8EB00]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-black/75">
                “{activeTestimonial.quote}”
              </p>

              <div className="mt-6">
                <p className="font-garage text-[28px] font-black uppercase leading-none">
                  {activeTestimonial.name}
                </p>
                <p className="mt-1 text-sm text-black/55">
                  {activeTestimonial.course}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
       









          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  active === index
                    ? "w-9 bg-[#C8EB00]"
                    : "w-2.5 bg-[#0A1414]/25 hover:bg-[#0A1414]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}