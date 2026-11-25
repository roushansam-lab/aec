import { PageHero, CtaBand } from "../components/pages";
import { Industries, Work } from "../components/sections";
export const metadata = { title: "Industries", description: "AEC support for commercial, hospitality, residential, infrastructure, retail and developers." };
export default function Page() {
  return (
    <>
      <PageHero e="Industries" t="Expertise across six sectors." s="Deep experience where drawing accuracy decides schedule and cost." crumbs={[["Industries"]]} />
      <Industries />
      <Work />
      <CtaBand />
    </>
  );
}
