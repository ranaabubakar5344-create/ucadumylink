import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Briefcase,
  MapPin,
  Lightbulb,
  Star,
  Building2,
  CheckCircle2,
} from "lucide-react";

const standoutCards = [
  {
    icon: Globe2,
    title: "Why Choose UCA delivered by FEUC?",
    text: "FEUC offers future-oriented education with programmes aligned to the needs of an evolving global landscape.",
  },
  {
    icon: Briefcase,
    title: "Business-Oriented Approach",
    text: "Our approach equips students with the skills and knowledge needed to succeed in today’s interconnected world.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    text: "Located in the emirate of umm al quwain in UAE , UCA delivered by FEUC connects students with international opportunities and regional industry access.",
  },
  {
    icon: Lightbulb,
    
    title: "UAQ FTZ Advantage",
    text: "Being part of UAQ FTZ supports innovation, accessibility and connection to wider business opportunities.",
  },
  
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
      
          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[65px]">
  University for the creative arts  (UCA)  delivered by      
      <br />
Future Education University College (FEUC) 
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
            A global hub of creativity, innovation and future-focused education
            in the heart of the UAE.
          </p>

        
        </div>
      </section>

      <section id="about-feuc" className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Who We Are
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Innovation
              <br />
              And Creative
              <br />
              Excellence
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black">
            <p>
             University for the creative arts (UCA) delivered by Future Education University College (FEUC) is bringing a legacy of
             innovation, and creative excellence to the heart of the
              Middle East.
            </p>

            <p>
         University for the creative arts (UCA) delivered by Future Education University College (FEUC) is more than an academic institution — it is a global hub of
              inspiration where students from diverse backgrounds embark on an
              extraordinary educational journey.
            </p>

            <p>
              Through cutting-edge programmes and pioneering teaching
              methodologies, we cultivate the next generation of creative and
              business leaders, equipping them to thrive in an ever-evolving
              world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Why UCA delivered by FEUC Stands Out
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Designed To
              <br />
              Shape The
              <br />
              Future
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {standoutCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-[#F7F7F2] p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[32px] font-black uppercase leading-[0.95]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-black/65 transition group-hover:text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <Building2 className="h-12 w-12 text-[#C8EB00]" />

            <h2 className="font-garage mt-5 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Modern
              <br />
              Learning
              <br />
              Spaces
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "Ultramodern classrooms with digital technologies",
              "Central Hub-libraries , quiet zones, digital learning space and academic resources",
              "High-tech creative labs and collaborative spaces",
              "Learning environments designed to ignite curiosity and bold ideas",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
                <p className="text-lg leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <Star className="mx-auto h-12 w-12" />

          <h2 className="font-garage mt-5 text-[56px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[88px]">
            Student
            <br />
            Benefits
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0A1414]">
            At  UCA delivered by FEUC, students connect with employers, gain industry insights,
            and thrive in a global market. International students also benefit
            from simplified visa support for an easier transition to studying in
            the UAE.
          </p>

          <Link
             href={`https://wa.me/${971566761798}`}
             target="blank"
            className="font-garage mt-10 inline-flex items-center gap-4 bg-[#0A1414] px-9 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}