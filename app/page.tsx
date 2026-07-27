import Hero from "@/app/components/Hero";
import ManifestoSection from "@/app/components/ManifestoSection";
import ProgrammesSection from "./components/ProgrammesSection";
import WhyUcaSection from "./components/WhyUcaSection";
import ScholarshipSection from "./components/ScholarshipSection";
import TestimonialsSection from "./components/TestimonialsSection";
export default function HomePage() {
  return (
    <>
      <Hero />
      <ManifestoSection/>
      <ScholarshipSection/>

      <ProgrammesSection/>
      <WhyUcaSection/>
      {/* <TestimonialsSection/> */}
    </>
  );
}