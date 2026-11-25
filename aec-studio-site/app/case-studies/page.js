import { PageHero, CtaBand } from "../components/pages";
import { Proof } from "../components/sections";
export const metadata = { title: "Case studies", description: "Measurable results from AEC projects." };
export default function Page() {
  return (
    <>
      <PageHero e="Case studies" t="Results our clients can measure." s="How coordinated drawings and models keep projects moving." crumbs={[["Case studies"]]} />
      <Proof />
      <CtaBand />
    </>
  );
}
