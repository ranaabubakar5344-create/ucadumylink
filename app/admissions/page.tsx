import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";


export default function admissions(){

return(
<section className="bg-white py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-8">
    <div className="overflow-hidden border border-black/10">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        {/* LEFT */}
        <div className="bg-[#C8EB00] p-8 text-[#0A1414] md:p-12">
          <p className="font-neue text-xs font-bold uppercase tracking-[0.25em]">
            Admissions Support
          </p>

          <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-[60px] md:text-[72px]">
            Speak to an
            <br />
            Admissions
            <br />
            Expert
          </h2>

          <div className="mt-8 flex h-14 w-14 items-center justify-center bg-[#0A1414] text-[#C8EB00]">
            <MessageCircle className="h-7 w-7" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center bg-[#0A1414] p-8 text-white md:p-12">
          <h3 className="font-garage text-[30px] font-black uppercase leading-none text-[#C8EB00] sm:text-[36px]">
            Every student&apos;s journey is unique.
          </h3>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white md:text-lg">
            Connect with one of our Admissions Counsellors for personalised
            guidance on programmes, eligibility, scholarships, visa support,
            and the application process.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="https://wa.me/971566761798?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20an%20Admissions%20Counsellor%20about%20programmes%2C%20eligibility%2C%20scholarships%2C%20visa%20support%20and%20the%20application%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="font-garage group inline-flex items-center justify-center gap-3 bg-[#C8EB00] px-7 py-4 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Start a WhatsApp Chat
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="mailto:admissions@uca.feuc.ae"
              className="font-garage group inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-[17px] font-black uppercase text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
            >
              <Mail className="h-5 w-5" />
              admissions@uca.feuc.ae
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)

    
}