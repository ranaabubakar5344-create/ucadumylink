import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Film,
  Camera,
  Shirt,
  Gamepad2,
  Users,
  Mic2,
  Leaf,
  Rocket,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const clubs = [
  "UCA Creative Collective – collaborative projects and exhibitions",
  "Film & Media Society – produce, critique and explore cinema",
  "Photography & Visual Storytelling Club – capture campus life",
  "Fashion & Textile Forum – design, create and showcase ideas",
  "Animation & Motion Graphics Guild – 2D and 3D animation",
  "Digital Arts Lab – interactive and digital media projects",
  "Theatre & Performance Workshop – plays, improv and showcases",
  "UCA Soundscape Ensemble – collaborate musically",
  "Dance & Movement Collective – express through movement",
  "Debates & Dialogue Society – critical thinking and discussion",
  "Creative Writing & Zine Club – write, publish and share",
  "Global Voices Cultural Club – celebrate cultural diversity",
  "Model UCA Nations (MUN) – leadership and diplomacy",
  "Innovation & Design Thinkers Hub – creative solutions",
  "Sustainability & Green Futures Club – greener campus initiatives",
  "Entrepreneurship & Startup Society – bring ideas to life",
  "Game & eSports Lounge – compete, play and connect",
  "Campus Wellbeing Circle – wellness and mindfulness",
  "Food & Culture Club – explore cuisines and events",
];

const featured = [
  { icon: Palette, title: "Creative Collective" },
  { icon: Film, title: "Film & Media" },
  { icon: Camera, title: "Photography" },
  { icon: Shirt, title: "Fashion Forum" },
  { icon: Gamepad2, title: "eSports Lounge" },
  { icon: Leaf, title: "Green Futures" },
];

export default function StudentLifePage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Student Experience
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[104px]">
            Student Life
            <br />
            At UCA FEUC
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
            A vibrant student experience where creativity, collaboration, and
            community come together.
          </p>

          <Link
            href="#clubs"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Explore Clubs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
           
            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Creativity,
              <br />
              Community
              <br />
              And Campus
              <br />
              Life
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black">
            <p>
              UCA.FEUC offers a vibrant student life where creativity,
              collaboration, and community come together. Students can join a
              variety of clubs, societies, and activities to explore their
              interests, meet new friends, and make the most of their university
              experience.
            </p>

            <p>
              You can also propose new clubs in partnership with the Student
              Leadership Team, helping to shape campus life according to your
              passions.
            </p>
          </div>
        </div>
      </section>

      <section id="clubs" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
 

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.2] tracking-[-0.05em] md:text-[82px]">
              Find Your
              <br />
              Creative
              <br />
              Community
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => {
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
                    Join a creative space to collaborate, experiment, perform
                    and build lasting connections.
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 border border-black/10 bg-[#F7F7F2] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {clubs.map((item) => (
                <div key={item} className="flex gap-3 border-b border-black/10 pb-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
                  <p className="text-sm leading-7 text-black/70 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Student Leadership Team
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Lead,
              <br />
              Collaborate
              <br />
              And Make
              <br />
              An Impact
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: Users,
                title: "Leadership Skills",
                text: "Gain hands-on experience in leadership, communication, event management and teamwork.",
              },
              {
                icon: Mic2,
                title: "Campus Voice",
                text: "Inspire peers, plan activities, organise events and help shape the student experience.",
              },
              {
                icon: Rocket,
                title: "Future Ready",
                text: "Build skills and confidence that support your personal growth long after graduation.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
                >
                  <Icon className="h-9 w-9 text-[#C8EB00]" />

                  <h3 className="font-garage mt-5 text-[36px] font-black uppercase leading-none">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <HeartHandshake className="mx-auto h-12 w-12" />

          <h2 className="font-garage mt-5 text-[56px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[88px]">
            Shape Campus
            <br />
            Life With Us
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0A1414]/75">
            Collaborate with passionate peers, create lasting memories, and help
            build a student community that reflects your ideas and ambitions.
          </p>

          <Link
            href="#"
            className="font-garage mt-10 inline-flex items-center gap-4 bg-[#0A1414] px-9 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
          >
            Get Involved
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}