import { PageHero, CtaBand } from "../components/pages";
import { Faq } from "../components/sections";
export const metadata = { title: "FAQ", description: "Answers about outsourcing, software, turnaround, pricing and confidentiality." };
export default function Page() {
  return (
    <>
      <PageHero e="FAQ" t="Questions teams ask first." s="Straight answers before you start." crumbs={[["FAQ"]]} />
      <Faq />
      <CtaBand />
    </>
  );
}
