import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe2,
  Briefcase,
  Users,
  TrendingUp,
  Landmark,
  GraduationCap,
  CheckCircle2,
  Star,
  FlaskConical
} from "lucide-react";


const standoutCards = [
  {
    icon: Award,
    title: "Top Rankings",
    text: "UCA is recognised as one of the UK's leading specialist creative universities.",
  },
  {
    icon: Globe2,
    title: "Global Recognition",
    text: "Known internationally for creative education, art, design, media and innovation.",
  },
  {
    icon: Briefcase,
    title: "Industry-Relevant Programmes",
    text: "Courses bridge creativity and business to prepare students for real-world success.",
  },
  {
    icon: Users,
    title: "Global Learning Environment",
    text: "Diverse campuses foster collaboration, cultural exchange and creative confidence.",
  },
  {
    icon: TrendingUp,
    title: "Creative Opportunities",
    text: "Students benefit from specialist facilities, partnerships and professional networks.",
  },
];

const rankings = [
  "Top Specialist Art & Design University in the UK",
  "Highly ranked specialist creative university",
  "Recognised for creative education and student experience",
  "Research rated world-leading or internationally excellent",
  "Recognised for social inclusion and student support",
];

const accreditations = [
  {
    icon: GraduationCap,
    title: "The Rookies",
    text: "UCA Games is recognised by The Rookies for games design and creative talent development.",
  },
  {
    icon: Landmark,
    title: "UK Government",
    text: "University for the Creative Arts is officially recognised within UK higher education.",
  },
  {
    icon: Award,
    title: "Privy Council",
    text: "UCA is chartered by the UK Privy Council, supporting academic credibility and governance.",
  },
];

const accreditation = [
  {
    icon: Award,
    title: "Second Highest-Ranked Specialist Creative University",
    text: "UCA-UK is the second highest-ranked specialist creative university in the UK for 2025, according to The Guardian.",
  },
  {
    icon: Users,
    title: "12th for Social Inclusion",
    text: "UCA-UK is ranked 12th for social inclusion in the Times and Sunday Times University Guide 2025.",
  },
  {
    icon: FlaskConical,
    title: "World-Leading Research",
    text: "UCA-UK is the UK's top specialist art and design university for world-leading research outputs in the most recent Research Excellence Framework.",
  },
];
export default function UCAUKPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            About UCA UK
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[104px]">
            University
            <br />
            For The
            <br />
            Creative Arts
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
            A leading UK institution specialising in arts, design, media and
            creative education, with a legacy of over 160 years.
          </p>

          <Link
            href="#uca-overview"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Discover UCA
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section id="uca-overview" className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              About UCA
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Creative
              <br />
              Education
              <br />
              With Global
              <br />
              Impact
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black">
            <p>
              University for the Creative Arts (UCA) is a leading UK institution
              specialising in arts, design, and creative education, with a legacy
              of over 160 years.
            </p>

            <p>
              UCA offers diverse undergraduate and postgraduate programmes
              across multiple campuses, providing hands-on, industry-relevant
              education in fields such as fashion, architecture, film, and
              graphic design.
            </p>

            <p>
              Known for its creative focus, research, and commitment to
              innovation, UCA fosters a diverse and inclusive community that
              empowers students to excel and lead in global creative industries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Why UCA Stands Out
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Designed For
              <br />
              Creative
              <br />
              Futures
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {standoutCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-[#F7F7F2] p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[34px] font-black uppercase leading-[0.95]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/65 transition group-hover:text-white/70">
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
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              UCA Rankings
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Recognised
              <br />
              For Creative
              <br />
              Excellence
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {rankings.map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-white/10 bg-black/40 text-white p-6 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                <Star className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
                <p className="text-lg leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Accreditation & Recognition
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Academic
              <br />
              Credibility
              <br />
              And Trust
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {accreditations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-white p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[34px] font-black uppercase leading-[0.95]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/65 transition group-hover:text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      
      
   <section className="bg-[#F7F7F2] py-16 md:py-6">
  <div className="mx-auto max-w-7xl px-5">
    {/* HEADING */}
    <div className="mb-12 max-w-4xl">
      <p className="font-neue text-sm font-bold uppercase tracking-[0.28em] text-[#C8EB00]">
        UCA UK Recognition
      </p>

      <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-[82px]">
        Our
        <br />
        Successes
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 md:text-lg">
        UCA continues to receive national recognition for creative education,
        social inclusion and world-leading research.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid gap-5 md:grid-cols-3">
      {accreditation.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="group flex min-h-[330px] flex-col border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
          >
            <div className="flex h-14 w-14 items-center justify-center bg-[#C8EB00]/15 transition group-hover:bg-[#C8EB00]">
              <Icon className="h-7 w-7 text-[#C8EB00] transition group-hover:text-[#0A1414]" />
            </div>

            <h3 className="font-garage mt-7 text-[30px] font-black uppercase leading-[0.96] tracking-[-0.03em] md:text-[34px]">
              {item.title}
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-black/65 transition group-hover:text-white/75">
              {item.text}
            </p>

            <div className="mt-auto pt-7">
              <div className="h-[3px] w-14 bg-[#C8EB00] transition-all duration-300 group-hover:w-full" />
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>
      
      
      
      
      
      
      
      
      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12" />

          <h2 className="font-garage mt-5 text-[56px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[88px]">
            Start Your
            <br />
            Creative Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0A1414]/75">
            Apply now and become part of a globally recognised creative
            university.
          </p>

          <Link
            href="https://admissions.uca.feuc.ae/registration"
            className="font-garage mt-10 inline-flex items-center gap-4 bg-[#0A1414] px-9 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
            target="blank"
          >
            Apply Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}