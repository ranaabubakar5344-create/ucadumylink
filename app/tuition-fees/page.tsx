import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Landmark,
  ReceiptText,
  Wallet,
} from "lucide-react";

const tuitionFees = [
  {
    category: "Undergraduate",
    title: "Undergraduate Programmes",
    fee: "AED 47,775",
    vat: "Inclusive of 5% VAT",
    description:
      "Tuition fee for undergraduate  programmes",
    href: "/Programmes-ucauae",
    buttonText: "View Undergraduate Programmes",
    icon: GraduationCap,
  },
  {
    category: "Postgraduate",
    title: "Postgraduate Programmes",
    fee: "AED 49,775",
    vat: "Inclusive of 5% VAT",
    description:
      "Tuition fee for postgraduate programmes",
    href: "/Programmes-ucauae",
    buttonText: "View Postgraduate Programme",
    icon: Landmark,
  },
  {
    category: "Entry Routes",
    title: "Foundation & Pre-Master's",
    fee: "AED 29,775",
    vat: "Inclusive of 5% VAT",
    description:
      "Tuition fee for Entry route programmes",
    href: "/Programmes-ucauae",
    buttonText: "View Entry Route Programmes",
    icon: ReceiptText,
  },
];

const feeNotes = [
  "All displayed tuition fees are inclusive of 5% VAT.",
  "Fees are shown in UAE Dirhams.",
  "Programme availability and tuition fees may be subject to review.",
  "Additional charges may apply for registration, learning materials, resits or other services where applicable.",
  "Scholarships and payment plans may be available to eligible students.",
];

export default function TuitionFeesPage() {
  return (
    <main className="overflow-x-hidden bg-[#F7F7F2] text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute -right-24 -top-28 h-[450px] w-[450px] rounded-full bg-[#C8EB00]/10 blur-3xl" />
        <div className="absolute -bottom-44 left-1/4 h-[430px] w-[430px] rounded-full bg-[#C8EB00]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#C8EB00] sm:text-sm">
            Fees & Funding
          </p>

          <h1 className="font-garage mt-6 max-w-6xl text-[52px] font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-[76px] md:text-[100px] lg:text-[116px]">
            Tuition
            <br />
            <span className="text-[#C8EB00]">Fees</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white md:text-xl">
            Review the tuition fees for undergraduate, postgraduate and entry
            route programmes by University for the Creative Arts (UCA) delivered by Future Education University College (FEUC) .
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}

      {/* FEES CARDS */}
      <section className="bg-[#F7F7F2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12">
            <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#829B00]">
              Current Tuition Fees
            </p>

            <h2 className="font-garage mt-4 text-[46px] font-black uppercase leading-[0.94] tracking-[-0.045em] sm:text-[62px] md:text-[78px]">
              Choose Your
              <br />
              Study Level
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tuitionFees.map((item, index) => {
              const Icon = item.icon;
              const featured = index === 1;

              return (
                <article
                  key={item.category}
                  className={`group flex min-h-[520px] flex-col border p-7 transition duration-300 hover:-translate-y-1 md:p-8 ${
                    featured
                      ? "border-[#C8EB00] bg-[#0A1414] text-white"
                      : "border-black/10 bg-white hover:border-[#C8EB00]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center ${
                      featured
                        ? "bg-[#C8EB00] text-[#0A1414]"
                        : "bg-[#0A1414] text-[#C8EB00]"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <p
                    className={`font-neue mt-8 text-xs font-bold uppercase tracking-[0.24em] ${
                      featured ? "text-[#C8EB00]" : "text-[#829B00]"
                    }`}
                  >
                    {item.category}
                  </p>

                  <h3 className="font-garage mt-4 text-[34px] font-black uppercase leading-[0.94] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <div className="mt-8 border-y border-current/15 py-7">
                    <p
                      className={`font-garage text-[44px] font-black uppercase leading-none sm:text-[50px] ${
                        featured ? "text-[#C8EB00]" : "text-[#0A1414]"
                      }`}
                    >
                      {item.fee}
                    </p>

                    <p
                      className={`mt-3 text-sm font-bold uppercase tracking-[0.14em] ${
                        featured ? "text-white/60" : "text-black/55"
                      }`}
                    >
                      {item.vat}
                    </p>
                  </div>

                  <p
                    className={`mt-7 leading-7 ${
                      featured ? "text-white/65" : "text-black/65"
                    }`}
                  >
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className={`font-garage group/button mt-auto inline-flex items-center justify-center gap-3 px-6 py-4 text-[16px] font-black uppercase transition ${
                      featured
                        ? "bg-[#C8EB00] text-[#0A1414] hover:bg-white"
                        : "bg-[#0A1414] text-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
                    }`}
                  >
                    {item.buttonText}

                    <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEE SUMMARY */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden border border-black/10">
            <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">
              <div className="bg-[#C8EB00] p-8 text-[#0A1414] md:p-10">
                <ReceiptText className="h-12 w-12" />

                <p className="font-neue mt-8 text-xs font-bold uppercase tracking-[0.24em]">
                  Fee Summary
                </p>

                <h2 className="font-garage mt-4 text-[44px] font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-[52px]">
                  Tuition Fee
                  <br />
                  Overview
                </h2>
              </div>

              <div className="bg-[#0A1414] p-7 text-white md:p-10">
                <div className="divide-y divide-white/10">
                  {tuitionFees.map((item) => (
                    <div
                      key={item.category}
                      className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <div>
                        <p className="font-garage text-[25px] font-black uppercase leading-none">
                          {item.title}
                        </p>

                        <p className="mt-2 text-sm text-white/55">
                          Inclusive of 5% VAT
                        </p>
                      </div>

                      <p className="font-garage text-[30px] font-black uppercase text-[#C8EB00]">
                        {item.fee}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
     

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0A1414] py-16 text-white md:py-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C8EB00]/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-9 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#C8EB00]">
              Fees & Admissions
            </p>

            <h2 className="font-garage mt-5 text-[44px] font-black uppercase leading-[0.94] tracking-[-0.04em] sm:text-[60px] md:text-[72px]">
              Need Help With
              <br />
              Tuition Fees?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white md:text-lg">
              Speak with an Admissions Counsellor for guidance about programme
              fees, scholarships, payment options and the application process.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3">
            <Link
              href="https://admissions.uca.feuc.ae/enquiry_form"
              target="_blank"
              rel="noopener noreferrer"
              className="font-garage group inline-flex items-center justify-center gap-3 bg-[#C8EB00] px-8 py-5 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Enquire About Fees

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="mailto:admissions@uca.feuc.ae"
              className="font-garage inline-flex items-center justify-center border border-white/25 px-8 py-5 text-[16px] font-black uppercase text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
            >
              admissions@uca.feuc.ae
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}