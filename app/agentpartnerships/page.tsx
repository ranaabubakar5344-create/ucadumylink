import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Users,
  FileCheck2,
  GraduationCap,
  Plane,
  CheckCircle2,
  Mail,
  Handshake,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const supportItems = [
  {
    icon: GraduationCap,
    text: "Choosing the right creative programme such as Graphic Design, Visual Communication, Games Development, or Computer Science",
  },
  {
    icon: FileCheck2,
    text: "Preparing your portfolio and application",
  },
  {
    icon: ShieldCheck,
    text: "Understanding entry requirements and scholarships",
  },
  {
    icon: Plane,
    text: "Navigating visa and relocation processes",
  },
];

export default function AgentPartnersPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Connect & Engage
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[104px]">
            Agent
            <br />
            Partners
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Connecting students worldwide with trusted local guidance for a
            smooth journey into creative higher education at UCA.
          </p>

          <Link
            href="#partner-support"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Explore Partner Support
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Agent Partners
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Global
              <br />
              Gateway To
              <br />
              Creativity
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black">
            <p>
              At University for the Creative Arts@FEUC, we work with a worldwide
              network of partner agents and representatives to help students take
              the first step toward a creative future. Wherever you are, there’s
              likely a UCA partner ready to guide you.
            </p>

            <p>
              Our global network connects students to expert advisors who can
              provide personalised support throughout the admissions journey.
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL PARTNERS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Global Network
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Local Advice.
              <br />
              Global
              <br />
              Opportunity.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Globe2,
                title: "Worldwide Reach",
                text: "Partner agents support students across regions with trusted local guidance.",
              },
              {
                icon: Users,
                title: "Personal Support",
                text: "Students receive guidance from enquiry through application and arrival.",
              },
              {
                icon: Handshake,
                title: "Trusted Partners",
                text: "We work with representatives who understand UCA programmes and admissions.",
              },
            ].map((item) => {
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

      {/* SUPPORT */}
      <section id="partner-support" className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Student Support
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Guidance
              <br />
              Every Step
              <br />
              Of The Way
            </h2>

            <p className="mt-6 text-lg leading-8 text-white">
              Our partner agents help students make informed decisions and
              navigate each stage of the application process with confidence.
            </p>
          </div>

          <div className="space-y-5">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex gap-4 border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
                >
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-[#C8EB00]" />
                  <p className="text-lg leading-8">{item.text}</p>
                </div>
              );
            })}

            <div className="border border-[#C8EB00]/30 bg-[#C8EB00] p-7 text-[#0A1414]">
              <CheckCircle2 className="h-8 w-8" />
              <p className="font-garage mt-4 text-[34px] font-black uppercase leading-none">
                Simple. Smooth. Stress-Free.
              </p>
              <p className="mt-4 text-base leading-7">
                With a local partner agent, starting your journey is simple,
                smooth, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[42%_58%] lg:items-center">
          <div>
            <MapPin className="h-12 w-12 text-[#C8EB00]" />

            <h2 className="font-garage mt-5 text-[52px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[78px]">
              Interested In
              <br />
              Recruiting
              <br />
              For UCA?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-black/70">
              If you are interested in recruiting for us, connect with our team.
              We welcome conversations with trusted representatives who can help
              students discover creative higher education opportunities with
              UCA.
            </p>

            <a
              href="mailto:agents@uca.feuc.ae"
              className="font-garage mt-7 inline-flex items-center gap-4 bg-[#0A1414] px-8 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-[#C8EB00] hover:text-[#0A1414]"
            >
              <Mail className="h-5 w-5" />
              agents@uca.feuc.ae
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}