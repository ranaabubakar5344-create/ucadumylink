"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ScholarshipSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1414] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/CampusFront.jpg')" }}
      />

      <div className="absolute inset-0 bg-[#0A1414]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1414]/70 via-[#0A1414]/40 to-[#0A1414]/70" />

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
            <span className="text-[#C8EB00]">Scholarship?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-white/85 md:text-lg">
            Please complete this form and our admissions team will contact you.
          </p>

          <form className="mx-auto mt-10 grid max-w-2xl gap-5 text-left sm:grid-cols-2">
            {["Name", "Email", "Mobile"].map((field) => (
              <input
                key={field}
                type={field === "Email" ? "email" : "text"}
                placeholder={field}
                className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white placeholder:text-white/75 outline-none backdrop-blur-sm transition focus:border-[#C8EB00]"
              />
            ))}

            <select className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white outline-none backdrop-blur-sm transition focus:border-[#C8EB00]">
              <option className="text-black">Select Course</option>
              <option className="text-black">Computer Science</option>
              <option className="text-black">Games Development</option>
              <option className="text-black">Graphic Design</option>
              <option className="text-black">Business &amp; Management</option>
            </select>

            <select className="w-full border-b border-white/45 bg-white/10 px-4 py-4 text-white outline-none backdrop-blur-sm transition focus:border-[#C8EB00] sm:col-span-2">
              <option className="text-black">Select Country</option>
              <option className="text-black">United Arab Emirates</option>
              <option className="text-black">Pakistan</option>
              <option className="text-black">India</option>
              <option className="text-black">Saudi Arabia</option>
            </select>

            <div className="flex justify-center sm:col-span-2">
              <button
                type="button"
                className="font-garage mt-3 inline-flex items-center gap-3 bg-[#C8EB00] px-9 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
              >
                Send
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}