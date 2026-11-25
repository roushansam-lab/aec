import { PageHero, CtaBand } from "../components/pages";
import { Work } from "../components/sections";
export const metadata = { title: "Portfolio", description: "Selected projects across millwork, BIM, drawings and rendering." };
export default function Page() {
  return (
    <>
      <PageHero e="Portfolio" t="Work that speaks for itself." s="Filter recent projects by service." crumbs={[["Portfolio"]]} />
      <Work />
      <CtaBand />
    </>
  );
}
