import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Mail,
  ShieldCheck,
  LifeBuoy,
  Users,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const supportCards = [
  {
    icon: ShieldCheck,
    title: "Confidential Support",
    text: "Speak with trained professionals about stress, anxiety, low mood, relationships, isolation or personal concerns.",
  },
  {
    icon: LifeBuoy,
    title: "Wellbeing Resources",
    text: "Access online tools, practical advice, self-help resources and support services whenever you need them.",
  },
  {
    icon: Users,
    title: "Peer Community",
    text: "Connect with peers through supportive communities and networks that help you feel understood.",
  },
];

export default function StudentWellbeingSupportPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Student Support
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[96px]">
            Student
            <br />
            Wellbeing
            <br />
            & Support
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Supporting your mental, emotional, and social wellbeing throughout
            your time at UCA Delivered by FEUC.
          </p>

          <Link
            href="#wellbeing"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Explore Support
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#CBE800]">
              Student Wellbeing
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Your
              <br />
              Wellbeing Is
              <br />
              A Priority
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/70">
            <p>
              At University for the Creative Arts Delivered by FEUC, your wellbeing is a
              priority. We are committed to creating a supportive learning
              environment where you feel safe, healthy, and connected — both
              academically and personally.
            </p>

            <p>
              Our wellbeing services are designed to support your mental,
              emotional, and social health throughout your time at University for the Creative Arts Delivered by FEUC. We
              understand that university life can bring challenges, and we are
              here to help you navigate them with care and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section id="wellbeing" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#CBE800]">
              What Support Is Available
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Support For
              <br />
              Every Step
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {supportCards.map((item) => {
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

      {/* DETAILED SUPPORT */}
      <section className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Wellbeing Services
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Care,
              <br />
              Guidance
              <br />
              And
              <br />
              Connection
            </h2>
          </div>

          <div className="space-y-5">
            <div className="border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-garage text-[36px] font-black uppercase leading-none text-[#C8EB00]">
                Confidential Wellbeing Support
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/70">
                We offer a confidential space where you can speak with trained
                professionals about any concerns you may have — including
                stress, anxiety, low mood, sleep challenges, relationships, or
                feelings of isolation. Support can be personalised and ongoing,
                depending on your needs.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-garage text-[36px] font-black uppercase leading-none text-[#C8EB00]">
                Wellbeing Tools & Resources
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/70">
                UCA offers access to online tools and platforms such as 24/7
                support services that provide emotional support, practical
                advice, and self-help resources whenever you need them.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-garage text-[36px] font-black uppercase leading-none text-[#C8EB00]">
                Peer Support & Community Engagement
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/70">
                Students can connect with peers through online communities and
                support networks that offer a safe space to share experiences,
                give encouragement, and feel understood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#C8EB00] py-14 text-[#0A1414]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[42%_58%] lg:items-center">
            <div>
              <HeartHandshake className="h-12 w-12" />

              <h2 className="font-garage mt-5 text-[52px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[78px]">
                How To
                <br />
                Access
                <br />
                Support
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#0A1414]/75">
                To access wellbeing or counselling services, reach out to the
                University for the Creative Arts Delivered by FEUC student support team. Our team will guide you through
                your options and connect you with the right support.
              </p>

              <a
                href="mailto:studentwellbeing@uca.feuc.ae"
                className="font-garage mt-7 inline-flex items-center gap-4 bg-[#0A1414] px-8 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
              >
                <Mail className="h-5 w-5" />
                studentwellbeing@uca.feuc.ae
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center">

          <h2 className="font-garage mt-5 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[86px]">
            Your Wellbeing
            <br />
            Matters
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70">
            No matter what you’re facing — academic pressures, personal
            challenges, or life changes — support is available. At UCA Delivered by FEUC,
            we’re committed to helping you feel heard, supported, and empowered.
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl gap-3 bg-[#F7F7F2] p-5 text-left">
            <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
            <p className="text-sm leading-7 text-black/65">
              If you or someone you know needs immediate help in a crisis, seek
              urgent medical or emergency support from local health services.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}