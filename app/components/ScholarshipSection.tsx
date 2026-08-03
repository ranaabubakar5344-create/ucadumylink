"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

// Module has no types; use require to avoid TypeScript error.
// @ts-ignore
const countryList = require("react-select-country-list");

type CountryOption = {
  value: string;
  label: string;
};

export default function ScholarshipSection() {
  const countryOptions = useMemo<CountryOption[]>(
    () => countryList().getData(),
    []
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return;

    const timer = window.setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      // Temporary submit delay.
      // API/database request can be added here later.
      await new Promise((resolve) => setTimeout(resolve, 800));

      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Scholarship form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0A1414] text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/CampusFront.jpg')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#0A1414]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1414]/70 via-[#0A1414]/40 to-[#0A1414]/70" />

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <p className="font-neue text-sm font-bold uppercase tracking-[0.28em] text-[#C8EB00]">
            Scholarship Enquiry
          </p>

          <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[1] tracking-[-0.04em] sm:text-[60px] md:text-[76px]">
            Interested in
            <br />
            <span className="text-[#C8EB00]">
              Scholarship?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-white/85 md:text-lg">
            Please complete this form and our admissions team will
            contact you.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="scholarship-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-10 grid min-h-[365px] max-w-2xl content-start gap-5 text-left sm:grid-cols-2"
              >
                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="name"
                  className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white placeholder:text-white/75 outline-none backdrop-blur-sm transition focus:border-[#C8EB00]"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white placeholder:text-white/75 outline-none backdrop-blur-sm transition focus:border-[#C8EB00]"
                />

                {/* MOBILE */}
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  required
                  autoComplete="tel"
                  className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white placeholder:text-white/75 outline-none backdrop-blur-sm transition focus:border-[#C8EB00]"
                />

                {/* PROGRAMME */}
                <select
                  name="course"
                  defaultValue=""
                  required
                  className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white outline-none backdrop-blur-sm transition focus:border-[#C8EB00]"
                >
                  <option value="" disabled className="text-black">
                    Select Programme
                  </option>

                  <optgroup
                    label="Undergraduate Programmes"
                    className="text-black"
                  >
                    <option
                      value="bsc-computer-science"
                      className="text-black"
                    >
                      BSc (Hons) Computer Science
                    </option>

                    <option
                      value="bsc-games-development"
                      className="text-black"
                    >
                      BSc (Hons) Games Development
                    </option>

                    <option
                      value="ba-graphic-design"
                      className="text-black"
                    >
                      BA (Hons) Graphic Design
                    </option>

                    <option
                      value="ba-business-management"
                      className="text-black"
                    >
                      BA (Hons) Business &amp; Management
                    </option>

                    <option
                      value="ba-visual-communication"
                      className="text-black"
                    >
                      BA (Hons) Visual Communication
                    </option>

                    <option
                      value="ba-digital-marketing-social-media"
                      className="text-black"
                    >
                      BA (Hons) Digital Marketing &amp; Social Media
                    </option>
                  </optgroup>

                  <optgroup
                    label="Postgraduate Programmes"
                    className="text-black"
                  >
                    <option value="mba" className="text-black">
                      MBA
                    </option>
                  </optgroup>

                  <optgroup
                    label="Entry Routes"
                    className="text-black"
                  >
                    <option
                      value="integrated-foundation-year"
                      className="text-black"
                    >
                      Integrated Foundation Year
                    </option>

                    <option
                      value="integrated-pre-masters"
                      className="text-black"
                    >
                      Integrated Pre-Masters
                    </option>
                  </optgroup>
                </select>

                {/* COUNTRY */}
                <select
                  name="country"
                  defaultValue=""
                  required
                  className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white outline-none backdrop-blur-sm transition focus:border-[#C8EB00] sm:col-span-2"
                >
                  <option value="" disabled className="text-black">
                    Select Country
                  </option>

                  {countryOptions.map((country) => (
                    <option
                      key={country.value}
                      value={country.label}
                      className="text-black"
                    >
                      {country.label}
                    </option>
                  ))}
                </select>

                {/* SUBMIT BUTTON */}
                <div className="flex justify-center sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-garage mt-3 inline-flex min-w-[160px] items-center justify-center gap-3 bg-[#C8EB00] px-9 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.97,
                }}
                transition={{ duration: 0.4 }}
                className="mx-auto mt-10 flex min-h-[365px] max-w-2xl flex-col items-center justify-center border border-[#C8EB00] bg-[#C8EB00] px-6 py-12 text-center text-[#0A1414] shadow-[0_20px_55px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-16 w-16 items-center justify-center bg-[#0A1414] text-[#C8EB00]">
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <h3 className="font-garage mt-6 text-[30px] font-black uppercase leading-none sm:text-[38px]">
                  Thank you for your enquiry!
                </h3>

                <p className="mt-5 max-w-lg text-base font-semibold leading-7 sm:text-lg">
                  Your scholarship enquiry has been submitted
                  successfully.
                  <br />
                  Our admissions team will contact you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}