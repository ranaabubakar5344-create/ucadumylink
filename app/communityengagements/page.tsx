import Link from "next/link";
import {
  ArrowRight,
  Paintbrush,
  Gamepad2,
  Code2,
  WandSparkles,
  Handshake,
  School,
  Users,
  Mail,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

const creativeProjects = [
  {
    icon: Paintbrush,
    title: "Public Art & Design",
    text: "Supporting community engagement through applied learning, real-world experiences, innovation, creativity, and meaningful cultural contributions across the UAE.",
  },
  {
    icon: Gamepad2,
    title: "Community Game Jams",
    text: "Engaging young people to design games that highlight social issues or local heritage.",
  },
  {
    icon: Code2,
    title: "Tech For Good",
    text: "Using coding, AR/VR, and interactive media to solve real-world community challenges.",
  },
  {
    icon: WandSparkles,
    title: "Pop-Up Creative Labs",
    text: "Free creative workshops for residents on illustration, animation, UX design, and digital media.",
  },
];

const partnershipItems = [
  "Partner with UCA@FEUC for bespoke workshops and community programmes",
  "Host collaborative design challenges or hackathons",
  "Engage in mentorship programmes for aspiring creative students",
];

export default function CommunityEngagementPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Connect & Engage
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-[104px]">
            Community
            <br />
            Engagement
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-whitEe/90">
            UCA in the community: creativity beyond campus, connecting people
            through design, media and technology.
          </p>

          <Link
            href="#creative-projects"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Explore Projects
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Community Engagement
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Creativity
              <br />
              Beyond
              <br />
              Campus
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black">
            <p>
              At University for the Creative Arts @FEUC, creativity isn’t
              confined to the classroom. We believe in using design, media, and
              technology to inspire, connect, and make a real difference in
              local and global communities.
            </p>

            <p>
              Our community engagement initiatives empower students, educators,
              and residents to collaborate on projects that are meaningful,
              imaginative, and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* CREATIVE PROJECTS */}
      <section id="creative-projects" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Creative Projects
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Local Ideas.
              <br />
              Real Impact.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
              Students and staff work on hands-on projects that bring art,
              design, and technology to local communities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {creativeProjects.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-[#F7F7F2] p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

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

      {/* PARTNERSHIPS */}
      <section className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Partnerships
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[70px]">
              Collaboration
              <br />
              That Inspires
              <br />
              Change
            </h2>

            <p className="mt-6 text-lg leading-8 text-white">
             UCA@FEUC partners with schools, government entities, creative organisations, and community stakeholders to develop projects that foster creativity, innovation, and positive community impact.
            </p>
          </div>

          <div className="space-y-5">
            {partnershipItems.map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
                <p className="text-lg leading-8">{item}</p>
              </div>
            ))}

            <div className="border border-[#C8EB00]/30 bg-[#C8EB00] p-7 text-[#0A1414]">
              <Lightbulb className="h-8 w-8" />
              <p className="font-garage mt-4 text-[34px] font-black uppercase leading-none">
                Real-World Experience
              </p>
              <p className="mt-4 text-base leading-7">
                Students gain practical experience while communities benefit
                from innovative solutions and cultural enrichment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN COLLABORATE */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Get Involved
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[70px ]">
              Join UCA In
              <br />
              Making A
              <br />
              Difference
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: School,
                title: "Schools",
                text: "Collaborate on workshops, student experiences and creative learning activities.",
              },
              {
                icon: Handshake,
                title: "Organisations",
                text: "Partner with UCA@FEUC for creative programmes and community initiatives.",
              },
              {
                icon: Users,
                title: "Creative Professionals",
                text: "Support mentorship, talks, projects and meaningful creative engagement.",
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
            <Mail className="h-12 w-12" />

            <h2 className="font-garage mt-5 text-[52px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[78px]">
              Let’s
              <br />
              Collaborate
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#0A1414]/75">
              Whether you’re a local school, organisation, or creative
              professional, UCA@FEUC invites you to get involved. Together, we
              can use creativity to educate, inspire, and transform communities.
            </p>

            <a
              href="mailto:community@uca.feuc.ae"
              className="font-garage mt-7 inline-flex items-center gap-4 bg-[#0A1414] px-8 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
            >
              <Mail className="h-5 w-5" />
              community@uca.feuc.ae
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}