// app/programmes/[slug]/page.tsx

import { notFound } from "next/navigation";
import { PROGRAMME_DETAILS } from "@/app/data/programme";
import ProgrammeDetailClient from "./ProgrammeDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

//  Add this to pre‑render all programme pages
export async function generateStaticParams() {
  return Object.keys(PROGRAMME_DETAILS).map((slug) => ({
    slug,
  }));
}

export default async function ProgrammePage({ params }: PageProps) {
  const { slug } = await params;
  const programme = PROGRAMME_DETAILS[slug as keyof typeof PROGRAMME_DETAILS];

  if (!programme) notFound();

  return <ProgrammeDetailClient programme={programme} />;
}