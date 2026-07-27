import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0A1414] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image
              src="/logo2.png"
              alt="UCA UAE"
              width={260}
              height={90}
              className="h-auto w-[300px] brightness-0 invert"
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white">
             Future Education University College, Official Partner of UCA-UK empowers creative minds through future-focused education,
              practical learning and global opportunities.
            </p>

            {/* <p className="font-garage mt-8 text-[36px] uppercase leading-[0.9] text-[#C8EB00]">
              Think Creative.
              <br />
              Think UCA.
            </p> */}
          </div>

          <div>
            <h3 className="font-garage text-[26px] uppercase text-[#C8EB00]">
              Programmes
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white">
              {[
                "Computer Science",
                "Games Development",
                "Graphic Design",
                "Business & Management",
                "Visual Communication",
                "Master of Business Administration",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block hover:text-[#C8EB00]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-garage text-[26px] uppercase text-[#C8EB00]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white">
              {[
                ["About UCA UAE", "/about-feuc"],
                ["Admissions", "/#"],
                ["Student Life", "/#"],
                ["Scholarships", "/#"],
                ["Apply Now", "https://admissions.uca.feuc.ae/registration"],
                ["Contact", "/#"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="block hover:text-[#C8EB00]">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-garage text-[26px] uppercase text-[#C8EB00]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
               Future Education University College, Official Partner of UCA-UK
              </p>

              <p className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#C8EB00]" />
                +971 56 676 1798
              </p>

              <p className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#C8EB00]" />
                admissions@uca.feuc.ae
              </p>
            </div>

            <Link
              href="https://admissions.uca.feuc.ae/registration"
              className="font-garage mt-7 inline-flex items-center gap-3 bg-[#C8EB00] px-6 py-3 text-[17px] font-black uppercase text-[#0A1414] hover:bg-white"
            >
             
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="mt-7 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#" 
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>


{/* COPYRIGHT BAR */}

{/* FINAL DISCLAIMER BAR */}
<div className="border-t border-[#C8EB00]/20 bg-[#0A1414]">
  <div className="mx-auto max-w-7xl px-4 py-4">
    <p className="text-[11px] leading-[1.6] text-white sm:text-[12px]">
      Future Education University College is licensed by the UAQ Free Trade
      Zone, Government of Umm Al Quwain, UAE, to deliver degree programmes from
      the{" "}
      <span className="font-semibold text-[#C8EB00]">
        University for the Creative Arts (UCA), UK
      </span>
      . The University for the Creative Arts (UCA), UK is solely responsible for
      academic quality assurance, the issuance of degrees, and academic
      transcripts. Future Education University College bears no responsibility
      for the{" "}
      <span className="font-semibold text-white">
        UAE Ministry of Higher Education and Scientific Research (MOHESR) –
        Commission for Academic Accreditation (CAA)
      </span>{" "}
      degree attestation or equivalency of degrees awarded by the University for
      the Creative Arts (UCA), UK.
    </p>

    <section className="botom-foter">
       <div className="text-white max-3xl ">
        <p className="bg-color[##c4e500]">

</p>

       </div>


    </section>
  </div>
</div>
    </footer>
  );
}  

