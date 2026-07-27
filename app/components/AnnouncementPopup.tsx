"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, CalendarDays, ArrowRight } from "lucide-react";

export default function AnnouncementPopup() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnnouncement(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const closeAnnouncement = () => {
    setShowAnnouncement(false);

    setTimeout(() => {
      setShowEnquiry(true);
    }, 250);
  };

  const closeEnquiry = () => {
    setShowEnquiry(false);
  };

  return (
    <>
      {/* ANNOUNCEMENT POPUP */}
      {showAnnouncement && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0A1414]/75 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden bg-white text-[#0A1414] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <button
              onClick={closeAnnouncement}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center bg-[#0A1414] text-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="bg-[#C8EB00] px-6 py-5">
              <p className="font-neue text-xs font-bold uppercase tracking-[0.28em]">
                Upcoming Event
              </p>
            </div>

            <div className="p-7 md:p-9">
              <CalendarDays className="h-12 w-12 text-[#C8EB00]" />

              <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[64px]">
                Open Day
                <br />
                At UCA UAE
              </h2>

              <p className="mt-5 text-base leading-7 text-black">
                Join our upcoming open day and explore programmes, admissions,
                scholarships, student life and creative opportunities at UCA UAE.
              </p>

              <div className="mt-6 border-l-4 border-[#C8EB00] bg-[#F7F7F2] p-4">
                <p className="font-bold">Date:Sunday,9 August 2026 </p>
                <p className="mt-1 text-sm text-black/65">
                  Register your interest and our admissions team will contact you.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://admissions.uca.feuc.ae/enquiry_form"
                  target="_blank"
                  onClick={closeAnnouncement}
                  className="font-garage inline-flex items-center justify-center gap-3 bg-[#0A1414] px-6 py-4 text-[17px] font-black uppercase text-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
                >
                  Register Now
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <button
                  onClick={closeAnnouncement}
                  className="font-garage border border-[#0A1414] px-6 py-4 text-[17px] font-black uppercase hover:bg-[#0A1414] hover:text-[#C8EB00]"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY POPUP */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[99998] flex items-center justify-center bg-[#0A1414]/75 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <button
              onClick={closeEnquiry}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1414] text-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center bg-[#0A1414] p-8 text-white md:p-10">
                <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#C8EB00]/80">
                  UCA @ FEUC
                </p>

                <h2 className="font-garage mt-5 text-[40px] font-black uppercase leading-[1.0] tracking-[-0.05em] text-[#C8EB00] md:text-[54px]">
                  Enquire
                  <br />
                  Now
                </h2>

                <p className="mt-5 text-base leading-7 text-white/85">
                  Explore programmes, admissions and your future at University
                  for the Creative Arts in the UAE.
                </p>
              </div>

              <div className="flex flex-col justify-center bg-white p-8 md:p-10">
                <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#0A1414]/60">
                  Admissions
                </p>

                <h3 className="font-garage mt-4 text-[34px] font-black uppercase leading-[1.0] tracking-[-0.04em] text-[#0A1414] md:text-[44px]">
                  Start Your
                  <br />
                  Journey
                </h3>

                <p className="mt-4 text-base leading-7 text-black">
                  Click below to open the enquiry form and connect
                  with our admissions team.
                </p>

                <a
                  href="https://admissions.uca.feuc.ae/enquiry_form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-garage mt-7 inline-flex w-fit items-center justify-center gap-3 bg-[#C8EB00] px-6 py-4 text-[17px] font-black uppercase text-[#0A1414] hover:bg-[#0A1414] hover:text-[#C8EB00]"
                >
                  Enquire Now
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}