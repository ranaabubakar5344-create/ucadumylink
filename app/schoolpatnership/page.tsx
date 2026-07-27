import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Lightbulb,
  MonitorPlay,
  Mail,
  Gamepad2,
  Palette,
  Cuboid,
  Code2,
  CheckCircle2,
  Users,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const creativeLabs = [
  { icon: Gamepad2, text: "Build a mini game in a day" },
  { icon: Palette, text: "Design a poster for a social cause" },
  { icon: Cuboid, text: "Experiment with 3D modelling or animation" },
  { icon: Code2, text: "Learn the basics of interactive media" },
];

const creativeMondays = [
  "Live design sprints and tutorials",
  "Game jams and interactive storytelling",
  "Panel talks with industry leaders in animation, UX/UI, and digital media",
  "Workshops on emerging tech like AR, VR, and AI in creative practice",
];

export default function SchoolPartnershipPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Connect & Engage
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[104px]">
            School
            <br />
            Partnerships
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
            UCA actively collaborates with local schools to provide students
            with enriching educational experiences, fostering a strong
            connection between the university and the community.
          </p>

          <Link
            href="#creative-labs"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Explore Partnerships
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              School Partnerships
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Step Into
              <br />
              Your Creative
              <br />
              Future
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black">
            <p>
              High school is just the beginning — at University for the Creative
              Arts@FEUC, we help students unlock their creative potential and
              prepare for a future in design, media, games, and technology.
            </p>

            <p>
              Moving into university is exciting, but it comes with new
              challenges: learning to think critically, collaborate on projects,
              and turn ideas into reality. With the right support, this
              transition becomes an adventure, not a hurdle.
            </p>
          </div>
        </div>
      </section>

      {/* CREATIVE LABS */}
      <section id="creative-labs" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Creative Labs
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Workshops For
              <br />
              High School
              <br />
              Students
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
              Creative Labs are immersive workshops where high school students
              explore real-world creative challenges with hands-on guidance from
              UCA tutors.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {creativeLabs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="group border border-black/10 bg-[#F7F7F2] p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[30px] font-black uppercase leading-[0.95]">
                    {item.text}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mt-10 border-l-4 border-[#C8EB00] bg-[#F7F7F2] p-7">
            <p className="text-lg leading-8 text-black/70">
              These sessions also give students insider tips on portfolio
              building, university applications, and creative careers, making
              sure they’re ready for the next step.
            </p>
          </div>
        </div>
      </section>

      {/* CREATIVE MONDAYS */}
      <section className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Creative Mondays
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Inspiration
              <br />
              And Insight
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              A weekly online series for students, educators, and creative
              professionals exploring the latest in arts and technology.
            </p>
          </div>

          <div className="space-y-5">
            {creativeMondays.map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
                <p className="text-lg leading-8">{item}</p>
              </div>
            ))}

            <div className="border border-[#C8EB00]/30 bg-[#C8EB00] p-7 text-[#0A1414]">
              <p className="font-garage text-[34px] font-black uppercase leading-none">
                Previous Sessions
              </p>
              <p className="mt-4 text-base leading-7">
                Digital Illustration in Practice, Game Level Design, and Visual
                Storytelling for Social Media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP BENEFITS */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Partnership Benefits
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Built For
              <br />
              Schools And
              <br />
              Students
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: "Hands-On Learning",
                text: "Students experience practical creative workshops connected to real university learning.",
              },
              {
                icon: Users,
                title: "Community Connection",
                text: "Schools connect with UCA through talks, workshops and student engagement activities.",
              },
              {
                icon: Sparkles,
                title: "Creative Confidence",
                text: "Students build confidence, portfolio awareness and understanding of creative pathways.",
              },
            ].map((item) => {
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

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[42%_58%] lg:items-center">
          <div>
            <CalendarDays className="h-12 w-12" />

            <h2 className="font-garage mt-5 text-[52px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[78px]">
              Book A
              <br />
              School
              <br />
              Workshop
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#0A1414]/75">
              Schools can book workshops with UCA to help students explore
              creative subjects, university pathways and future opportunities.
            </p>

            <a
              href="mailto:school@uca.feuc.ae"
              className="font-garage mt-7 inline-flex items-center gap-4 bg-[#0A1414] px-8 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
            >
              <Mail className="h-5 w-5" />
              school@uca.feuc.ae
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}