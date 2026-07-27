import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Mail,
  Phone,
  CheckCircle2,
  BookOpen,
  FileText,
  GraduationCap,
  Clock,
} from "lucide-react";

const supportCards = [
  {
    icon: CalendarClock,
    title: "Assignment Extensions",
    text: "Guidance on submitting extension requests and understanding the requirements clearly.",
  },
  {
    icon: FileText,
    title: "Semester Deferment",
    text: "Support with deferment, study pauses, enrolment status changes, timelines and academic implications.",
  },
  {
    icon: GraduationCap,
    title: "Academic Advising",
    text: "Help with course planning, degree progression, credit requirements and study goals.",
  },
  {
    icon: BookOpen,
    title: "Academic Skills",
    text: "Support with research, writing, referencing, academic integrity and time management.",
  },
];

const advisingItems = [
  "Course planning and timetable management",
  "Degree progression and credit requirements",
  "Balancing workload and setting academic goals",
];

const skillsItems = [
  "Research and writing skills",
  "Time management",
  "Referencing and academic integrity",
];

export default function AcademicSupportPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5  md:py-32 mt-[-15px]">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Student Support
          </p>

          <h1 className="font-garage mt-5 max-w-5xl text-[58px] font-black uppercase leading-[0.90] tracking-[-0.05em] md:text-[104px]">
            Academic
            <br />
            Support
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            Guidance, resources, and support to help you succeed at every stage
            of your academic journey.
          </p>

          <Link
            href="#support"
            className="font-garage mt-10 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
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
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#8FB000]">
              Academic Support
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.2] tracking-[-0.05em] md:text-[82px]">
              Supporting
              <br />
              Your Success
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/70">
            <p>
              At University for the Creative Arts (UCA) at FEUC, we are
              committed to supporting your academic success at every stage of
              your studies.
            </p>

            <p>
              Through dedicated support services, we help you navigate academic
              processes, manage your workload, and address any challenges that
              may arise during your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-[#C8EB00] py-8 text-[#0A1414]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2">
          <a
            href="mailto:support@uca.feuc.ae"
            className="group flex items-center gap-4 bg-[#0A1414] p-5 text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
          >
            <Mail className="h-7 w-7" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Email Us
              </p>
              <p className="font-garage mt-1 text-[26px] font-black uppercase">
                support@uca.feuc.ae
              </p>
            </div>
          </a>

          <a
            href="tel:+97165300408"
            className="group flex items-center gap-4 border border-[#0A1414] bg-[#C8EB00] p-5 text-[#0A1414] transition hover:bg-[#0A1414] hover:text-[#C8EB00]"
          >
            <Phone className="h-7 w-7" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Call Us
              </p>
              <p className="font-garage mt-1 text-[26px] font-black uppercase">
                +97165300408
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section id="support" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#8FB000]">
              What We Support
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Services Built
              <br />
              Around You
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-[#F7F7F2] p-6 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-9 w-9 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[30px] font-black uppercase leading-[0.95]">
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
              Academic Planning
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Clear
              <br />
              Guidance
              <br />
              When You
              <br />
              Need It
            </h2>
          </div>

          <div className="space-y-5">
            <div className="border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-garage text-[36px] font-black uppercase leading-none text-[#C8EB00]">
                Academic Advising & Planning
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/70">
                We offer support to help you make informed decisions about your
                academic path and manage your studies effectively.
              </p>

              <div className="mt-6 grid gap-3">
                {advisingItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
                    <p className="text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-garage text-[36px] font-black uppercase leading-none text-[#C8EB00]">
                Academic Skills Support
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/70">
                Our services include help with essential academic skills that
                strengthen confidence and improve performance.
              </p>

              <div className="mt-6 grid gap-3">
                {skillsItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
                    <p className="text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <Clock className="mx-auto h-12 w-12" />

          <h2 className="font-garage mt-5 text-[56px] font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-[88px]">
            Here To Help
            <br />
            You Thrive
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0A1414]/75">
            Your academic success is at the heart of what we do. Whether you
            need help with deadlines, planning your studies, or understanding
            academic policies, the UCA at FEUC Academic Support team is here to
            ensure you receive the guidance and resources you need to thrive.
          </p>

          <Link
            href="mailto:support@uca.feuc.ae"
            className="font-garage mt-10 inline-flex items-center gap-4 bg-[#0A1414] px-9 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
          >
            Contact Support
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}